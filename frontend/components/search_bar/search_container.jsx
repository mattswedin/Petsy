import { connect } from "react-redux";
import Search from "./search"
import { fetchPets } from "../../actions/pet_actions";
import { fetchUsers } from "../../actions/session_actions";

const mapS = state => ({
    pets: state.entities.pets,
    users: state.entities.users
})

const mapD = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPets: () => dispatch(fetchPets())
})

export default connect(mapS, mapD)(Search)