import * as APIUtil from '../util/leaderboard_util';
export const RECEIVE_LEADERBOARDS = "RECEIVE_LEADERBOARDS";

const receiveLeaderboards = leaderboards => ({
    type: RECEIVE_LEADERBOARDS,
    leaderboards
});

export const fetchLeaderboards = () => dispatch => (
    APIUtil.fetchLeaderboards().then(leaderboards=> dispatch(receiveLeaderboards(leaderboards)))
)