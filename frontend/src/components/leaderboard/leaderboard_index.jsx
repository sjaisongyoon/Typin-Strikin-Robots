import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class LeaderboardIndex extends Component {
  
  componentDidMount() {
    this.props.fetchLeaderboards();
  }
  
  renderLeaderboard() {
    let { boardType, leaderboardSingle, leaderboardMulti } = this.props;

    if (boardType === 'single') {
      return (
        <div className="leaderboard__board-container">
          <div className="leaderboard__table">
            <div className="leaderboard__table-row">
              <div className="leaderboard__table-item">RANK</div>
              <div className="leaderboard__table-item">WPM</div>
              <div className="leaderboard__table-item">NAME</div>
            </div>
            {leaderboardSingle.map((row, idx) => {
              return (
                <div className="leaderboard__table-row" key={idx}>
                  <div className="leaderboard__table-item">{idx + 1}</div>
                  <div className="leaderboard__table-item">{row.singleplayerWPM} </div>
                  <div className="leaderboard__table-item">{row.username}</div>
                </div>
              )
            })}
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
            {leaderboardMulti.map((row, idx) => {
              return (
                <div className="leaderboard__table-row" key={idx}>
                  <div className="leaderboard__table-item">{idx + 1}</div>
                  <div className="leaderboard__table-item">{row.multiplayerWins}</div>
                  <div className="leaderboard__table-item">{row.username}</div>
                </div>
              );
            })}
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
    if (!this.props.leaderboardSingle || !this.props.leaderboardMulti) {
      return (
        <div>Loading...</div>
      );
    }

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