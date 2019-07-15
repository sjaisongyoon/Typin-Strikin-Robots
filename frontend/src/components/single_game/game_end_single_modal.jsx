import React, { Component } from 'react'

export class GameEndSingleModal extends Component {
  render() {
    let { modalType, currentUser } = this.props;

    return (
      <div className="gameend-single__modal-container">
        <h2 className="gameend-single__modal-header">
          Good work, {currentUser.username}!
        </h2>
        <div className="gameend-single__modal-stats">
          <p className="gameend-single__modal-stat-single">
            CURRENT SESSION WPM: 124
          </p>
          <p className="gameend-single__modal-stat-single">
            LIFETIME WPM: 116
          </p>
        </div>
      </div>
    )
  }
}

export default GameEndSingleModal;
