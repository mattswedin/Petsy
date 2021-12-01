import { connect } from "react-redux";
import { fetchPets } from "../../actions/pet_actions";
import OurPicks from "./our_picks";

const mapS = state => {
    return {
        pets: state.entities.pets
    }     
}

const mapD = dispatch => ({
    fetchpets: () => dispatch(fetchPets())
})

export default connect(mapS, mapD)(OurPicks)