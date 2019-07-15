import axios from 'axios';

export const fetchUsers = () => {
    return axios.get('/api/users')
}

export const updateUser = (userData) => {
    return axios.patch('/api/users/update', userData)
}