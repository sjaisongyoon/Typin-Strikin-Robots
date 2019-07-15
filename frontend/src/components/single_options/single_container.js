import {connect} from 'react-redux';
import Single from './single';

const mapStateToProps = state => {
    return {
        user: state.session.user,
        // leaders: state.leaders
    }
}


const mapDispatchToProps = dispatch => {
    return({
        
    });
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Single);