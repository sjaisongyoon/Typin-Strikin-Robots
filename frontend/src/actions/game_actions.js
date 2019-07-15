// import * as APIUtil from '../util/game_util';
import generateGamePassage from '../util/generate_game_passage';
export const RECEIVE_PASSAGE = 'RECEIVE_PASSAGE';
export const SET_GAME_TIME = 'SET_GAME_TIME'

const receivePassage = passage => ({
    type: RECEIVE_PASSAGE,
    passage
});

export const setGameTime = time => ({
    type: SET_GAME_TIME,
    time
})


export const fetchPassage = () => dispatch => {
    const passage = generateGamePassage();
    return dispatch(receivePassage(passage))
};

export const randomPassage = () => (
    generateGamePassage()
)