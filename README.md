# TypeFighter
[TypeFighter](http://typefighter.herokuapp.com)
is a multiplayer game that is designed to improve typing skills in a fun and competitive manner.

## Background and Overview
The project is a real-time multiplayer application that incorporates an educational theme wrapped in a fun interactive environment. Users will have the opportunity to battle each other where the victor will be determined by their typing speed and precision. The user will also have the opportunity to play a single-player mode. The main challenges in creating this application are real-time functionality and smooth user experience. 

## Screenshot & Demo Video

![Multi-Demo](https://mrkchoi.github.io/WHR_data_visualization/dist/assets/screenshots/typefighter_multi_player.gif)
![Single-Demo](https://mrkchoi.github.io/WHR_data_visualization/dist/assets/screenshots/typefighter_single_player.gif)

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

**Backend: MongoDB/Express**

For our game application, we store each user with their stats and information in the database.  Every time the app is loaded, express extracts all the users from Mongo and we manipulate the query results into a simple POJO back to the frontend.  This minimizes the time it takes to find a particular user and their data in our redux store, namely the currently logged in user.

**Frontend: React/Node.js**

The game and all of it's classic arcade themed components will be rendered using React.  Combining React with Redux, we  give all our components access to our store of data from the backend.

**Socket.io:**

Socket.io is a javascript library that allows for bidirectional and real-time communication between the client/browser and the server. It utilizes a Node.js server along with a javascript library for the client.  This library is crucial for our game app if we want to implement a multiplayer feature.

**Technical Challenges:**
* Git management between a team of 5 collaborators
* Implementing web sockets to allow multiple users an open pipe for user to user interaction in our multiplayer mode
* Rendering animations for a visually appealing experience

## Accomplished Over the Weekend

* Gain familiartiy with the MERN stack
* Decide on overall website design and structure
* Setup backend server and component structure
* Allow for front and backend communication
* Apply CSS styling and design
* Complete project proposal

## Group Members & Work Breakdown

**Calla Lee, Chris Gee, Kenny Choi, Kevin La, Sam Yoon**

**July 13 - July 14**

* User auth and database creation - Kevin
* Component skeletal structure, styling - Kenny
* Styling, Git and organization management - Calla
* AXIOS/API/Redux Cycle - Sam
* Websockets - Chris

**July 15**

* Continue and finish weekend tasks - All
* Add Selectors, API calls, and reducers - Sam
* Backend layout for match history and leaderboards - Kevin
* Websocket implementation - Chris
* CSS styling and art design - Calla/Kenny

**July 16**

* Animations and design - Kenny
* Sound effects and logo - Sam
* Heroku deployment - Calla
* Modals - Chris
* Debugging and stress testing - Kevin

## Bonus Features
- [ ] Advanced animation
- [ ] Complete log of match history
- [ ] Multiple lobbies
