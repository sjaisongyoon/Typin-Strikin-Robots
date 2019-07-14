import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup} from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return {
        formType: 'Sign Up',
        otherForm: 'Log In',
        otherRoute: 'login',
        message: 'Already a user?'
    }
}


const mapDispatchToProps = (dispatch) => ({
    formProcess: user => dispatch(signup(user))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm)