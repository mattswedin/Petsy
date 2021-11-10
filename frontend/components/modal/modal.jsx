import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import PetCreateFormContainer from '../pets/pet_create_form_container';
import PetEditFormContainer from '../pets/pet_edit_form_container';




function Modal({modal, closeModal}) {
  // const {petId} = modal

  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'createPet':
      component = <PetCreateFormContainer />;
      break;
    case 'updatePet':
      component = <PetEditFormContainer />;
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
