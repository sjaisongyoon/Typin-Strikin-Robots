import React, { Component } from 'react'

class LeaderboardIndex extends Component {
  
  renderLeaderboard() {
    let { boardType } = this.props;

    if (boardType === 'single') {
      return (
        <div className="leaderboard__board-container">
          single
        </div>
      )
    } else if (boardType === 'multi') {
      return (
        <div className="leaderboard__board-container">
          multi
        </div>
      )
    }
  }

  renderBoardToggleButtons() {
    let { boardType } = this.props;

    if (boardType === 'single') {
      return (
        <div className="leaderboard__board-btn-container">
          <a href="#" className="leaderboard__btn leaderboard__btn--active">Single Player Leaderboard</a>
          <a href="#" className="leaderboard__btn">Multi Player Leaderboard</a>
        </div>
      )
    } else if (boardType === 'multi') {
      return (
        <div className="leaderboard__board-btn-container">
          <a href="#" className="leaderboard__btn">Single Player Leaderboard</a>
          <a href="#" className="leaderboard__btn leaderboard__btn--active">Multi Player Leaderboard</a>
        </div>
      )
    }
  }
  
  render() {
    return (
      <div>
        <h2 className="leaderboard__header">
          Leaderboard Index
        </h2> 

        <div className="leaderboard__btn-container">
          {this.renderBoardToggleButtons()}
        </div>

        {this.renderLeaderboard()}
      </div>
    )
  }
}


export default LeaderboardIndex;