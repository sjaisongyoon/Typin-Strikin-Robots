import {RECEIVE_PASSAGE, SET_GAME_TIME} from '../actions/game_actions';
import {randomPassage} from '../actions/game_actions';

let defaultPassage = randomPassage();

const gamesReducer = (state={passage: defaultPassage}, action) =>{
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PASSAGE:
            return Object.assign({}, state, {passage: action.passage})
        case SET_GAME_TIME:
            return Object.assign({}, state, {time: action.time})
        default:
            return state
    }
} 

export default gamesReducer;