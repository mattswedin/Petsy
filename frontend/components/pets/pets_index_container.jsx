import { connect } from 'react-redux';
import PetIndex from './post_index';
import { fetchPets, deletePet } from '../../actions/pet_actions';

const mapStateToProps = state => ({
    pets: Object.values(state.entities.pets)
});

const mapDispatchToProps = dispatch => ({
    fetchPets: () => dispatch(fetchPets()),
    deletePet: petId => dispatch(deletePet(petId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PetIndex)