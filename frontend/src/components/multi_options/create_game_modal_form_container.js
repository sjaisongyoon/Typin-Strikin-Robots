import {connect} from 'react-router-dom';
import CreateGameModalForm from './create_game_modal_form';
import {createGameRoom} from '../../actions/game_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.user
});

const mapDispatchToProps = (dispatch) => ({
    createGameRoom: gameRoomData => dispatch(createGameRoom(gameRoomData)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateGameModalForm)