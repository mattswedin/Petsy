import React from 'react';
import { connect } from 'react-redux';
import { fetchPet, updatePet } from '../../actions/pet_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditPetForm from './pet_form_edit';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
    return{
    pet: state.ui.modal.pet}
};

const mapDispatchToProps = dispatch => ({
    action: pet => dispatch(updatePet(pet)),
    fetchPet: petId => dispatch(fetchPet(petId)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal('updatePet'))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPetForm))