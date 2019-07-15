import { connect } from 'react-redux';
import LeaderboardIndex from './leaderboard_index';

const msp = state => {
  return ({
    leaderboardSingle: null,
    leaderboardMulti: null
  })
};

const mdp = dispatch => {
  return ({
    fetchLeaderboardSingle: null,
    fetchLeaderboardMulti: null
  })
};

export default connect(msp, mdp)(LeaderboardIndex);
