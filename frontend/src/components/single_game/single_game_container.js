import { connect } from 'react-redux';
import SingleGame from './single_game';
import { setGameTime } from '../../actions/game_actions';
// import { updateUserStats } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  return ({
    gameTime: state.entities.game.time,
    gamePassage: state.entities.game.passage,
    currentUser: state.session.user
  });
}

const mdp = (dispatch) => {
  return ({
    setGameTime: time => dispatch(setGameTime(time)),
    // updateUserStats: (stats) => dispatch(updateUserStats(stats))
  });
}


export default connect(msp, mdp)(SingleGame);