import {connect} from 'react-redux';
import GameSelect from './game_select';

const mapStateToProps = state => {
    return {
        user: state.session.user
    }
}


const mapDispatchToProps = dispatch => ({

})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameSelect)