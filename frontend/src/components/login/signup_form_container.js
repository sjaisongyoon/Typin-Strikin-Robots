import {connect} from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
    return {
        errors: errors.session,
        formType: 'Sign Up'
    }
}


const mapDispatchToProps = (dispatch) => ({
    formProcess: user => dispatch(signup(user))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm)