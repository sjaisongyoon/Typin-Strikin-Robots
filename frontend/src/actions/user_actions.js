import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER"

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const fetchUsers = () => dispatch => (
    APIUtil.fetchUsers().then((users) => dispatch(receiveUsers(users)))
)

export const updateUser = userData => dispatch =>(
    APIUtil.updateUser(userData).then(user => dispatch(receiveUser(user)))
);

