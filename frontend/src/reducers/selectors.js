import { stat } from "fs";

export const selectUser = (state, userId) => {
    return state.entities.users[userId]
}

export const getAllMultiScores = (state) => (
    state.entities.users
)