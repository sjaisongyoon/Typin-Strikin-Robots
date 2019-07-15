import axios from 'axios';

export const fetchLeaderboards = () => {
    return axios.get('/api/users/leaderboard')
}
