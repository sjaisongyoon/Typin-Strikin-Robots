import { connect } from 'react-redux';
import HeaderDropdownModal from './header_dropdown_modal';
import { closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return ({
    
  })
}

const mdp = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal()),
    logoutUser: () => dispatch(logout())
  });
}

export default connect(msp, mdp)(HeaderDropdownModal);
