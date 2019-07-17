import * as APIUtil from '../util/game_room_util';
export const RECEIVE_GAME_ROOM = 'RECEIVE_GAME_ROOM';
export const REMOVE_GAME_ROOM = 'REMOVE_GAME_ROOM';
export const RECEIVE_ALL_GAME_ROOMS = 'RECEIVE_ALL_GAME_ROOMS';

const receiveGameRoom = gameRoom => ({
    type: RECEIVE_GAME_ROOM,
    gameRoom
})

const receiveAllGameRooms = gameRooms => ({
    type: RECEIVE_ALL_GAME_ROOMS,
    gameRooms
})

const removeGameRoom = (gameRoom) => ({
    type: REMOVE_GAME_ROOM,
    gameRoom
})

export const createGameRoom = gameRoomData => dispatch => (
    APIUtil.createGameRoom(gameRoomData).then(gameRoom => dispatch(receiveGameRoom(gameRoom)))
)

export const deleteGameRoom = (deleteData) => dispatch => (
    APIUtil.deleteGameRoom(deleteData).then((gameRoom) => dispatch(removeGameRoom(gameRoom)))
)

export const updateGameRoom = (gameRoomData) => dispatch => (
    APIUtil.updateGameRoom(gameRoomData).then((gameRoom) => dispatch(receiveGameRoom(gameRoom)))
)

export const fetchGameRooms = () => dispatch => (
    APIUtil.fetchGameRooms().then(gameRooms => dispatch(receiveAllGameRooms(gameRooms)))
)

