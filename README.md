# TypeFighter
[TypeFighter](http://typefighter.herokuapp.com)
is a multiplayer game that is designed to improve typing skills in a fun and competitive manner.

## Background and Overview
The project is a real-time multiplayer application that incorporates an educational theme wrapped in a fun interactive environment. Users will have the opportunity to battle each other where the victor will be determined by their typing speed and precision. The user will also have the opportunity to play a single-player mode. The main challenges in creating this application are real-time functionality and smooth user experience. 

## Screenshot & Demo Video

#### Single Player Gameplay
<image src="frontend/src/assets/images/readme/typefighter_single_player.gif" />

#### Online (Realtime) Multiplayer Gameplay
<image src="frontend/src/assets/images/readme/typefighter_multi_player.gif" />

### Select Play Modes
<image src="frontend/src/assets/images/readme/Screen Shot 2019-07-17 at 9.14.13 AM.png" />
When the user logs in or signs up, they will land on the page where they can choose either "Time Attack(Single Play)" mode or "Multiplayer" mode. 
In the "Time Attack" mode, the user will set the time from 0-60 secs to enter the game. The main goal for the single player mode is to get the highest WPM(Word per Minute). 
In the "Multiplayer" mode, the user who enters the first will have to create the game room and the game will begin when the second user joins the room. The main goal for the multiplayer mode is to beat the other player. Each time a user types a given word correctly, the user's character will attack the other user's character and damage the life bar. 

<br/>

### Leaderboard
<image src="frontend/src/assets/images/readme/Screen Shot 2019-07-17 at 9.15.09 AM.png" />
Users always can access to the leaderboard. There are two separate leaderboards, "Single Player Leaderboard" and "Multi Player Leaderboard". The Single Player Leaderboard shows the rankings of all players' WPM. The Multi Player Leaderboard shows the rankings based on the number of wins each player have. 

<br/> 

## Functionality and MVP
- [ ] `User Auth` - Users can create and sign into their account on our application. Advantage for doing so will be for statistics and leaderboard positioning
- [ ] `Gameplay` - A smooth gameplay experience that will allow users to race against time or another opponent through typing.
- [ ] `Single Player` - Single player gameplay will allow users to beat their personal bests and others on a scale of wpm. 
- [ ] `Multiplayer` - Users will face each other. Wins will allow them to climb the all time wins leaderboard
- [ ] `Leaderboard` - (2) types of leaderboards. One will be for single player gameplay that will be based on wpms, while the other will be for the multiplayer game mode and be based on all-time total wins
- [ ] `Match History` - Users will be able to display their match history and the challengers they faced. 

## Technologies and Technical Challenges

The overall architecture of TypeFighters is built with the MERN stack (MongoDB, Express, React, Node).  We also employed web sockets to facilitate a real-time multiplayer experience.  The meat of our app is on the frontend where all the game components are generated and the only information that needs to be sent back to the database are the results of each game.

### Backend: MongoDB/Express

For our game application, we store each user with their stats and information in the database.  Every time the app is loaded, express extracts all the users from Mongo and we manipulate the query results into a simple POJO back to the frontend.  This minimizes the time it takes to find a particular user and their data in our redux store, namely the currently logged in user.

### Frontend: React/Node.js

The game and all of it's classic arcade themed components will be rendered using React.  Combining React with Redux, we  give all our components access to our store of data from the backend.

The game logic depends on a user's text input matching the text of a randomly generated passage. 

First we convert the passage to an array of strings, `initialWords`, then update 
our **React** component's state. This will help us keep track of 
which word the user is currently typing. 
 
```javascript
createWordsArray() {
    let passage = this.props.activeGameRoom.passage || ''
    let words = passage.split(' ');
    let wordCount = words.length;

    let initialWords = words.map((word, idx) => {
        return idx === wordCount - 1 ? `${word}` : `${word} `
    });
    let currentWord = initialWords.shift();
    this.setState({
        initialWords,
        currentWord: currentWord,
        wordCount: wordCount
    });
}
```
We also create an array of spans to render the words to the DOM. This allows 
us to give realtime feedback to the user by changing font color of a correctly submitted word.  

```javascript
createWordsDisplay() {
let passage = this.props.activeGameRoom.passage || ''
let wordsArr = passage.split(' ').map((word, idx) => {
    return <span key={idx} id={idx} className="word__span">{word}&nbsp;</span>
})
return wordsArr;
}
```
<!-- 
The input box takes a user's text input and updates the value of our `currentInput` 
variable in our state object. Any change to this value also triggers the `onChange`
event listener.

```javascript
// within the render function, user text input field
<input
type="text"
className="game__input-box"
placeholder="Type here.."
value={this.state.currentInput}
onChange={(e) => this.handleInput(e)}
autoFocus />
``` -->
The input field's `onChange` event listener invokes our asynchronous `handleInput` method to ensure 
component rendering and user input always remain in sync. 

```javascript
async handleInput(e) {
    e.persist();
    if (this.state.gameTime !== 0 && this.state.ownHealthBar !== 0) {
        let wordSoFar = e.target.value;

        await this.setState({
            currentInput: wordSoFar
        });
        this.updateUserOutput();
        this.handleSubmit();
    }
}
```
If the user's input matches the current word the `handleSubmit` method updates our React component's 
state. This clears the input field and properly sets the the next word to be typed. 

```javascript
handleSubmit() {
    //...
    // if the input is a correct match
    if (currentWord === currentInput) {
        //...
        
        // update local state with new values (next word)
        this.setState({
            currentInput: '',
            initialWords: this.state.initialWords.slice(1),
            correctWords: correctWords,
            currentWord: this.state.initialWords[0]
        })
    }
    //...
}
```

### Socket.io:

Socket.io is a javascript library that allows for bidirectional and real-time communication between the client/browser and the server. It utilizes a Node.js server along with a javascript library for the client.  This library is crucial for our game app if we want to implement a multiplayer feature.

Welcome to the Typin-Strikin-Robots wiki!

#### Multiplayer Functionality
Once a simultaneous start was established, we then needed information to be passed between each user such as health bar status and WPM.  However, only users in that specific game room should receive that information.  We decided the simplest approach would be to transmit data from the server side by using dynamic rooms, where each room depended on the incoming data.

```js
let gameRooms = {};
let socketList = {};
let twoPlayers;

io.on('connection', socket => {
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
});
```

#### Simultaneous Start Functionality
A challenge we ran into was starting a game simultaneously for both players as soon as the second player joined the room.  With our initial logic, the second player to join the room would be able to start immediately since they already had knowledge of the first person that created the room.  The issue was finding a way to let the first player know a second player has joined.  Thus Socket.IO.  By recording each connected socket in the backend and mapping it to the specific gameroomID, we were able to accurately communicate when a second player has joined a specific game room without affecting other game rooms going on in the background.
```js
  openSocket() {
    this.state.socket.on("waitingRoom", gameRoomData => {
      let twoPlayersInRoom = gameRoomData.players.length === 2;
      let thisGameRoom = this.props.activeGameRoom.id === gameRoomData.gameRoomId;
      if (twoPlayersInRoom && thisGameRoom) {
        this.props.fetchActiveGameRoom(this.props.activeGameRoom.id)
      }
    })
    let data = {
      gameRoomId: this.props.activeGameRoom.id,
      myUserId: this.props.currentUser.id,
    }
    this.state.socket.emit("waitingRoom", data);
  }
```



#### Technical Challenges:
<!--* Git management between a team of 5 collaborators-->
* Implementing web sockets to allow multiple users an open pipe for user to user interaction in our multiplayer mode
* Rendering animations for a visually appealing experience

## Bonus Features
- [ ] Advanced animation
- [ ] Complete log of match history
- [ ] Multiple lobbies
