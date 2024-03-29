import {connect} from 'react-redux';
import MultiOptions from './multi_options';
import {createGameRoom, updateGameRoom, fetchGameRooms} from '../../actions/game_room_actions';
import {fetchPassage} from '../../actions/game_actions'

const mapStateToProps = (state) => {
    return {
      currentUser: state.session.user,
      gameRooms: Object.values(state.entities.gameRooms),
      activeGameRoom: state.ui.activeGameRoom,
      users: state.entities.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createGameRoom: gameRoomData => dispatch(createGameRoom(gameRoomData)),
        updateGameRoom: gameRoomData => dispatch(updateGameRoom(gameRoomData)),
        fetchGameRooms: () => dispatch(fetchGameRooms()),
    });
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MultiOptions);
