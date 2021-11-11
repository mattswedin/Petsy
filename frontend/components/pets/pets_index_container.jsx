import { connect } from 'react-redux';
import PetIndex from './pets_index';
import { fetchUsers } from '../../actions/session_actions';
import { fetchPets, deletePet } from '../../actions/pet_actions';

const mapStateToProps = state => {
    return{
    pets: state.entities.pets,
    users: state.entities.users

    }
};

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPets: () => dispatch(fetchPets()),
    deletePet: petId => dispatch(deletePet(petId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PetIndex)