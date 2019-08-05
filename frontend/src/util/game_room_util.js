import axios from 'axios';

export const createGameRoom =  gameRoomData => (
    axios.post('/api/multiplayerGameRooms', gameRoomData)
)

export const deleteGameRoom = deleteData => (
    axios.delete(`/api/multiplayerGameRooms/${deleteData.gameRoomId}`, {data:deleteData})
)

export const updateGameRoom = gameRoomData => (
    axios.patch(`/api/multiplayerGameRooms/${gameRoomData.id}`, gameRoomData)
)

export const fetchActiveGameRoom = (gameRoomId) => (
    axios.get(`/api/multiplayerGameRooms/${gameRoomId}`)
)

export const fetchGameRooms = () => (
    axios.get('/api/multiplayerGameRooms')
)