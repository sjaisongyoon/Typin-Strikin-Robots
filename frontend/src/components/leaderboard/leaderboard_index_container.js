import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LeaderboardIndex from './leaderboard_index';
import { fetchLeaderboards } from '../../actions/leaderboard_actions';


const msp = (state, ownProps) => {
  return ({
    boardType: ownProps.match.params.type,
    leaderboardSingle: state.entities.leaderboards.singleplayerWPM,
    leaderboardMulti: state.entities.leaderboards.multiplayerWins
  })
};

const mdp = dispatch => {
  return ({
    fetchLeaderboards: () => dispatch(fetchLeaderboards())
  })
};

export default withRouter(connect(msp, mdp)(LeaderboardIndex));
