import { connect } from 'react-redux';
import MultiGame from './multi_game';
import { setGameTime, updateSingleGameWpm } from '../../actions/game_actions';
import { openModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';
import { deleteGameRoom } from '../../actions/game_room_actions.js'

const msp = state => {
  return ({
    gameTime: state.entities.game.time,
    gamePassage: state.entities.game.passage,
    currentUser: state.session.user,
    modal: state.ui.modal,
    gameRoom: Object.values(state.entities.gameRooms)[0]
  })
}

const mdp = dispatch => {
  return ({
    setGameTime: time => dispatch(setGameTime(time)),
    updateSingleGameWpm: wpm => dispatch(updateSingleGameWpm(wpm)),
    openModal: type => dispatch(openModal(type)),
    updateUser: (stats) => dispatch(updateUser(stats)),
    deleteGameRoom: (deleteData) => dispatch(deleteGameRoom(deleteData))
  })
}

// export default connect(msp, mdp)(MultiGame);
export default connect(msp, mdp)(MultiGame);