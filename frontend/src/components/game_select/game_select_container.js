import {connect} from 'react-redux';
import GameSelect from './game_select';
import {fetchGameRooms} from '../../actions/game_room_actions';

const mapStateToProps = state => {
    return {
        user: state.session.user
    }
}


const mapDispatchToProps = dispatch => ({
    fetchGameRooms: () => dispatch(fetchGameRooms())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameSelect)