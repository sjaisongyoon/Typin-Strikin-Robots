import React from 'react'

class GameStartSingleModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: 3 }

  }

  componentDidMount() {
    this.countdown();
  }

  countdown() {
    let timer = setInterval(() => {
      if (this.state.time > 0) {
        this.setState((prevState) => ({
          time: prevState.time - 1,
        }))
      } else {
        clearInterval(timer);
        // console.log(this.state);
        // this.props.closeModal();
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        <div>{this.state.time}</div>
      </div>
    )
  }
}

export default GameStartSingleModal;