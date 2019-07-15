import { connect } from 'react-redux';
import HeaderMenu from './header-menu';

const msp = (state, ownProps) => {
  return ({
    currentUser: state.session.user.id
  });
}

const mdp = (state, ownProps) => {
  return ({

  });
}

export default connect(msp, mdp)(HeaderMenu);