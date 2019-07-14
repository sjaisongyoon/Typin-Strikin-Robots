import React, { Component } from 'react'

class Header extends Component {

  // renderNavbar() {
  //   if (this.props.currentUser) {
  //     return (
  //       <div className="header__navbar-inner">
  //         .
  //       </div>
  //     );
  //   } else {
  //     (
  //       <div className="header__navbar-inner">

  //       </div>
  //     );
  //   }
  // }
  
  render() {
    return (
      <div className="header__container">
        <div className="header__container-inner">
          <div className="header__logo-container">
            <div className="header__logo">TSR Logo</div>
          </div>
          <div className="header__navbar-container">
            <div className="header__navbar">
              navbar ...
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
