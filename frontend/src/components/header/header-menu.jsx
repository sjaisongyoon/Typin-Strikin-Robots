import React, { Component } from 'react';

class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.handleModal = this.handleModal.bind(this);
  }
  
  handleModal(e) {
    e.preventDefault();
    this.props.openModal('menu-dropdown');
  }

  render() {
    return (
      <div className="header__container">
        <div className="header__container-inner">
          <div className="header__logo-container">
            <div className="header__logo">
              <div className="header__logo-img"></div>
            </div>
          </div>
          <div className="header__navbar-container">
            <div className="header__navbar header__navbar-loggedin">
              <div className="header__navbar-user-wrapper">
                <p className="header__navbar-username">{this.props.currentUser.username}</p>
                <p className="header__navbar-wpm">WPM: 134</p>
              </div>
              <div className="header__navbar-menu-wrapper">
                <button href="#" className="header__navbar-dropdown-btn" onClick={this.handleModal}>
                  Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderMenu;
