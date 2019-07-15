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
    this.updateUserOutput = this.updateUserOutput.bind(this);
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
    let words = this.props.gamePassage.split(' ');
    let wordCount = words.length;

    let initialWords = words.map((word, idx) => {
      if (idx === (wordCount - 1)) {
        return `${word}`;
      } else {
        return `${word} `; 
      }
    });
    
    let currentWord = initialWords.shift();

    this.setState({
      initialWords,
      currentWord: currentWord,
      wordCount: wordCount
    });

  }

   async handleInput(e) {
     let key = e.key;
     let wordSoFar = e.target.value;

    //  if (key !== ' ') {
      await this.setState({
        currentInput: wordSoFar
      });
      this.updateUserOutput();
    // } else {
      this.handleSubmit();
    // }
  }
  
  updateUserOutput() {
    return this.state.currentInput;
  }

  handleSubmit() {
    // update initialWords, correctWords, currentWord
    // clear input
    let { currentWord, currentInput} = this.state;
    console.log('handlesubmit triggered');
    console.log(currentWord);
    console.log(currentInput);
    console.log(currentWord === currentInput);
    
    if (currentWord === currentInput) {
      let correctWords = [...this.state.correctWords];
      correctWords.push(this.state.currentWord);
      let lastCorrectIdx = [...this.state.correctWords].length;

      // Update class for correct Words
      let word = document.getElementById(`${lastCorrectIdx}`);
      word.classList.add('word__span--correct')
      
      this.setState({
        currentInput: '',
        initialWords: this.state.initialWords.slice(1),
        correctWords: correctWords,
        currentWord: this.state.initialWords[0]
      })
      console.log(this.state);
    }
  }


  render() {
  
    let {currentUser, gamePassage, gameTime} = this.props;

    if (this.state.wordCount === this.state.correctWords.length) {
      console.log('game over!');
    }

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
          {/* TESTING END */}

          <div className="game__input-box-outer">
            <p className="game__input-preview">
              {this.state.currentInput === '' ? '       ' : this.state.currentInput}
            </p>
            <input 
              type="text" 
              className="game__input-box" 
              placeholder="Type here.." 
              value={this.state.currentInput}
              onChange={(e) => this.handleInput(e)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleGame;
