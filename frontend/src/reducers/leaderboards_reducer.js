import {RECEIVE_LEADERBOARDS} from '../actions/leaderboard_actions';

const leaderboardsReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LEADERBOARDS:
            return Object.assign({}, state, action.leaderboards.data)    
        default:
            return state;
    }
}

export default leaderboardsReducer;