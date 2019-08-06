const express = require("express");
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');


const Match = require('../../models/Match');

const months = [
"January", "February", "March",
"April", "May", "June", "July",
"August", "September", "October",
"November", "December"
   ];

const matchPojo = match => ({
    id: match.id,
    gameType: match.gameType,
    winnerId: match.winnerId,
    winnerWPM: match.winnerWPM,
    loserId: match.loserId,
    loserWPM: match.loserWPM,
    date: match.date.getDate() + ' ' + months[match.date.getMonth()] + ' ' + match.date.getFullYear()
})

const newMatch = reqBody => {
    let match;
    if (reqBody.gameType === 'single') {
        match = new Match({
            gameType: reqBody.gameType,
            winnerId: mongoose.Types.ObjectId(reqBody.winnerId),
            winnerWPM: reqBody.winnerWPM
        })
    } else {
        match = new Match({
            gameType: reqBody.gameType,
            winnerId: mongoose.Types.ObjectId(reqBody.winnerId), //may need to use mongoose.Types.ObjectId(req.body.winnerId).  
            //should be fine as long as we stay consistent with creating the foreign key and seaching for it or updating it
            winnerWPM: reqBody.winnerWPM,
            loserId: mongoose.Types.ObjectId(reqBody.loserId),
            loserWPM: reqBody.loserWPM,
        });
    }
    return match;
}

router.get("/test", (req, res) => res.json({ msg: "This is the matches route"}));

router.get('/user/:userId', 
(req, res) => {
    let winner = { winnerId: mongoose.Types.ObjectId(req.params.userId)};
    let loser = { loserId: mongoose.Types.ObjectId(req.params.userId) };
    Match.find({ $or: [winner, loser] })
        .sort({ date: -1 })
        .then(matches => {
            let matchesPojo = {};
            matches.forEach( (match) => {
                matchesPojo[match.id] = matchPojo(match);
            })
            res.json(matchesPojo);
        })
        .catch(err =>
            res.status(404).json({ nomatchesfound: 'No matches found for that user' }));
});

//may want to add in validation for game type and be included in only two types: single, multi
router.post('/', 
(req, res) => {
        let match = newMatch(req.body);
        match.save().then(match => res.json(matchPojo(match)))
            .catch(err => res.status(400).json({ parameters: 'Invalid match parameters' }));
    }
);

module.exports = router;