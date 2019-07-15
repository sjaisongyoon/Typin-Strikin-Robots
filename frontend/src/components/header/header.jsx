import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props);

    this.renderNav = this.renderNav.bind(this);
  }
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

  renderNav() {
    let nav;
    if (true) {
      nav = (
        <div className="header__navbar header__navbar-loggedout">
          <a href="#" className="header__navbar-btn header__navbar-btn-login">Login</a>
          <a href="#" className="header__navbar-btn header__navbar-btn-signup">Signup</a>
        </div>
      );
    } else {
      nav = (
        <div className="header__navbar header__navbar-loggedin">
          <a href="#" className="header__navbar-btn header__navbar-btn-login">Login</a>
          <a href="#" className="header__navbar-btn header__navbar-btn-signup">Signup</a>
        </div>
      );
    }
  }
  
  render() {
    return (
      <div className="header__container">
        <div className="header__container-inner">
          <div className="header__logo-container">
            <div className="header__logo">TSR Logo</div>
          </div>
          <div className="header__navbar-container">
            {this.renderNav()}
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
