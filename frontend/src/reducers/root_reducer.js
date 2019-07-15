import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import entities from './entities_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    entities,
    ui
});

export default RootReducer;