import { connect } from 'react-redux';
import HeaderGameplay from './header_gameplay';

const msp = (state, ownProps) => {
  return ({
    currentUser: state.session.user
  });
}

const mdp = (state, ownProps) => {
  return ({

  });
}


// export default connect(null, null)(HeaderGameplay);
export default connect(msp, mdp)(HeaderGameplay);
