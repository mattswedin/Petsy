import { connect } from "react-redux";
import PetShowPage from "./pet_show_page"
import { fetchPet } from "./../../actions/pet_actions"
import { fetchUsers } from "../../actions/session_actions";

const mapS = (state, ownProps) => ({
     pet: state.entities.pets[ownProps.match.params.petId],
     users: state.entities.users
})

const mapD = dispatch => ({
    fetchPet: (petId) => dispatch(fetchPet(petId)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapS, mapD)(PetShowPage)