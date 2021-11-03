import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modelbg" onClick={closeModal}>
      <div className="modelc" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapS = state => {
  return {
    modal: state.ui.modal
  };
};

const mapD = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapS, mapD)(Modal);
