import axios from 'axios';

export const fetchMatches = (userId) => (
    axios.get(`/api/matches/user/${userId}`)
)

export const postMatch = (matchData) => (
    axios.post('/api/matches', matchData)

)
