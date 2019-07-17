import { connect } from 'react-redux';
import GameStartMultiModal from './game_start_multi_modal';
import { closeModal } from '../../actions/modal_actions';
import { fetchGameRooms } from '../../actions/game_room_actions'
const msp = (state, ownProps) => {
  return ({
    gameRoom: Object.values(state.entities.gameRooms)[0] || {},
  })
}

const mdp = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal()),
    fetchGameRooms: () => dispatch(fetchGameRooms()),
  });
}

export default connect(msp, mdp)(GameStartMultiModal);
