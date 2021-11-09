import { connect } from 'react-redux';
import { fetchPet, updatePet } from '../../actions/pet_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditPetForm from './pet_form_edit';

const mapStateToProps = (state, ownProps) => ({
    pet: state.entities.pets[ownProps.match.params.petId]
});

const mapDispatchToProps = dispatch => ({
    action: pet => dispatch(updatePet(pet)),
    fetchPet: petId => dispatch(fetchPet(petId)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal('updatePet'))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPetForm)