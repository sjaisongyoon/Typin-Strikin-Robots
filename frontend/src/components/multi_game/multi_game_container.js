import { connect } from 'react-redux';
import MultiGame from './multi_game';
import { setGameTime, updateMultiGameWpm, fetchPassage } from '../../actions/game_actions';
import { openModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';
import { deleteGameRoom, fetchActiveGameRoom } from '../../actions/game_room_actions.js'
import { selectUser } from '../../reducers/selectors';

const msp = state => {
  return ({
    gameTime: state.entities.game.time,
    gamePassage: state.entities.game.passage || "",
    currentUser: state.session.user,
    activeGameRoom: state.ui.activeGameRoom,
    modal: state.ui.modal,
    gameRooms: Object.values(state.entities.gameRooms) || {},
    selectUser: (userId) => selectUser(state, userId)
  })
}

const mdp = dispatch => {
  return ({
    setGameTime: time => dispatch(setGameTime(time)),
    updateMultiGameWpm: wpm => dispatch(updateMultiGameWpm(wpm)),
    openModal: type => dispatch(openModal(type)),
    updateUser: (stats) => dispatch(updateUser(stats)),
    deleteGameRoom: (deleteData) => dispatch(deleteGameRoom(deleteData)),
    // fetchPassage: (passageId) => dispatch(fetchPassage(passageId))
    fetchActiveGameRoom: (gameRoomId) => dispatch(fetchActiveGameRoom(gameRoomId)),
  })
}

// export default connect(msp, mdp)(MultiGame);
export default connect(msp, mdp)(MultiGame);