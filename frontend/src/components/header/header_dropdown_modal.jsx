import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class HeaderDropdownModal extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push('/leaderboard/single');
    this.props.closeModal();
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logoutUser();
    this.props.closeModal();
    this.props.history.push('/login');

  }
  
  render() {
    return (
      <div className="header__dropdown-container">
        <button href="#" onClick={this.handleClick} className="header__dropdown-btn">LEADERBOARD</button>

        <button href="#" onClick={this.handleLogout} className="header__dropdown-btn">LOGOUT</button>
      </div>
    )
  }
}

export default withRouter(HeaderDropdownModal);