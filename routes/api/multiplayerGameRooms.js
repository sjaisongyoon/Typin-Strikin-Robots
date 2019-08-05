const express = require("express");
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const MultiplayerGameRoom = require('../../models/MultiplayerGameRoom');
mongoose.set('useFindAndModify', false);


const gameRoomPojo = gameRoom => ({
    id: gameRoom.id,
    player1Id: gameRoom.player1Id,
    player2Id: gameRoom.player2Id,
    passage: gameRoom.passage
})

router.get("/test", (req, res) => res.json({ msg: "This is the multiplayerGameRooms route" }));

router.get("/", 
// passport.authenticate('jwt', { session: false }),
(req, res) => {
    MultiplayerGameRoom.find()
        .sort({ date: -1 })
        .then( (gameRooms) => {
            let gameRoomsPojo = {};
            gameRooms.forEach( gameRoom => {
                // let gameRoomPojo = {
                //     id: gameRoom.id,
                //     player1Id: gameRoom.player1Id,
                //     player2Id: gameRoom.player2Id
                // }
                gameRoomsPojo[gameRoom.id] = gameRoomPojo(gameRoom);
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
            // let gameRoomPojo = {
            //     id: multiplayerGameRoom.id,
            //     player1Id: multiplayerGameRoom.player1Id,
            //     player2Id: multiplayerGameRoom.player2Id
            // };
            res.json(gameRoomPojo(multiplayerGameRoom));
        })
            .catch(err => res.status(400).json({ parameters: 'Invalid multiplayerGameRoom parameters' }));
    }
);

router.patch('/:multiplayerGameRoomId', 
// passport.authenticate('jwt', { session: false }),
(req, res) => {
    // res.send('Got a PATCH request at /multiplayerGameRooms');
    let gameRoomIdOnly = { _id: mongoose.Types.ObjectId(req.params.multiplayerGameRoomId) }
    let updateParams = { player2Id: mongoose.Types.ObjectId(req.body.playerId)}
    MultiplayerGameRoom.findOneAndUpdate(gameRoomIdOnly, updateParams, { new: true })
        .then(updatedGameRoom => {
            // let gameRoomPojo = {
            //     id: updatedGameRoom.id,
            //     player1Id: updatedGameRoom.player1Id,
            //     player2Id: updatedGameRoom.player2Id
            // };
            res.json(gameRoomPojo(updatedGameRoom));
        })
        .catch(err => res.status(400).json({ updatefailed: 'Something wrong when updating multiplayerGameRoom!' }));
});

router.delete("/:multiplayerGameRoomId",
// passport.authenticate('jwt', { session: false }),
(req, res) => {
    let multiplayerGameRoom = { _id: mongoose.Types.ObjectId(req.params.multiplayerGameRoomId) }
    let playerId = mongoose.Types.ObjectId(req.body.currentUserId)
    // res.send('Got a DELETE request at /user');
    MultiplayerGameRoom.findOne(multiplayerGameRoom)
    .then( (fetchedRoom) => {
        if (fetchedRoom.player1Id && fetchedRoom.player1Id.equals(playerId)) {
            fetchedRoom.player1Id = null;
        } else {
            fetchedRoom.player2Id = null;
        }
        if (fetchedRoom.player1Id === null && fetchedRoom.player2Id === null) {
            MultiplayerGameRoom.deleteOne(multiplayerGameRoom)
                .then(() => {
                    res.json(gameRoomPojo(fetchedRoom));
                })
                .catch(err => res.status(404).json({ nomultiplayergameroomfoundtodelete: 'No multiplayerGameRoom found to delete' }));
        } else {
            fetchedRoom.save()
                .then(updatedRoom => {
                    res.json(gameRoomPojo(updatedRoom));
                })
                .catch(err => res.status(400).json({ savefailed: 'Something wrong when saving multiplayerGameRoom!' }));
        }   
    })
    .catch(err => res.status(404).json({ nomultiplayergameroomfound: 'No multiplayerGameRoom found' }));
});


module.exports = router;