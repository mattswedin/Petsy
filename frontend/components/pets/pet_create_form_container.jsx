import { connect } from 'react-redux';
import PetForm from './pet_form';
import { createPet } from '../../actions/pet_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';


const mapStateToProps = state => ({
    pet: {
        name: '',
        color: '',
        kind: '',
        size: '',
    }
});

const mapDispatchToProps = dispatch => ({
    action: pet => dispatch(createPet(pet)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal('createPet'))
});

export default connect(mapStateToProps, mapDispatchToProps)(PetForm);