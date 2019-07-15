import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup, login} from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up',
        otherForm: 'Log In',
        otherRoute: 'login',
        message: 'Already a user?',
        currentUser: state.session.user
    }
}


const mapDispatchToProps = (dispatch) => ({
    formProcess: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm)
