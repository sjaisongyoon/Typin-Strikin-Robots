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

const passage1 = `Socket.IO is a JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers. It has two parts: a client-side library that runs in the browser, and a server-side library for Node.js. Both components have a nearly identical API. Like Node.js, it is event-driven. Socket.IO primarily uses the WebSocket protocol with polling as a fallback option, while providing the same interface. Although it can be used as simply a wrapper for WebSocket, it provides many more features, including broadcasting to multiple sockets, storing data associated with each client, and asynchronous I/O. It can be installed with the npm tool. It was utilized in this project for the multiplayer feature.`;
const passage2 = `React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded. However, fetching data is only the beginning of what happens on a web page, which is why complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API. React was created by Jordan Walke, a software engineer at Facebook, who released an early prototype of React called FaxJS.`;
const passage3 = `Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages. It encourages and facilitates the use of web standards such as JSON or XML for data transfer, HTML, CSS and JavaScript for user interfacing. In addition to MVC, Rails emphasizes the use of other well-known software engineering patterns and paradigms, including convention over configuration (CoC), don't repeat yourself (DRY), and the active record pattern. Ruby on Rails' emergence in the 2000s greatly influenced web app development, through innovative features such as seamless database table creations, migrations, and scaffolding of views to enable rapid application development.`;
const passage4 = `Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to (and inspired by) Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark. Redux was created by Dan Abramov and Andrew Clark in 2015. Abramov began writing the first Redux implementation while preparing for a conference talk at React Europe on hot reloading. Abramov remarks, "I was trying to make a proof of concept of Flux where I could change the logic. And it would let me time travel. And it would let me reapply the future actions on the code change."`;
const passage5 = `Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js. The original author, TJ Holowaychuk, described it as a Sinatra-inspired server, meaning that it is relatively minimal with many features available as plugins. Express is the backend component of the MEAN stack, together with the MongoDB database software and AngularJS frontend framework. Express.js was founded by TJ Holowaychuk. The first release, according to Express.js's GitHub repository, was on the 22nd of May, 2010. Version 0.12.0. Express.js is used by Fox Sports, PayPal, Uber and IBM.`;
const passage6 = `Originally based upon relational algebra and tuple relational calculus, SQL consists of many types of statements, which may be informally classed as sublanguages, commonly: a data query language, a data definition language, a data control language, and a data manipulation language. The scope of SQL includes data query, data manipulation (insert, update and delete), data definition (schema creation and modification), and data access control. Although SQL is often described as, and to a great extent is, a declarative language, it also includes procedural elements. SQL was one of the first commercial languages for Edgar F. Codd's relational model. The model was described in his influential 1970 paper, "A Relational Model of Data for Large Shared Data Banks".`;
const passage7 = `Object-oriented programming is a programming paradigm that privileges objects rather than actions and data rather than functions or logic. Adherents to OOP conceive of a program as a society of objects that receive messages that they then use to perform their own discrete operations. Objects typically contain data in fields known as attributes and a set of associated methods that may access and manipulate these attributes.`;
const passage8 = `In cryptography, a salt is random data that is used as an additional input to a one-way function that hashes data, a password or passphrase. Salts are used to safeguard passwords in storage. Historically a password was stored in plaintext on a system, but over time additional safeguards developed to protect a user's password against being read from the system. A salt is one of those methods. A new salt is randomly generated for each password. The salt and the password are concatenated and processed with a cryptographic hash function, and the resulting output is stored with the salt in a database. Hashing allows for later authentication without keeping and therefore risking the plaintext password in the event that the authentication data store is compromised.`

const passages = [passage1, passage2, passage3, passage4, passage5, passage6, passage7, passage8];

const generatePassage = () => {
    return passages[Math.floor(Math.random() * passages.length)]
}

router.get("/test", (req, res) => res.json({ msg: "This is the multiplayerGameRooms route" }));

router.get("/", 
(req, res) => {
    MultiplayerGameRoom.find()
        .sort({ date: -1 })
        .then( (gameRooms) => {
            let gameRoomsPojo = {};
            gameRooms.forEach( gameRoom => {
                gameRoomsPojo[gameRoom.id] = gameRoomPojo(gameRoom);
            })
            res.json(gameRoomsPojo);
        })
        .catch(err => res.status(404).json({ nomultiplayergameroomsfound: 'No multiplayerGameRooms found' }));
});

router.get('/:multiplayerGameRoomId',
    (req,res) => {
        let multiplayerGameRoom = { _id: mongoose.Types.ObjectId(req.params.multiplayerGameRoomId) }
        MultiplayerGameRoom.findOne(multiplayerGameRoom)
            .then( fetchedRoom => {
                res.json(gameRoomPojo(fetchedRoom));
            })
            .catch(err => res.status(404).json({ nomultiplayergameroomfound: 'No multiplayerGameRoom found' }));
    }
);

router.post("/", 
(req, res) => {
        const newMultiplayerGameRoom = new MultiplayerGameRoom({
            player1Id: mongoose.Types.ObjectId(req.body.playerId),
            passage: generatePassage(), 
        });
        newMultiplayerGameRoom.save().then(multiplayerGameRoom => {
            res.json(gameRoomPojo(multiplayerGameRoom));
        })
            .catch(err => res.status(400).json({ parameters: 'Invalid multiplayerGameRoom parameters' }));
    }
);

router.patch('/:multiplayerGameRoomId', 
(req, res) => {
    let gameRoomIdOnly = { _id: mongoose.Types.ObjectId(req.params.multiplayerGameRoomId) }
    let updateParams = { player2Id: mongoose.Types.ObjectId(req.body.playerId)}
    MultiplayerGameRoom.findOneAndUpdate(gameRoomIdOnly, updateParams, { new: true })
        .then(updatedGameRoom => {
            res.json(gameRoomPojo(updatedGameRoom));
        })
        .catch(err => res.status(400).json({ updatefailed: 'Something wrong when updating multiplayerGameRoom!' }));
});

router.delete("/:multiplayerGameRoomId",
(req, res) => {
    let multiplayerGameRoom = { _id: mongoose.Types.ObjectId(req.params.multiplayerGameRoomId) }
    let playerId = mongoose.Types.ObjectId(req.body.currentUserId)
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