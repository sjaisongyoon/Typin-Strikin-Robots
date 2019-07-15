import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LeaderboardIndex from './leaderboard_index';

const msp = (state, ownProps) => {
  return ({
    boardType: ownProps.match.params.type
  })
};

const mdp = dispatch => {
  return ({
    fetchLeaderboardSingle: null,
    fetchLeaderboardMulti: null
  })
};

export default withRouter(connect(msp, mdp)(LeaderboardIndex));
