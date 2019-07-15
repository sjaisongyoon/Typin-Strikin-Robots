import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class HeaderLanding extends Component {
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
                <Link to='/signup' className="header__navbar-dropdown-btn">Sign up</Link>
                <Link to='/login' className="header__navbar-dropdown-btn">Log in</Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderLanding;
