import React from 'react';
import {Link} from 'react-router-dom';

class Multi extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            playerId: this.props.currentUser.id,
            loading: true
        }
        this.handleCreateGame = this.handleCreateGame.bind(this);
        this.handleJoinGame = this.handleJoinGame.bind(this);
    }

    componentDidMount(){
        this.props.fetchGameRooms()
            .then( () => { 
                this.setState({
                    loading: false
                })
            })
        
    }

    handleCreateGame(e){
        e.preventDefault();

        this.props.createGameRoom({playerId: this.state.playerId})
            .then((action) => {
                this.props.history.push('/games/multi')
            })
    }

    handleJoinGame(e) {
        e.preventDefault();
        let gameRoomId = e.target.dataset.gameid;

        this.props.updateGameRoom({
            playerId: this.state.playerId,
            id: gameRoomId
        }).then (action => {
            this.props.history.push('/games/multi');
        })
    }

    render () {
        let { gameRooms, users } = this.props;

        let activeGameRooms = (
            <div className="multi__rooms-loading">Loading...</div>
        );
        
        if (this.state.loading === false) {
            activeGameRooms = gameRooms.map((gameRoom, idx) => {
                let player1 = '';
                let player2 = '';
                let playersInRoom = '';
                let playerCount = 'OPEN (1/2)';
                let validPlayer1 = users[gameRoom.player1Id];
                let validPlayer2 = users[gameRoom.player2Id];
                if (validPlayer1) player1 = validPlayer1.username;
                if (validPlayer2) player2 = validPlayer2.username;

                if (!player1) {
                    playersInRoom = `${player2}`
                } else if (!player2) {
                    playersInRoom = `${player1}`
                } else {
                    playersInRoom = `${player1}/${player2}`
                    playerCount = 'FULL (2/2)'
                }

                return (
                    <div className="multi__rooms-row" key={idx}>
                        <div className="multi__rooms-item">{playersInRoom}</div>
                        <div className="multi__rooms-item">{playerCount}</div>
                        <div className="multi__rooms-item">
                            <button className="joingame__button multi__rooms-btn" data-gameid={gameRoom.id} onClick={this.handleJoinGame} disabled={player1 && player2 ?  'disabled': ''}>JOIN</button>
                        </div>
                    </div>
                );
            });
        }
        return (
            <div className="multi__container">
                <h2 className="multioptions__title">MULTIPLAYER</h2>
                <div className="multi__rooms">
                    <div className="multi__btn-wrapper">
                        <h3 className="multi__rooms-header">GAME ROOMS</h3>

                        <button
                            className={`creategame__button`}
                            id="createGame"
                            onClick={this.handleCreateGame}>
                            + Game
                    </button>
                    </div>
                    <div className="multi__rooms-row multi__rooms-row--first">
                        <div className="multi__rooms-item">ROOM</div>
                        <div className="multi__rooms-item">STATUS</div>
                        <div className="multi__rooms-item">ACTION</div>
                    </div>
                    <div className="multi__rooms-inner">
      
                        {activeGameRooms}

                    </div>
                </div>
            </div>
        );
    }
}

export default Multi; 