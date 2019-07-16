import {connect} from 'react-redux';
import MultiOptions from './multi_options';
import { createGameRoom, updateGameRoom } from '../../actions/game_actions';


const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.user,
        gameRoom: state.entities.games.gameRoom || null
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createGameRoom: gameRoomData => dispatch(createGameRoom(gameRoomData)),
        updateGameRoom: gameRoomData => dispatch(updateGameRoom(gameRoomData))
    });
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MultiOptions);
