import { connect } from 'react-redux';
import GameEndSingleModal from './game_end_single_modal';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return ({
    modalType: ownProps.type,
    currentUser: state.session.user,
    sessionWpm: state.entities.game.singleSessionWpm
  })
}

const mdp = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(msp, mdp)(GameEndSingleModal);