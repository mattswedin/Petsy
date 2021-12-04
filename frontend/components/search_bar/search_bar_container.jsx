import { connect } from "react-redux";
import SearchBar from "./search_bar"
import { fetchPets } from '../../actions/pet_actions';

const mapS = state => ({

    pets: state.entities.pets
})

const mapD = dispatch => ({
    fetchPets: () => dispatch(fetchPets())
})

export default connect(mapS, mapD)(SearchBar)