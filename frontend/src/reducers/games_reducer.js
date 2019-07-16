import {RECEIVE_PASSAGE, 
        SET_GAME_TIME, 
        UPDATE_SINGLE_WPM} from '../actions/game_actions';
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
        case UPDATE_SINGLE_WPM:
            return Object.assign({}, state, { singleSessionWpm: action.wpm});
        default:
            return state;
    }
} 

export default gamesReducer;