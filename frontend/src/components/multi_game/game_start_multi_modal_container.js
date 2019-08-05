import { connect } from 'react-redux';
import GameStartMultiModal from './game_start_multi_modal';
import { closeModal } from '../../actions/modal_actions';
import { fetchActiveGameRoom } from '../../actions/game_room_actions'
const msp = (state, ownProps) => {
  return ({
    activeGameRoom: state.ui.activeGameRoom,
    currentUser: state.session.user,
  })
}

const mdp = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal()),
    fetchActiveGameRoom: (gameRoomId) => dispatch(fetchActiveGameRoom(gameRoomId)),
  });
}

export default connect(msp, mdp)(GameStartMultiModal);
