import {RECEIVE_PASSAGE, 
        SET_GAME_TIME, 
        UPDATE_SINGLE_WPM,
        UPDATE_MULTI_WPM,} from '../actions/game_actions';
import {randomPassage} from '../actions/game_actions';

let defaultPassage = `In cryptography, a salt is random data that is used as an additional input to a one-way function that hashes data, a password or passphrase. Salts are used to safeguard passwords in storage. Historically a password was stored in plaintext on a system, but over time additional safeguards developed to protect a user's password against being read from the system. A salt is one of those methods. A new salt is randomly generated for each password. The salt and the password are concatenated and processed with a cryptographic hash function, and the resulting output is stored with the salt in a database. Hashing allows for later authentication without keeping and therefore risking the plaintext password in the event that the authentication data store is compromised.`;

let defaultState = {
    // passage: defaultPassage,
    time: 30
}

const gamesReducer = (state = defaultState, action) =>{
    Object.freeze(state);
    switch (action.type) {
        // case RECEIVE_PASSAGE:
        //     return Object.assign({}, state, {passage: action.passage});
        case SET_GAME_TIME:
            return Object.assign({}, state, {time: action.time});
        case UPDATE_SINGLE_WPM:
            return Object.assign({}, state, { singleSessionWpm: action.wpm});
        case UPDATE_MULTI_WPM:
            return Object.assign({}, state, { myOwnWPM: action.myOwnWPM, enemyWPM: action.enemyWPM, });
        default:
            return state;
    }
} 

export default gamesReducer;