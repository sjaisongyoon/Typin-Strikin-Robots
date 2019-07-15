import React, { Component } from 'react'

export class SingleGame extends Component {
  constructor(props) {
    super(props);


    this.state = {
      gameTime: this.props.gameTime,
      initialWords: [],
      wordCount: 0,
      playerWPM: 0,
      correctWords: [],
      currentWord: '',
      currentInput: ''
    }

    this.createWordsArray = this.createWordsArray.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createWordsDisplay = this.createWordsDisplay.bind(this);
  }

  createWordsDisplay() {
    let wordsArr = this.props.gamePassage.split(' ').map((word, idx) => {
      return <span key={idx} id={idx} className="word__span">{word}&nbsp;</span>
    })

    return wordsArr;
  }

  componentDidMount() {
    this.createWordsArray();
  }


  updateWordCount() {

  }


  createWordsArray() {
    let initialWords = this.props.gamePassage.split(' ');
    let wordCount = initialWords.length;
    let currentWord = initialWords.shift();

    this.setState({
      initialWords,
      currentWord: currentWord,
      wordCount: wordCount
    });

  }

   handleInput(e) {
     if (e.key !== ' ') {
      console.log(e.target.value);
      this.setState({
        currentInput: e.currentTarget.value
      });
    } else {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    // update initialWords, correctWords, currentWord
    // clear input
    let { currentWord, currentInput} = this.state;
    console.log('handlesubmit triggered')
    if (currentWord === currentInput) {
      this.setState({
        currentInput: '',
        initialWords: this.state.initialWords.slice(1),
        correctWords: this.state.correctWords.push(this.state.initialWords[0]),
        currentWord: this.state.initialWords[1]
      })
    }
  }


  render() {
  
    let {currentUser, gamePassage, gameTime} = this.props;
    return (
      <div className="singlegame__container">
        <div className="singlegame__top">
          <div className="singlegame__top-stats-wrapper">
            <div className="singlegame__top-player">
              <div className="singlegame__player-name">{currentUser.username}</div>
              <div className="singlegame__player-wpm">WPM: 121</div>
            </div>
            <div className="singlegame__top-timer">
              <h3 className="singlegame__top-timer-text">Timer</h3>
              <h4 className="singlegame__top-time">00:{this.state.gameTime}</h4>
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
            {this.createWordsDisplay()}
          </div>

          {/* TESTING */}
          <p>{this.state.currentInput}</p>
          {/* {this.updateUserOutput()} */}
          {/* TESTING END */}

          <div className="game__input-box-outer">
            <input 
              type="text" 
              className="game__input-box" 
              placeholder="Type here.." 
              onKeyDown={this.handleInput}/>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleGame;
