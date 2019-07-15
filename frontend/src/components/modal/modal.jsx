import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const Modal = ({ modal, closeModal }) => {
  if (!modal) return null;

  let component;
  switch (modal) {
    case 'login':
      // component = <LoginFormContainer />;
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

export default connect(msp, mdp)(Modal);

