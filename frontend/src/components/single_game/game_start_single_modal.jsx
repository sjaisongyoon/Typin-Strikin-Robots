import React from 'react'

class GameStartSingleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 3 }

  }

  componentDidMount() {
    this.countdown();
  }

  countdown() {
    let timer = setInterval(() => {
      if (this.state.time > 1) {
        this.setState((prevState) => ({
          time: prevState.time - 1,
        }))
      } else if (this.state.time === 1){
        this.setState({time: 'TYPE!!!!!'});
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div className='gamestart-single__modal-container'>
        <div className='gamestart-single__modal-header'>
          {this.state.time}
        </div>
      </div>
    )
  }
}

export default GameStartSingleModal;
