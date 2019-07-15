import { connect } from 'react-redux';
import HeaderLanding from './header_landing';

const msp = (state, ownProps) => {
  return ({
    currentUser: state.session.user
  });
}

const mdp = (state, ownProps) => {
  return ({

  });
}


// export default connect(null, null)(HeaderLanding);
export default connect(msp, mdp)(HeaderLanding);
