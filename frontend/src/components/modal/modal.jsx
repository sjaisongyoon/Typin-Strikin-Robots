import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderDropdownModalContainer from '../header/header_dropdown_modal_container';
import GameEndModalContainer from '../single_game/game_end_single_modal_container';

const Modal = ({ modal, closeModal }) => {
  if (!modal) return null;

  let component;
  switch (modal) {
    case 'menu-dropdown':
      component = <HeaderDropdownModalContainer />;
      break;
    case 'gameend-single-modal':
      component = <GameEndModalContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal__background" onClick={closeModal}>
      <div className="modal__child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
}

const msp = state => {
  return ({
    modal: state.ui.modal
  });
}

const mdp = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal())
  })
}

export default withRouter(connect(msp, mdp)(Modal));

