const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const http = require('http').createServer(app);
const io = require('socket.io')(http);

const users = require("./routes/api/users");
const matches = require("./routes/api/matches");
const multiplayerGameRooms = require("./routes/api/multiplayerGameRooms");


const path = require('path');


mongoose
.connect(db, { useNewUrlParser: true })
.catch(err => console.log(err));

// app.get("/", (req, res) => res.send("Hello World!!!!!!"));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/matches", matches);
app.use("/api/multiplayerGameRooms", multiplayerGameRooms);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}


const port = process.env.PORT || 5000;

let gameRooms = {};
let socketList = {};
let twoPlayers;

io.on('connection', socket => {
    socket.id = Math.random();
    socketList[socket.id] = socket;
    let gameData = {};

    socket.on("gameRoom", data => {
        if (!gameRooms[data.gameRoomId]) gameRooms[data.gameRoomId] = [data.myUserId];
        if (!gameRooms[data.gameRoomId].includes(data.myUserId)) gameRooms[data.gameRoomId].push(data.myUserId)
        gameData = data;
        gameData["players"] = gameRooms[data.gameRoomId];
        io
            .emit(gameData.gameRoomId, gameData)
    })


    socket.on("waitingRoom", data => {
        let gameRoomData = {
            gameRoomId: data.gameRoomId,
            players: gameRooms[data.gameRoomId]
        }
        io.emit("waitingRoom", gameRoomData);
    })

    socket.on('disconnect', () => {
        delete socketList[socket.id];
    });
});

// DEV
// http.listen(3001, () => {
//     console.log('listening on 3001')
// })
    
// PRODUCTION
http.listen(port, () => {
    console.log('listening on https://typefighter.herokuapp.com')
});
