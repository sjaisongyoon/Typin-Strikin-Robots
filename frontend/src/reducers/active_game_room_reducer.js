import {RECEIVE_GAME_ROOM, REMOVE_GAME_ROOM} from '../actions/game_room_actions';

const activeGameRoomReducer = (state={}, action) => {
    // debugger;
    Object.freeze(state)
    switch (action.type){
        case RECEIVE_GAME_ROOM:
            return Object.assign({}, state,  action.gameRoom.data);
        case REMOVE_GAME_ROOM:
            return {};
        default:
            return state;
    }
}

export default activeGameRoomReducer;