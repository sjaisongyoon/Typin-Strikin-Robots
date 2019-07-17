import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';

export class GameEndMultiModal extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(type) {
        this.props.closeModal();
        if (type === 'replay') {
            this.props.history.push('/options/single')
        } else if (type === 'menu') {
            this.props.history.push('/select')
        }
    }

    render() {
        let { modalType, currentUser, sessionWpm, winner, myOwnWPM, enemyWPM } = this.props;
        const winnerDisplay = winner === 1 ? 
            <div className='gameend-multi__modal-winner'>You Win!</div> : 
                winner === 0 ? <div className='gameend-multi__modal-winner'>DRAW!</div> : 
                <div className='gameend-multi__modal-winner'>You Lose!</div>
        return (
            <div className="gameend-single__modal-container">
                <h2 className="gameend-single__modal-header">
                    Good work, {currentUser.username}!
                </h2>
                {winnerDisplay}
                <div className="gameend-single__modal-stats">
                    <p className="gameend-single__modal-stat-single">
                        YOUR WPM: {myOwnWPM} <br/> THEIR WPM: {enemyWPM}
                    </p>
                    {/* <p className="gameend-single__modal-stat-single">
            LIFETIME WPM: 116
          </p> */}
                    <div className="gameend-single__modal-btn-container">
                        <Link to="/options/single" className="gameend-single__modal-btn" onClick={() => this.handleClick('replay')}>REPLAY</Link>
                        <Link to="/select" className="gameend-single__modal-btn" onClick={this.props.closeModal} onClick={() => this.handleClick('menu')}>BACK TO MENU</Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(GameEndMultiModal);