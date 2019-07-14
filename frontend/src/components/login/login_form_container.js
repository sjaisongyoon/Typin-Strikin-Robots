import {connect} from 'react-redux';
import LoginForm from './login_form';
// import {login} from 'action';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'Log In'
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
)(LoginForm)
