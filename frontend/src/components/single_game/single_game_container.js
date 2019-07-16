import { connect } from 'react-redux';
import SingleGame from './single_game';
import { setGameTime, updateSingleGameWpm } from '../../actions/game_actions';
import { openModal } from '../../actions/modal_actions';
// import { updateUserStats } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  return ({
    gameTime: state.entities.game.time,
    gamePassage: state.entities.game.passage,
    currentUser: state.session.user,
    modal: state.ui.modal
  });
}

const mdp = (dispatch) => {
  return ({
    setGameTime: time => dispatch(setGameTime(time)),
    updateSingleGameWpm: wpm => dispatch(updateSingleGameWpm(wpm)),
    openModal: type => dispatch(openModal(type)) 
    // updateUserStats: (stats) => dispatch(updateUserStats(stats))
  });
}


export default connect(msp, mdp)(SingleGame);