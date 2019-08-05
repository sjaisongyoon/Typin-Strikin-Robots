import { connect } from 'react-redux';
import SingleGame from './single_game';
import { setGameTime, updateSingleGameWpm } from '../../actions/game_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';
import { generateRandomGamePassage } from "../../util/generate_game_passage";

let randomPassage = generateRandomGamePassage();

const msp = (state, ownProps) => {
  return {
    gameTime: state.entities.game.time,
    gamePassage: randomPassage,
    currentUser: state.session.user,
    modal: state.ui.modal
  };
}

const mdp = (dispatch) => {
  return ({
    setGameTime: time => dispatch(setGameTime(time)),
    updateSingleGameWpm: wpm => dispatch(updateSingleGameWpm(wpm)),
    openModal: type => dispatch(openModal(type)),
    updateUser: (stats) => dispatch(updateUser(stats)),
    closeModal: () => dispatch(closeModal()),
  });
}


export default connect(msp, mdp)(SingleGame);