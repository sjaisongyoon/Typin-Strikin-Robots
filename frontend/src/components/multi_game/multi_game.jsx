import React, { Component } from 'react'
import socketIOClient from 'socket.io-client';
import $ from 'jquery';

class MultiGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // Sockets
      ownHealthBar: 100,
      enemyHealthBar: 100,
      socket: socketIOClient("http://127.0.0.1:3001"),

      // Gameplay
      gameTime: this.props.gameTime,
      initialWords: [],
      wordCount: 0,
      currentWPM: 0,
      elapsedTime: 0,
      decrementAmt: 0,
      correctWords: [],
      currentWord: '',
      currentInput: '',
      modal: this.props.modal,
      ownHealthBarDisplay: 250,
      enemyHealthBarDisplay: 250,
    }


    // Sockets
    this.handleHealthBarUpdate = this.handleHealthBarUpdate.bind(this);
    this.openSocket = this.openSocket.bind(this);

    // Helper function bindings
    this.createWordsArray = this.createWordsArray.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createWordsDisplay = this.createWordsDisplay.bind(this);
    this.updateUserOutput = this.updateUserOutput.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.calculateWPM = this.calculateWPM.bind(this);
    this.calculateHealthBarDecrement = this.calculateHealthBarDecrement.bind(this);
    this.updateHealthBarDisplay = this.updateHealthBarDisplay.bind(this);
    // this.gameOver = this.gameOver.bind(this);



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

  openSocket() {
    this.state.socket.on("gameroom", data => {
      if (data.myUserId !== this.props.currentUser.id) {
        this.setState({ ownHealthBar: data.enemyHealthBar })
      }
    })
  }

  componentDidMount() {
    // Sockets
    this.openSocket();
    console.log('open socket')

    // Gameplay
    this.createWordsArray();
    this.startTimer();
    console.log(this.state);
    setTimeout(() => {
      this.calculateHealthBarDecrement();
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    let { currentUser, openModal, updateSingleGameWpm, updateUser, deleteGameRoom, gameRoom } = this.props;

    if (!this.state.modal && (this.state.ownHealthBar === 0 || this.state.enemyHealthBar === 0 || this.state.gameTime === 0)) {
      this.setState({ modal: true });
      updateSingleGameWpm(parseInt(this.state.currentWPM));
      let updateLoss;
      let updateWin;
      if (this.state.ownHealthBar === 0) {
        updateLoss = 1;
        updateWin = 0;
      } else if (this.state.enemyHealthBar === 0) {
        updateLoss = 0;
        updateWin = 1;
      }
      let updatedUser = {
        id: currentUser.id,
        multiplayerWins: updateWin,
        multiplayerLosses: updateLoss
      };
      updateUser(updatedUser);
      if (gameRoom) {
        deleteGameRoom(gameRoom.id);
      };
      openModal('gameend-single-modal');
    }
  }

  handleHealthBarUpdate() {
    let newEnemyHealthBar = this.state.enemyHealthBar - this.state.decrementAmt;
  
    if (newEnemyHealthBar <= 0) {
      newEnemyHealthBar = 0;
    }

    let data = {
      enemyHealthBar: newEnemyHealthBar,
      myUserId: this.props.currentUser.id
    }
    this.state.socket.emit("gameroom", data)
    this.setState({enemyHealthBar: newEnemyHealthBar});
  }


  // ////////
  // // Gameplay
  // ////////
  // gameOver(type) {
  //   // Stop player input
  //   // Show game win/lose modal
  //   // Render player game stats
  //   // Give option to play again
  //   // Update player stats in DB
  // }

  createWordsDisplay() {
    let wordsArr = this.props.gamePassage.split(' ').map((word, idx) => {
      return <span key={idx} id={idx} className="word__span">{word}&nbsp;</span>
    })

    return wordsArr;
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
        // console.log(this.state);
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
    }, () => console.log(this.state));

  }

  async handleInput(e) {
    if (this.state.gameTime !== 0 && this.state.ownHealthBar !== 0) {
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

  calculateHealthBarDecrement() {
    let totalWords = this.state.wordCount;
    let decrementAmt = 100 / totalWords;

    console.log(decrementAmt);
    this.setState({
      decrementAmt: decrementAmt
    })
  }
  
  handleSubmit() {
    // update initialWords, correctWords, currentWord, clear input
    let { currentWord, currentInput } = this.state;
    console.log('handlesubmit triggered');
    console.log(currentWord);
    console.log(currentInput);
    console.log(currentWord === currentInput);

    if (currentWord === currentInput) {
      let soundEffects = [
        new Audio('assets/audio/01-punch.mp3'),
        new Audio('assets/audio/02-punch.mp3'),
        new Audio('assets/audio/03-punch.mp3'),
        new Audio('assets/audio/04-punch.mp3'),
        new Audio('assets/audio/05-punch.mp3'),
        new Audio('assets/audio/06-punch.mp3'),
        new Audio('assets/audio/07-punch.mp3'),
      ];
      // LOL
      let randomSound = soundEffects[Math.floor(Math.random() * soundEffects.length)];
      randomSound.play();


      // ANIMATION
      this.callPlayer1Animation();
      // ANIMATION




      this.updateHealthBarDisplay();

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
      }, () => {
          this.handleHealthBarUpdate();
      })
      console.log(this.state);
      console.log(this.calculateWPM());

      console.log(this.state.currentWPM);
    }
  }

  updateHealthBarDisplay() {
    let ownHealth = this.state.ownHealthBar;
    let enemyHealth = this.state.enemyHealthBar;

    let ownBarDisplayPos = (250 * ownHealth) / 100;
    let enemyBarDisplayPos = (250 * enemyHealth) / 100;
    
    this.setState({
      ownHealthBarDisplay: ownBarDisplayPos,
      EnemyHealthBarDisplay: enemyBarDisplayPos,
    })
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
    let { currentUser, openModal, updateSingleGameWpm, updateUser } = this.props;

    // show modal on game end


    return (
      <div className="multigame__container">
        <div className="multigame__fight-container">
            <div className="multigame__top">
              <div className="multigame__top-stats-wrapper">
                <div className="multigame__top-player">
                  <div className="multigame__player-name">{currentUser.username}</div>
                  {/* {(this.state.ownHealthBar).toFixed(2)}% */}

                  <div className="multigame__player-health" style={{backgroundPosition: `${this.state.ownHealthBarDisplay}px`}}>
                  </div>
                  <div className="multigame__player-wpm">WPM: {this.state.currentWPM }</div>
                </div>
                <div className="multigame__top-timer">
                  <h3 className="multigame__top-timer-text">Timer</h3>
                  <h4 className="multigame__top-time">00:{this.state.gameTime > 9 ? this.state.gameTime : `0${this.state.gameTime}`}</h4>
                </div>
                <div className="multigame__top-player">
                  <div className="multigame__player-name">Player 2</div>
                  <div className="multigame__player-health" style={{ backgroundPosition: `${this.state.EnemyHealthBarDisplay}px`}}></div>
                  <div className="multigame__player-wpm">WPM: 121</div>
                </div>
              </div>
            <div className="multigame__fight-inner">
              <div className="player1 stance"></div>
              <div className="player2 stance flip"></div>
            </div>
          </div>
        </div>
        <div className="game__input-container">
          <div className="game__display-paragraph">
            {this.createWordsDisplay()}
          </div>
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
              autoFocus />
          </div>
          </div>
        </div>
    )
  }
}

export default MultiGame;
