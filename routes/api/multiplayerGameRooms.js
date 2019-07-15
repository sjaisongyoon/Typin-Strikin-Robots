const express = require("express");
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const MultiplayerGameRoom = require('../../models/MultiplayerGameRoom');


router.get("/test", (req, res) => res.json({ msg: "This is the multiplayerGameRooms route" }));

router.post('/',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const newMultiplayerGameRoom = new MultiplayerGameRoom({
            player1Id: mongoose.Types.ObjectId(req.body.player1Id), 
            player2Id: mongoose.Types.ObjectId(req.body.player2Id),
            // date: req.body.date
        });
        newMultiplayerGameRoom.save().then(multiplayerGameRoom => res.json(multiplayerGameRoom))
            .catch(err => res.status(400).json({ parameters: 'Invalid multiplayerGameRoom parameters' }));
    }
);

router.delete("/:multiplayerGameRoomId", (req, res) => {
    let multiplayerGameRoom = { _id: mongoose.Types.ObjectId(req.params.multiplayerGameRoomId) }
    // res.send('Got a DELETE request at /user');
    MultiplayerGameRoom.findOneAndRemove(multiplayerGameRoom)
        .then( (removedRoom) => {
            res.json(removedRoom)
        })
        .catch(err => res.status(404).json({ nomultiplayergameroomfound: 'No multiplayerGameRoom found' }));
});


module.exports = router;