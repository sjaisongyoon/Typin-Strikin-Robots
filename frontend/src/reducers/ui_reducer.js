import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import activeGameRoomReducer from './active_game_room_reducer'

const uiReducer = combineReducers({
  modal: modalReducer,
  activeGameRoom: activeGameRoomReducer
});

export default uiReducer;