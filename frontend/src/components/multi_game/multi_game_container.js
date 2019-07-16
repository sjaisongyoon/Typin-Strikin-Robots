import { connect } from 'react-redux';
import MultiGame from './multi_game';

const msp = state => {
  return ({
    currentUser: state.session.user,
  })
}

const mdp = dispatch => {
  return ({

  })
}

// export default connect(msp, mdp)(MultiGame);
export default connect(msp, mdp)(MultiGame);