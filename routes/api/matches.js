const express = require("express");
const router = express.Router();
const passport = require('passport');

const Match = require('../../models/Match');


router.get("/test", (req, res) => res.json({ msg: "This is the matches route" }));

router.get('/user/:userId', (req, res) => {
    Match.find({ $or: [{ winnerId: req.params.userId }, { loserId: req.params.userId }] })
        .sort({ date: -1 })
        .then(matches => res.json(matches))
        .catch(err =>
            res.status(404).json({ nomatchesfound: 'No matches found for that user' }
            )
        );
});

//may want to add in validation for game type and be included in only two types: single, multi
router.post('/',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const newMatch = new Match({
            gameType: req.body.gameType,
            winnerId: req.body.winnerId, //may need to use mongoose.Types.ObjectId(req.body.winnerId).  should be fine as long as we stay consistent with creating the foreign key and seaching for it or updating it
            winnerWPM: req.body.winnerWPM,
            loserId: req.body.loserId,
            loserWPM: req.body.loserWPM,
            date: req.body.date
        });

        newMatch.save().then(match => res.json(match));
    }
);

module.exports = router;