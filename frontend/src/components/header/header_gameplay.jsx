import React, { Component } from 'react'

class HeaderGameplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header__container">
        <div className="header__container-inner">
          <div className="header__logo-container">
            <div className="header__logo-img"></div>
          </div>
          <div className="header__navbar-container">
            <div className="header__navbar">
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

export default HeaderGameplay;
