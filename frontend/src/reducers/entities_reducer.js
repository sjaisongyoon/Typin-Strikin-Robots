import { combineReducers } from 'redux';
import users from './users_reducer';
import leaderboards from './leaderboards_reducer';
import game from './games_reducer'

const entitiesReducer = combineReducers({
    users,
    leaderboards,
    game
});

export default entitiesReducer;