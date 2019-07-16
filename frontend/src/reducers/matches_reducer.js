import { RECEIVE_MATCH, RECEIVE_MATCHES} from '../actions/match_actions';

const matchesReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MATCH:
            return Object.assign({}, state, {[action.match.id]: action.match })
        case RECEIVE_MATCHES:
            return Object.assign({}, state, action.matches.data)
        default:
            return state;
    }
}

export default matchesReducer