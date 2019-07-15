import React, { Component } from 'react'

class LeaderboardIndex extends Component {
  
  renderLeaderboard() {
    
  }
  
  render() {
    return (
      <div>
        <h2 className="leaderboard__header">
          Leaderboard Index
        </h2> 

        <div className="leaderboard__btn-container">
          <a href="#" className="leaderboard__btn">Single Player Leaderboard</a>
          <a href="#" className="leaderboard__btn">Multi Player Leaderboard</a>
        </div>

        {this.renderLeaderboard()}
      </div>
    )
  }
}


export default LeaderboardIndex;