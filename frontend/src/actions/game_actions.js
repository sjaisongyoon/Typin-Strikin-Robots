import {generateRandomGamePassage, findPassage} from '../util/generate_game_passage';
export const RECEIVE_PASSAGE = 'RECEIVE_PASSAGE';
export const SET_GAME_TIME = 'SET_GAME_TIME';
export const UPDATE_SINGLE_WPM = 'UPDATE_SINGLE_WPM';
export const UPDATE_MULTI_WPM = 'UPDATE_MULTI_WPM';

export const setGameTime = time => ({
    type: SET_GAME_TIME,
    time
})

export const updateSingleGameWpm = wpm => {
    return ({
        type: UPDATE_SINGLE_WPM,
        wpm
    });
}

export const updateMultiGameWpm = payload => {
    const { myOwnWPM, enemyWPM} = payload;
    return ({
        type: UPDATE_MULTI_WPM,
        myOwnWPM,
        enemyWPM,
    })
}

export const randomPassage = () => (
    generateRandomGamePassage()
)