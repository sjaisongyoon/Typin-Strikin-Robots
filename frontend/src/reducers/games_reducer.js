import {RECEIVE_PASSAGE, 
        SET_GAME_TIME, 
        RECEIVE_GAME_ROOM,
        UPDATE_SINGLE_WPM,
        REMOVE_GAME_ROOM} from '../actions/game_actions';
import {randomPassage} from '../actions/game_actions';

let defaultPassage = randomPassage();

let defaultState = {
    passage: defaultPassage,
    time: 30
}

const gamesReducer = (state = defaultState, action) =>{
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PASSAGE:
            return Object.assign({}, state, {passage: action.passage});
        case SET_GAME_TIME:
            return Object.assign({}, state, {time: action.time});
        case RECEIVE_GAME_ROOM:
            return Object.assign({}, state, {gameRoom: action.gameRoom.data});
        case UPDATE_SINGLE_WPM:
            return Object.assign({}, state, { singleSessionWpm: action.wpm});
        case REMOVE_GAME_ROOM: 
            let new_state = Object.assign({}, state)
            delete new_state[action.gameRoom]
            return new_state;
        default:
            return state;
    }
} 

export default gamesReducer;