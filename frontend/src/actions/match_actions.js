import * as APIUtil from '../util/match_util';
export const RECEIVE_MATCHES = 'RECEIVE_MATCHES';
export const RECEIVE_MATCH = 'RECEIVE_MATCH';

 const receiveMatch = match => ({
     type: RECEIVE_MATCH,
     match
 });

const receiveMatches = matches => ({
    type: RECEIVE_MATCHES,
    matches
})

export const fetchMatches = () => dispatch => (
    APIUtil.fetchMatches().then( matches => dispatch(receiveMatches(matches)))
)

export const postMatch = (matchData) => dispatch => (
    APIUtil.postMatch(matchData).then( match => dispatch(receiveMatch(match)))
)