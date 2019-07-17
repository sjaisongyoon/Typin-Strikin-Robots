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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
  }

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!!!!!!"));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/matches", matches);
app.use("/api/multiplayerGameRooms", multiplayerGameRooms);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

let socketList = {};
let twoPlayers;
io.on('connection', socket => {
    console.log('A user has connected');
    socket.id = Math.random();
    socketList[socket.id] = socket;

    socket.on("gameroom", data => {
        io.emit("gameroom", data);
        console.log(data)
    })

    socket.on("lobby", data => {
        twoPlayers = Object.values(socketList).length >= 4 ? true : false;
        io.emit("lobby", twoPlayers);
        console.log(socketList);
        console.log(twoPlayers);
    })

    socket.on('disconnect', () => {
        console.log("user disconnected");
        delete socketList[socket.id];
    });
});

http.listen(3001, () => {
    console.log('listening on 3001')
})

// http.listen("https://typefighter.herokuapp.com", () => {
//     console.log('listening on https://typefighter.herokuapp.com')
// })