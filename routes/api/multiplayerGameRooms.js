const express = require("express");
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const MultiplayerGameRoom = require('../../models/MultiplayerGameRoom');


router.get("/test", (req, res) => res.json({ msg: "This is the multiplayerGameRooms route" }));

router.get("/", (req, res) => {
    MultiplayerGameRoom.find()
        .sort({ date: -1 })
        .then( (gameRooms) => {
            let gameRoomsPojo = {};
            gameRooms.forEach( gameRoom => {
                let gameRoomPojo = {
                    id: gameRoom.id,
                    player1Id: gameRoom.player1Id,
                    player2Id: gameRoom.player2Id
                }
                gameRoomsPojo[gameRoom.id] = gameRoomPojo;
            })
            res.json(gameRoomsPojo);
        })
        .catch(err => res.status(404).json({ nomultiplayergameroomsfound: 'No multiplayerGameRooms found' }));
});

router.post("/",
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const newMultiplayerGameRoom = new MultiplayerGameRoom({
            player1Id: mongoose.Types.ObjectId(req.body.playerId), 
            // player2Id: mongoose.Types.ObjectId(req.body.player2Id),
            // date: req.body.date
        });
        newMultiplayerGameRoom.save().then(multiplayerGameRoom => {
            let gameRoomPojo = {
                id: multiplayerGameRoom.id,
                player1Id: multiplayerGameRoom.player1Id,
                player2Id: multiplayerGameRoom.player2Id
            };
            res.json(gameRoomPojo)
        })
            .catch(err => res.status(400).json({ parameters: 'Invalid multiplayerGameRoom parameters' }));
    }
);

router.patch('/:multiplayerGameRoomId', (req, res) => {
    // res.send('Got a PATCH request at /multiplayerGameRooms');

    let gameRoomIdOnly = { _id: mongoose.Types.ObjectId(req.params.multiplayerGameRoomId) }
    // res.send(gameRoomIdOnly);
    let updateParams = { player2Id: mongoose.Types.ObjectId(req.body.playerId)}
    // res.send(updateParams);
    MultiplayerGameRoom.findOneAndUpdate(gameRoomIdOnly, updateParams, { new: true })
        .then(updatedGameRoom => {
            let gameRoomPojo = {
                id: updatedGameRoom.id,
                player1Id: updatedGameRoom.player1Id,
                player2Id: updatedGameRoom.player2Id
            };
            res.json(gameRoomPojo);
        })
        .catch(err => res.status(400).json({ updatefailed: 'Something wrong when updating multiplayerGameRoom!' }));
});

router.delete("/:multiplayerGameRoomId", (req, res) => {
    let multiplayerGameRoom = { _id: mongoose.Types.ObjectId(req.params.multiplayerGameRoomId) }
    // res.send('Got a DELETE request at /user');
    MultiplayerGameRoom.findOneAndRemove(multiplayerGameRoom)
        .then( (removedRoom) => {
            let gameRoomPojo = {
                id: removedRoom.id,
                player1Id: removedRoom.player1Id,
                player2Id: removedRoom.player2Id
            };
            res.json(gameRoomPojo)
        })
        .catch(err => res.status(404).json({ nomultiplayergameroomfound: 'No multiplayerGameRoom found' }));
});


module.exports = router;