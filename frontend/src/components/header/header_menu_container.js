import { connect } from 'react-redux';
import HeaderMenu from './header-menu';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return ({
    currentUser: state.session.user || {}
  });
}

const mdp = dispatch => {
  return ({
    openModal: type => dispatch(openModal(type))
  });
}

export default connect(msp, mdp)(HeaderMenu);