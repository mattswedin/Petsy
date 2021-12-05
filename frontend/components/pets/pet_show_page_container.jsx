import { connect } from "react-redux";
import PetShowPage from "./pet_show_page"
import { fetchPet, updatePet } from "./../../actions/pet_actions"
import { fetchUsers } from "../../actions/session_actions";
import { createPetpoint, fetchPetpoints } from "../../actions/petpoint_action";

const mapS = (state, ownProps) => ({
     pet: state.entities.pets[ownProps.match.params.petId],
     users: state.entities.users,
     petpoints: state.entities.petpoints,
     currentUser: state.session.id
})

const mapD = dispatch => ({
    
    updatePet: (pet) => dispatch(updatePet(pet)),
    createPetpoint: (petpoint) => dispatch(createPetpoint(petpoint)),
    fetchPetpoints: () => dispatch(fetchPetpoints()),
    fetchPet: (petId) => dispatch(fetchPet(petId)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapS, mapD)(PetShowPage)