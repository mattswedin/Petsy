import { connect } from "react-redux";
import SearchBar from "./search_bar"

const mapS = state => ({

    pets: state.entities.pets
})

const mapD = dispatch => ({
})

export default connect(mapS, mapD)(SearchBar)