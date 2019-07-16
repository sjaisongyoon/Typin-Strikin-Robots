import axios from 'axios';

export const createGameRoom =  gameRoomData => (
    axios.post('/api/multiplayerGameRooms', gameRoomData)
)

export const deleteGameRoom = gameRoomId => (
    axios.delete(`/api/multiplayerGameRooms/${gameRoomId}`)
)

export const updateGameRoom = gameRoomData => (
    axios.patch(`/api/multiplayerGameRooms/${gameRoomData.id}`, gameRoomData)
)