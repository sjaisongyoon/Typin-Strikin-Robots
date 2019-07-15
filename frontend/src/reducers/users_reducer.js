import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USERS:
            return Object.assign({}, state, action.users.data)
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser})
        case RECEIVE_USER: 
            return Object.assign({}, state, {[action.user.data.id]: action.user.data})
        default:
            return state;
    }
};

export default usersReducer;
