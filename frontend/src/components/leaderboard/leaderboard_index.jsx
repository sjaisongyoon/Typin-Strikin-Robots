import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class LeaderboardIndex extends Component {
  
  renderLeaderboard() {
    let { boardType } = this.props;

    if (boardType === 'single') {
      return (
        <div className="leaderboard__board-container">
          <div className="leaderboard__table">
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">RANK</div>
              <div className="leaderboard__table-item">WPM</div>
              <div className="leaderboard__table-item">NAME</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">1ST</div>
              <div className="leaderboard__table-item">151</div>
              <div className="leaderboard__table-item">CALLA</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">2ND</div>
              <div className="leaderboard__table-item">143</div>
              <div className="leaderboard__table-item">KEVIN</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">3RD</div>
              <div className="leaderboard__table-item">116</div>
              <div className="leaderboard__table-item">SAM</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">4TH</div>
              <div className="leaderboard__table-item">113</div>
              <div className="leaderboard__table-item">CHRIS</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">5TH</div>
              <div className="leaderboard__table-item">101</div>
              <div className="leaderboard__table-item">KENNY</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">6TH</div>
              <div className="leaderboard__table-item">98</div>
              <div className="leaderboard__table-item">CALLA</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">7TH</div>
              <div className="leaderboard__table-item">80</div>
              <div className="leaderboard__table-item">KEVIN</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">8TH</div>
              <div className="leaderboard__table-item">79</div>
              <div className="leaderboard__table-item">SAM</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">9TH</div>
              <div className="leaderboard__table-item">75</div>
              <div className="leaderboard__table-item">CHRIS</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">10TH</div>
              <div className="leaderboard__table-item">71</div>
              <div className="leaderboard__table-item">KENNY</div>
            </div>
          </div>
        </div>
      )
    } else if (boardType === 'multi') {
      return (
        <div className="leaderboard__board-container">
          <div className="leaderboard__table">
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">RANK</div>
              <div className="leaderboard__table-item">WINS</div>
              <div className="leaderboard__table-item">NAME</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">1ST</div>
              <div className="leaderboard__table-item">151</div>
              <div className="leaderboard__table-item">CALLA</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">2ND</div>
              <div className="leaderboard__table-item">143</div>
              <div className="leaderboard__table-item">KEVIN</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">3RD</div>
              <div className="leaderboard__table-item">116</div>
              <div className="leaderboard__table-item">SAM</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">4TH</div>
              <div className="leaderboard__table-item">113</div>
              <div className="leaderboard__table-item">CHRIS</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">5TH</div>
              <div className="leaderboard__table-item">101</div>
              <div className="leaderboard__table-item">KENNY</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">6TH</div>
              <div className="leaderboard__table-item">98</div>
              <div className="leaderboard__table-item">CALLA</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">7TH</div>
              <div className="leaderboard__table-item">80</div>
              <div className="leaderboard__table-item">KEVIN</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">8TH</div>
              <div className="leaderboard__table-item">79</div>
              <div className="leaderboard__table-item">SAM</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">9TH</div>
              <div className="leaderboard__table-item">75</div>
              <div className="leaderboard__table-item">CHRIS</div>
            </div>
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">10TH</div>
              <div className="leaderboard__table-item">71</div>
              <div className="leaderboard__table-item">KENNY</div>
            </div>
          </div>
        </div>
      )
    }
  }

  renderBoardToggleButtons() {
    let { boardType } = this.props;

    if (boardType === 'single') {
      return (
        <div className="leaderboard__board-btn-container">
          <Link to="/leaderboard/single" className="leaderboard__btn leaderboard__btn--active">Single Player<br />Leaderboard</Link>
          <Link to="/leaderboard/multi" className="leaderboard__btn">Multi Player<br />Leaderboard</Link>
        </div>
      )
    } else if (boardType === 'multi') {
      return (
        <div className="leaderboard__board-btn-container">
          <Link to="/leaderboard/single" className="leaderboard__btn">Single Player<br />Leaderboard</Link>
          <Link to="/leaderboard/multi" className="leaderboard__btn leaderboard__btn--active">Multi Player<br />Leaderboard</Link>
        </div>
      )
    }
  }
  
  render() {
    return (
      <div>
        <div className="leaderboard__header-container">
          <h2 className="leaderboard__header">
            HIGH SCORES
          </h2> 
        </div>


        {this.renderLeaderboard()}

        <div className="leaderboard__btn-container">
          {this.renderBoardToggleButtons()}
        </div>
      </div>
    )
  }
}


export default LeaderboardIndex;