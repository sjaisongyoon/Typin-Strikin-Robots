# Typin-Strikin-Robots
A multiplayer game that is designed to improve typing skills in a fun and competitive manner.
[Placeholder for live site]

## Background and Overview
Typin-Strikin-Robots is a real-time multiplayer application that incorporates an educational theme wrapped in a fun interactive environment. Users will have the opportunity to battle each other where the victor will be determined by their typing speed and precision. The user will also have the opportunity to play a single-player mode. The main challenges in creating this application are real-time functionality and smooth user experience. 

## Functionality and MVP
- [ ] User Auth - Users can sign into their account on our application. Advantage for doing so will be for statistics and leaderboard positioning
- [ ] Gameplay - A smooth gameplay that will allow users to race against time or another opponent through typing.
- [ ] Single Player - Single player gameplay will allow users to beat their personal bests and others on a scale of wpm. 
- [ ] Multiplayer - Users will face each other. Wins will allow them to climb the all time wins leaderboard
- [ ] Leaderboard - (2) types of leaderboards. One will be for single player gameplay that will be based on wpms, while the other will be for the multiplayer game mode and be based on all-time total wins
- [ ] Goals/Player Stats - Users will be able to set goals for the wpm and can see their improvements over time. 

## Technologies and Technical Challenges

The overall architecture of Typin Strikin Robots is built with the MERN stack (MongoDB, Express, React, Node).  We also employed web sockets to facilitate a real-time multiplayer experience.  The meat of our app is on the frontend where all the game components are generated and the only information that needs to be sent back to the database are the results of each game.

**Backend: MongoDB/Express**

For our game application, we store each user with their stats and information in the database.  Every time the app is loaded, express extracts all the users from Mongo and we manipulate the query results into a simple POJO back to the frontend.  This minimizes the time it takes to find a particular user and their data in our redux store, namely the currently logged in user.

**Frontend: React/Node.js**

The game and all of it's classic arcade themed components will be rendered using React.  Combining React with Redux, we  give all our components access to our store of data from the backend.

**Socket.io**

Socket.io is a javascript library that allows for bidirectional and real-time communication between the client/browser and the server. It utilizes a Node.js server along with a javascript library for the client.  This library is crucial for our game app if we want to implement a multiplayer feature.

**Technical Challenges:**
* Git management between a team of 5 collaborators
* Implementing web sockets to allow multiple users an open pipe for user to user interaction in our multiplayer mode
* Rendering animations for a visually appealing experience

## Bonus Features
- [ ] Advanced animation
- [ ] Complete log of match history
