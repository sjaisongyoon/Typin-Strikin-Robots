import { combineReducers } from 'redux';
import users from './users_reducer';
import leaderboards from './leaderboards_reducer';
import game from './games_reducer';
import gameRooms from './game_rooms_reducer';
import matches from './matches_reducer';

const entitiesReducer = combineReducers({
    users,
    leaderboards,
    game,
    gameRooms,
    matches
});

export default entitiesReducer;