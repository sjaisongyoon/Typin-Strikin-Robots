import React from 'react';
import socketIOClient from 'socket.io-client';

class GameStartMultiModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      time: 3,
      twoPlayers: false,
      // socket: socketIOClient("http://127.0.0.1:3001"),
      socket: socketIOClient("http://typefighter.herokuapp.com"),
     }
  }

  openSocket() {
    this.state.socket.on("lobby", twoPlayers => {
      if (twoPlayers) {
        this.setState({ twoPlayers })
      }
    })
    this.state.socket.emit("lobby");
  }

  componentDidMount() {
    this.openSocket();

  }

  countdown() {
    let timer = setInterval(() => {
      if (this.state.time > 1) {
        this.setState((prevState) => ({
          time: prevState.time - 1,
        }))
      } else if (this.state.time === 1) {
        this.setState({ time: 'TYPE!!!!!' })
      } else {
        this.props.closeModal();
        clearInterval(timer);
      }
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.twoPlayers && this.state.time === 3) {
      this.countdown();
    }
  }

  render() {
    const display = (!this.state.twoPlayers) ? <div>
      <div className='gamestart-multi__modal-text'>waiting for</div> < br /> <div>challenger...</div>
    </div> : <div>
      {this.state.time}
    </div> 
    return (
      <div className='gamestart-multi__modal-container'>
        <div className='gamestart-multi__modal-header'>
          {display}
        </div>
      </div>
    )
  }
}

export default GameStartMultiModal;
