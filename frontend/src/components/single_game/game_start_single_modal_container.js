import { connect } from 'react-redux';
import GameStartSingleModal from './game_start_single_modal';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return ({

  })
}

const mdp = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal()),
  });
}

export default connect(msp, mdp)(GameStartSingleModal);
