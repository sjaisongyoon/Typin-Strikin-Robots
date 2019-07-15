import React, { Component } from 'react'

class HeaderMenu extends Component {
  constructor(props) {
    super(props);
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
                <p className="header__navbar-username">Username</p>
                <p className="header__navbar-wpm">WPM: 134</p>
              </div>
              <div className="header__navbar-menu-wrapper">
                <a href="#" className="header__navbar-dropdown-btn">
                  Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderMenu;
