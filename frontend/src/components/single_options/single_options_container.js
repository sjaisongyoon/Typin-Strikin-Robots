import {connect} from 'react-redux';
import SingleOptions from './single_options';

const mapStateToProps = state => {
    return {
        user: state.session.user,
    }
}


const mapDispatchToProps = dispatch => {
    return({
        
    });
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleOptions);