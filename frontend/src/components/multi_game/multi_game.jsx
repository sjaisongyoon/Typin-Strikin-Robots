import React, { Component } from 'react'

class MultiGame extends Component {
  render() {
    return (
      <div className="multigame__container">
        <div className="multigame__top">
          <div className="multigame__top-stats-wrapper">
            <div className="multigame__top-player">
              <div className="multigame__player-name">Player 1</div>
              <div className="multigame__player-health">100%</div>
              <div className="multigame__player-wpm">WPM: 121</div>
            </div>
            <div className="multigame__top-timer">
              <h3 className="multigame__top-timer-text">Timer</h3>
              <h4 className="multigame__top-time">1:00</h4>
            </div>
            <div className="multigame__top-player">
              <div className="multigame__player-name">Player 2</div>
              <div className="multigame__player-health">100%</div>
              <div className="multigame__player-wpm">WPM: 121</div>
            </div>
          </div>
        </div>
        <div className="multigame__fight-container">
          <p>
            Image goes here...
          </p> 
        </div>
        <div className="game__input-container">
          <div className="game__display-paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, ab maxime nihil ducimus nisi, enim obcaecati esse, asperiores aspernatur perspiciatis quam voluptate explicabo consequatur. Libero dignissimos iure error facilis consequatur.
          </div>
          <div className="game__input-box-outer">
            <input type="text" className="game__input-box" placeholder="Type here.."/>
          </div>
        </div>
      </div>
    )
  }
}

export default MultiGame;
