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
        this.props.fetchGameRooms();
        if (this.props.gameRoom){
            this.setState({
                canCreate: false
            })
        }
    }

    handleSubmit(e){
        debugger;
        e.preventDefault();
        if (e.target.className === 'join__game__button'){
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
                    className="join__game__button"
                    onClick={this.handleSubmit}>
                    <div>
                        Join Game
                    </div>
                </button>
                
                <button disabled={!this.state.canCreate}
                    className="create__game__button"
                    onClick={this.handleSubmit}>
                    <div>
                        Create Game
                    </div>
                </button>
            </div>
        );
    }
}

export default Multi; 