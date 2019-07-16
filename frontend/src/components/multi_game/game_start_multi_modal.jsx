import React from 'react'

class GameStartMultiModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      time: 3,
      waiting: true,
     }
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
        clearInterval(timer);
      }
    }, 1000);
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div className='gamestart-multi__modal-container'>
        <div className='gamestart-multi__modal-header'>
          { (this.state.waiting) ? 'waiting for challenger...' : this.state.time}
        </div>
      </div>
    )
  }
}

export default GameStartMultiModal;
