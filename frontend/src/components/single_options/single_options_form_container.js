import {connect} from 'react-redux';
import SingleOptionsForm from './single_options_form';
import { setGameTime } from '../../actions/game_actions';

const mapStateToProps = state => {
    return {
        
    }
};


const mapDispatchToProps = dispatch => {
    return ({
        setGameTime: (time) => dispatch(setGameTime(time)) 
    });
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleOptionsForm)