import { connect } from 'react-redux';
import HeaderMenu from './header-menu';
import { openModal } from '../../actions/modal_actions';
import { fetchLeaderboards } from '../../actions/leaderboard_actions';
import { fetchUsers } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  return ({
    currentUser: state.session.user || {},
    leaderboards: state.entities.leaderboards,
    users: state.entities.users
  });
}

const mdp = dispatch => {
  return ({
    openModal: type => dispatch(openModal(type)),
    fetchLeaderboards: () => dispatch(fetchLeaderboards()),
    fetchUsers: () => dispatch(fetchUsers())
  });
}

export default connect(msp, mdp)(HeaderMenu);