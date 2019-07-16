import React from 'react';
import {Link} from 'react-router-dom';

class Multi extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            playerId: this.props.currentUser.id,
            canCreate: true,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchGameRooms()
            .then( () => { 
                if (this.props.gameRoom){
                    this.setState({
                        canCreate: false
                    })}
            })
        
    }

    handleSubmit(e){
        e.preventDefault();
        // debugger;
        if (e.target.className === 'joingame__button'){
            this.props.updateGameRoom({
                playerId: this.state.playerId,
                id: this.props.gameRoom.id
            })
        } else {
            this.props.createGameRoom({playerId: this.state.playerId})
        }
        this.props.history.push('/games/multi')
    }

    render () {
        return (
            <div className="multi__container">
                <h2 className="multioptions__title">MULTIPLAYER</h2>
                <div className="multi__btn-wrapper">
                    <button disabled={this.state.canCreate}
                        className="joingame__button"
                        onClick={this.handleSubmit}>
                        Join Game
                    </button>
                    
                    <button disabled={!this.state.canCreate}
                        className="creategame__button"
                        onClick={this.handleSubmit}>
                        Create Game
                    </button>
                </div>
            </div>
        );
    }
}

export default Multi; 