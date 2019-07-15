import { connect } from 'react-redux';
import HeaderGameplay from './header_gameplay';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return ({
    currentUser: state.session.user
  });
}

const mdp = dispatch => {
  return ({
    openModal: type => dispatch(openModal(type))
  });
}


// export default connect(null, null)(HeaderGameplay);
export default connect(msp, mdp)(HeaderGameplay);
