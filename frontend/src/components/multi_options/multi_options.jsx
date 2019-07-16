import React from 'react';

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
        debugger;
        if (e.target.className === 'joingame__button'){
            this.props.updateGameRoom({
                playerId: this.state.playerId,
                id: this.props.gameRoom.id
            })
        } else {
            this.props.createGameRoom({playerId: this.state.playerId})
        }
    }

    render () {
        return (
            <div className="multi__container">
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
        );
    }
}

export default Multi; 