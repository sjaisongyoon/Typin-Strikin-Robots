const express = require("express");
const router = express.Router();
const passport = require('passport');

const Game = require('../../models/Game');


router.get("/test", (req, res) => res.json({ msg: "This is the games route" }));

router.get('/user/:userId', (req, res) => {
    Game.find({ $or: [{ winnerId: req.params.userId }, { loserId: req.params.userId }] })
        .sort({ date: -1 })
        .then(games => res.json(games))
        .catch(err =>
            res.status(404).json({ nogamesfound: 'No games found for that user' }
            )
        );
});

//may want to add in validation for game type and be included in only two types: single, multi
router.post('/',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {

        const newGame = new Game({
            gameType: req.body.gameType,
            winnerId: req.body.winnerId,
            winnerWPM: req.body.winnerWPM,
            loserId: req.body.loserId,
            loserWPM: req.body.loserWPM,
            date: req.body.date
        });

        newGame.save().then(game => res.json(game));
    }
);

module.exports = router;