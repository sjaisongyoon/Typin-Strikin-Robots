import React, { Component } from 'react'
// import '../../util/player1';
import $ from 'jquery';


// document.addEventListener('DOMContentLoaded', () => {
//   var $ken = $('.player1');
//   var $kenPos, $fireballPos;
  
//   const punch = function () {
//     $ken.addClass('punch');
//     setTimeout(function () { $ken.removeClass('punch'); }, 150);
//   };
//   $('#a').click(punch);
// });






export class SingleGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameTime: this.props.gameTime,
      initialWords: [],
      wordCount: 0,
      currentWPM: 0,
      elapsedTime: 0,
      correctWords: [],
      currentWord: '',
      currentInput: '',
      modal: this.props.modal
    }

    this.createWordsArray = this.createWordsArray.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createWordsDisplay = this.createWordsDisplay.bind(this);
    this.updateUserOutput = this.updateUserOutput.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.calculateWPM = this.calculateWPM.bind(this);


    // Moves

    this.callPlayer1Animation = this.callPlayer1Animation.bind(this);
    this.punch = this.punch.bind(this);
    this.kick = this.kick.bind(this);
    this.rkick = this.rkick.bind(this);
    this.tatsumaki = this.tatsumaki.bind(this);
    this.hadoken = this.hadoken.bind(this);
    this.shoryuken = this.shoryuken.bind(this);
    this.jump = this.jump.bind(this);
    // this.kneel = this.kneel.bind(this);
    this.walkLeft = this.walkLeft.bind(this);
    this.walkRight = this.walkRight.bind(this);
  }

  createWordsDisplay() {
    let wordsArr = this.props.gamePassage.split(' ').map((word, idx) => {
      return <span key={idx} id={idx} className="word__span">{word}&nbsp;</span>
    })

    return wordsArr;
  }

  componentDidMount() {
    this.createWordsArray();
    this.startTimer();
    console.log(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    let { currentUser, openModal, updateUser, updateSingleGameWpm } = this.props;
    // show modal on game end
    if (!this.state.modal && (this.state.wordCount === this.state.correctWords.length || this.state.gameTime === 0)) {
      this.setState({ modal: true });
      updateSingleGameWpm(parseInt(this.state.currentWPM));
      updateUser({
        id: currentUser.id,
        singleplayerWPM: this.state.currentWPM
      });
      openModal('gameend-single-modal');
    }

  }
  
  startTimer() {
    let timer = setInterval(() => {
      if (this.state.gameTime > 0) {
        this.setState((prevState) => ({
          gameTime: prevState.gameTime - 1,
          elapsedTime: prevState.elapsedTime + 1
        }))
      } else {
        clearInterval(timer);
        console.log(this.state); 
      }
    }, 1000);
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
    if (this.state.gameTime !== 0) {
      let wordSoFar = e.target.value;
 
       await this.setState({
         currentInput: wordSoFar
       });
       this.updateUserOutput();
       this.handleSubmit();
    }
  }
  
  updateUserOutput() {
    return this.state.currentInput;
  }

  calculateWPM() {
    let numCorrectWords = this.state.correctWords.length;
    let elapsedTime = this.state.elapsedTime;

    let currentWPM = ((numCorrectWords / elapsedTime) * 60).toFixed(0);
    this.setState({
      currentWPM: currentWPM
    });
  }

  handleSubmit() {
    // update initialWords, correctWords, currentWord, clear input
    let { currentWord, currentInput} = this.state;
    console.log('handlesubmit triggered');
    console.log(currentWord);
    console.log(currentInput);
    console.log(currentWord === currentInput);
    
    if (currentWord === currentInput) {
      // let soundEffects = [
      //   new Audio('assets/audio/01-punch.mp3'), 
      //   new Audio('assets/audio/02-punch.mp3'), 
      //   new Audio('assets/audio/03-punch.mp3'),
      //   new Audio('assets/audio/04-punch.mp3'),
      //   new Audio('assets/audio/05-punch.mp3'),
      //   new Audio('assets/audio/06-punch.mp3'),
      //   new Audio('assets/audio/07-punch.mp3'),
      // ];
      // let randomSound = soundEffects[Math.floor(Math.random() * soundEffects.length)];
      // randomSound.play();
      // LOL

      // ANIMATION
      this.callPlayer1Animation();
    

      
      
      
      // ANIMATION

      let correctWords = [...this.state.correctWords];
      correctWords.push(this.state.currentWord);
      let lastCorrectIdx = [...this.state.correctWords].length;

      // Update class for correct Words
      let word = document.getElementById(`${lastCorrectIdx}`);
      word.classList.add('word__span--correct');
      
      this.setState({
        currentInput: '',
        initialWords: this.state.initialWords.slice(1),
        correctWords: correctWords,
        currentWord: this.state.initialWords[0]
      })
      console.log(this.state);
      console.log(this.calculateWPM());

      console.log(this.state.currentWPM);
    }
  }

  callPlayer1Animation() {

    let moves = ["punch", "kick", "rkick", "tatsumaki", "hadoken", "shoryuken", "jump", "kneel", "walkLeft", "walkRight"];
    let randomMoveNum = Math.floor(Math.random() * moves.length);
    // debugger
    console.log(randomMoveNum);

    switch (randomMoveNum) {
      case 0:
        this.punch();
        break;
      case 1:
        this.kick();
        break;
      case 2:
        this.rkick();
        break;
      case 3:
        this.tatsumaki();
        break;
      case 4:
        this.punch();
        break;
      case 5:
        this.shoryuken();
        break;
      case 6:
        this.hadoken();
        break;
      case 7:
        this.hadoken();
        break;
      case 8:
        this.hadoken();
        break;
      case 9:
        this.walkLeft();
        break;
      default:
        this.walkRight();
        break;
    }
  }
  
  punch() {
    let $ken = $('.player1');
    let $kenPos, $fireballPos;
    $ken.addClass('punch');
    setTimeout(function () { $ken.removeClass('punch'); }, 150);
  };

  kick() {
    let $ken = $('.player1');
    let $kenPos, $fireballPos;
    $ken.addClass('kick');
    setTimeout(function () { $ken.removeClass('kick'); }, 500);
  };
  rkick() {
    let $ken = $('.player1');
    let $kenPos, $fireballPos;
    $ken.addClass('reversekick');
    setTimeout(function () { $ken.removeClass('reversekick'); }, 500);
  };
  tatsumaki() {
    let $ken = $('.player1');
    let $kenPos, $fireballPos;
    $ken.addClass('tatsumaki');
    setTimeout(function () { $ken.addClass('down'); }, 1500);
    setTimeout(function () { $ken.removeClass('tatsumaki down'); }, 2000);
  };
  hadoken() {
    let $ken = $('.player1');
    let $kenPos, $fireballPos;
    $ken.addClass('hadoken');
    setTimeout(function () { $ken.removeClass('hadoken'); }, 500);
    setTimeout(function () {
      var $fireball = $('<div/>', { class: 'fireball' });
      $fireball.appendTo($ken);

      var isFireballColision = function () {
        return $fireballPos.left + 75 > $(window).width() ? true : false;
      };

      var explodeIfColision = setInterval(function () {

        $fireballPos = $fireball.offset();
        //console.log('fireballInterval:',$fireballPos.left);

        if (isFireballColision()) {
          $fireball.addClass('explode').removeClass('moving').css('marginLeft', '+=22px');
          clearInterval(explodeIfColision);
          setTimeout(function () { $fireball.remove(); }, 500);
        }

      }, 50);

      setTimeout(function () { $fireball.addClass('moving'); }, 20);

      setTimeout(function () {
        $fireball.remove();
        clearInterval(explodeIfColision);
      }, 3020);

    }, (250));
  };
  shoryuken() {
    let $ken = $('.player1');
    let $kenPos, $fireballPos;
    $ken.addClass('shoryuken');
    setTimeout(function () { $ken.addClass('down'); }, 500);
    setTimeout(function () { $ken.removeClass('shoryuken down'); }, 1000);
  };
  jump() {
    let $ken = $('.player1');
    let $kenPos, $fireballPos;
    $ken.addClass('jump');
    setTimeout(function () { $ken.addClass('down'); }, 500);
    setTimeout(function () { $ken.removeClass('jump down'); }, 1000);
  };
  // kneel() {
  //   let $ken = $('.player1');
  //   let $kenPos, $fireballPos;
  //   $ken.addClass('kneel');
  // };
  walkLeft() {
    let $ken = $('.player1');
    let $kenPos, $fireballPos;
    $ken.addClass('walk').css({ marginLeft: '-=10px' });
  };
  walkRight() {
    let $ken = $('.player1');
    let $kenPos, $fireballPos;
    $ken.addClass('walk').css({ marginLeft: '+=10px' });
  };

  render() {
    let { currentUser, openModal, updateUser, updateSingleGameWpm } = this.props;

    
    return (
      <div className="singlegame__container">
        <div className="singlegame__fight-container">
          <div className="singlegame__top">
            <div className="singlegame__top-stats-wrapper">
              <div className="singlegame__top-player">
                <div className="singlegame__player-name">{currentUser.username}</div>
                <div className="singlegame__player-wpm">WPM: {this.state.currentWPM}</div>
              </div>
              <div className="singlegame__top-timer">
                <h3 className="singlegame__top-timer-text">Timer</h3>
                <h4 className="singlegame__top-time">00:{this.state.gameTime > 9 ? this.state.gameTime : `0${this.state.gameTime}`}</h4>
              </div>
            </div>
          </div>
          <div className="singlegame__fight-inner">
            <div className="player1 stance"></div>
            <div className="player2"></div>
          </div>
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
              onChange={(e) => this.handleInput(e)}
              autoFocus/>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleGame;

