import { connect } from 'react-redux';
import GameStartMultiModal from './game_start_multi_modal';
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

export default connect(msp, mdp)(GameStartMultiModal);
