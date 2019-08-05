import React from 'react';
import {Link} from 'react-router-dom';

class Multi extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            playerId: this.props.currentUser.id,
            // canCreate: true,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // this.props.fetchGameRooms()
        //     .then( () => { 
        //         if (this.props.gameRoom){
        //             this.setState({
        //                 canCreate: false
        //             })}
        //     })
        
    }

    handleSubmit(e){
        e.preventDefault();
        if (e.target.id === 'joinGame'){
            this.props.updateGameRoom({
                playerId: this.state.playerId,
                id: this.props.gameRoom.id
            }).then( action => this.props.fetchPassage(action.gameRoom.data.passageId))
        } else {
            this.props.createGameRoom({playerId: this.state.playerId})
                .then((action) => {
                    // debugger;
                    return this.props.fetchPassage(action.gameRoom.data.passageId)
                })
        }
        this.props.history.push('/games/multi')
    }

    render () {
        return (
            <div className="multi__container">
                <h2 className="multioptions__title">MULTIPLAYER</h2>
  
                <div className="multi__rooms">
                    <div className="multi__btn-wrapper">
                        <h3 className="multi__rooms-header">GAME ROOMS</h3>
                        {/* <button 
                        className={`joingame__button ${this.state.canCreate ? 'hidden': ''}`}
                        id="joinGame"
                        onClick={this.handleSubmit}>
                        Join Game
                    </button> */}

                        <button
                            className={`creategame__button`}
                            // className={`creategame__button ${this.state.canCreate ? '' : 'hidden'}`}
                            id="createGame"
                            onClick={this.handleSubmit}>
                            + Game
                    </button>
                    </div>
                    <div className="multi__rooms-row multi__rooms-row--first">
                        <div className="multi__rooms-item">ROOM</div>
                        <div className="multi__rooms-item">STATUS</div>
                        <div className="multi__rooms-item">ACTION</div>
                    </div>
                    <div className="multi__rooms-inner">
                        <div className="multi__rooms-row">
                            <div className="multi__rooms-item">KENNY</div>
                            <div className="multi__rooms-item">OPEN (1/2)</div>
                            <div className="multi__rooms-item">
                                <button className="joingame__button multi__rooms-btn">JOIN</button>
                            </div>
                        </div>
                        <div className="multi__rooms-row">
                            <div className="multi__rooms-item">KENNY</div>
                            <div className="multi__rooms-item">OPEN (1/2)</div>
                            <div className="multi__rooms-item">
                                <button className="joingame__button multi__rooms-btn">JOIN</button>
                            </div>
                        </div>
                        <div className="multi__rooms-row">
                            <div className="multi__rooms-item">KENNY</div>
                            <div className="multi__rooms-item">OPEN (1/2)</div>
                            <div className="multi__rooms-item">
                                <button className="joingame__button multi__rooms-btn">JOIN</button>
                            </div>
                        </div>
                        <div className="multi__rooms-row">
                            <div className="multi__rooms-item">KENNY</div>
                            <div className="multi__rooms-item">OPEN (1/2)</div>
                            <div className="multi__rooms-item">
                                <button className="joingame__button multi__rooms-btn">JOIN</button>
                            </div>
                        </div>
                        <div className="multi__rooms-row">
                            <div className="multi__rooms-item">KENNY</div>
                            <div className="multi__rooms-item">OPEN (1/2)</div>
                            <div className="multi__rooms-item">
                                <button className="joingame__button multi__rooms-btn">JOIN</button>
                            </div>
                        </div>
                        <div className="multi__rooms-row">
                            <div className="multi__rooms-item">KENNY</div>
                            <div className="multi__rooms-item">OPEN (1/2)</div>
                            <div className="multi__rooms-item">
                                <button className="joingame__button multi__rooms-btn">JOIN</button>
                            </div>
                        </div>
                        <div className="multi__rooms-row">
                            <div className="multi__rooms-item">KENNY</div>
                            <div className="multi__rooms-item">OPEN (1/2)</div>
                            <div className="multi__rooms-item">
                                <button className="joingame__button multi__rooms-btn">JOIN</button>
                            </div>
                        </div>
                        <div className="multi__rooms-row">
                            <div className="multi__rooms-item">KENNY</div>
                            <div className="multi__rooms-item">OPEN (1/2)</div>
                            <div className="multi__rooms-item">
                                <button className="joingame__button multi__rooms-btn">JOIN</button>
                            </div>
                        </div>
                        <div className="multi__rooms-row">
                            <div className="multi__rooms-item">KENNY</div>
                            <div className="multi__rooms-item">OPEN (1/2)</div>
                            <div className="multi__rooms-item">
                                <button className="joingame__button multi__rooms-btn">JOIN</button>
                            </div>
                        </div>
                        <div className="multi__rooms-row">
                            <div className="multi__rooms-item">KENNY</div>
                            <div className="multi__rooms-item">OPEN (1/2)</div>
                            <div className="multi__rooms-item">
                                <button className="joingame__button multi__rooms-btn">JOIN</button>
                            </div>
                        </div>
                        <div className="multi__rooms-row">
                            <div className="multi__rooms-item">KENNY</div>
                            <div className="multi__rooms-item">OPEN (1/2)</div>
                            <div className="multi__rooms-item">
                                <button className="joingame__button multi__rooms-btn">JOIN</button>
                            </div>
                        </div>
                        <div className="multi__rooms-row">
                            <div className="multi__rooms-item">KENNY</div>
                            <div className="multi__rooms-item">OPEN (1/2)</div>
                            <div className="multi__rooms-item">
                                <button className="joingame__button multi__rooms-btn">JOIN</button>
                            </div>
                        </div>
                        <div className="multi__rooms-row">
                            <div className="multi__rooms-item">KENNY</div>
                            <div className="multi__rooms-item">OPEN (1/2)</div>
                            <div className="multi__rooms-item">
                                <button className="joingame__button multi__rooms-btn">JOIN</button>
                            </div>
                        </div>
                        <div className="multi__rooms-row">
                            <div className="multi__rooms-item">KENNY</div>
                            <div className="multi__rooms-item">OPEN (1/2)</div>
                            <div className="multi__rooms-item">
                                <button className="joingame__button multi__rooms-btn">JOIN</button>
                            </div>
                        </div>
                        <div className="multi__rooms-row">
                            <div className="multi__rooms-item">KENNY</div>
                            <div className="multi__rooms-item">OPEN (1/2)</div>
                            <div className="multi__rooms-item">
                                <button className="joingame__button multi__rooms-btn">JOIN</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Multi; 