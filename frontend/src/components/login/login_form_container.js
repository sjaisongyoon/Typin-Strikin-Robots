import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login} from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'Log In',
        otherForm: 'Sign Up',
        otherRoute: 'signup',
        message: 'Not a user?'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        formProcess: user => dispatch(login(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm)
