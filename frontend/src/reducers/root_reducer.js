import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import users from './users_reducer';
import ui from './ui_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    users,
    ui
});

export default RootReducer;