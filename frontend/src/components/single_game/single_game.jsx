import React, { Component } from 'react'

export class SingleGame extends Component {
  render() {
    return (
      <div className="singlegame__container">
        <div className="singlegame__top">
          <div className="singlegame__top-stats-wrapper">
            <div className="singlegame__top-player">
              <div className="singlegame__player-name">Player Name</div>
              <div className="singlegame__player-wpm">WPM: 121</div>
            </div>
            <div className="singlegame__top-timer">
              <h3 className="singlegame__top-timer-text">Timer</h3>
              <h4 className="singlegame__top-time">1:00</h4>
            </div>
          </div>
        </div>
        <div className="singlegame__fight-container">
          <p>
            Image goes here...
          </p>
        </div>
        <div className="game__input-container">
          <div className="game__display-paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, ab maxime nihil ducimus nisi, enim obcaecati esse, asperiores aspernatur perspiciatis quam voluptate explicabo consequatur. Libero dignissimos iure error facilis consequatur.
          </div>
          <div className="game__input-box-outer">
            <input type="text" className="game__input-box" placeholder="Type here.." />
          </div>
        </div>
      </div>
    )
  }
}

export default SingleGame;
