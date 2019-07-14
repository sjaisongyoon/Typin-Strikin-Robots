import React, { Component } from 'react'

export class SingleGame extends Component {
  render() {
    return (
      <div className="singlegame__container">
        <div className="singlegame__top">
          <div className="singlegame__top-stats-wrapper">
            <div className="singlegame__top-player">
              <div className="singlegame__player-name">Player 1</div>
              <div className="singlegame__player-health">100%</div>
              <div className="singlegame__player-wpm">WPM: 121</div>
            </div>
            <div className="singlegame__top-timer">
              <h3 className="singlegame__top-timer-text">Timer</h3>
              <h4 className="singlegame__top-time">1:00</h4>
            </div>
            <div className="singlegame__top-player">
              <div className="singlegame__player-name">Player 2</div>
              <div className="singlegame__player-health">100%</div>
              <div className="singlegame__player-wpm">WPM: 121</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleGame;
