import { connect } from 'react-redux';
import GameEndSingleModal from './game_end_single_modal';

const msp = (state, ownProps) => {
  return ({
    modalType: ownProps.type,
    currentUser: state.session.user
  })
}

const mdp = dispatch => {
  return ({

  })
}

export default connect(msp, mdp)(GameEndSingleModal);