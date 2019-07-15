import React from 'react';

class CreateGameModalForm extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            playerId: this.props.currentUser.id
        }

    }

    componentDidMount(){
        this.props.createGameRoom({
            playerId: this.state.playerId
        })
    }

    render () {
        return(
            <div className="creategamemodal__container">
                <input className="creategamemodal__input"/>
            </div>
        )
    }
}

export default CreateGameModalForm; 