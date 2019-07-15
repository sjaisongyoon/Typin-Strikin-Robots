import * as APIUtil from '../util/game_util';
import generateGamePassage from '../util/generate_game_passage';
export const RECEIVE_PASSAGE = 'RECEIVE_PASSAGE';
export const SET_GAME_TIME = 'SET_GAME_TIME';
export const RECEIVE_GAME_ROOM = 'RECEIVE_GAME_ROOM';
export const REMOVE_GAME_ROOM = 'REMOVE_GAME_ROOM';

const receivePassage = passage => ({
    type: RECEIVE_PASSAGE,
    passage
});

const receiveGameRoom = gameRoom =>({
    type: RECEIVE_GAME_ROOM,
    gameRoom
})

const removeGameRoom = (gameRoom) => ({
    type: REMOVE_GAME_ROOM,
    gameRoom
})

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

export const createGameRoom = gameRoomData => dispatch => (
    APIUtil.createGameRoom(gameRoomData).then(gameRoom => dispatch(receiveGameRoom(gameRoom)))
)

export const deleteGameRoom = (gameRoomId) => dispatch => (
    APIUtil.deleteGameRoom(gameRoomId).then( (gameRoomId) => dispatch(removeGameRoom(gameRoomId)))
)