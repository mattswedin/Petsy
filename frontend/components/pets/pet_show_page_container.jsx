import { connect } from "react-redux";
import PetShowPage from "./pet_show_page"
import { fetchPet, updatePet } from "./../../actions/pet_actions"
import { fetchUsers } from "../../actions/session_actions";
import { createPetpoint, fetchPetpoints } from "../../actions/petpoint_action";
import { openModal } from "../../actions/modal_actions";
import { createCart } from "../../actions/cart_actions";
import { fetchReviews } from "../../actions/review_actions";
import { fetchCartItems } from "../../actions/cart_items_actions";

const mapS = (state, ownProps) => ({
     pet: state.entities.pets[ownProps.match.params.petId],
     users: state.entities.users,
     petpoints: state.entities.petpoints,
     currentUser: state.session.id,
     reviews: state.entities.reviews,
     cart_items: state.entities.cart_items
})

const mapD = dispatch => ({

    fetchCartItems: () => dispatch(fetchCartItems()),
    fetchReviews: () => dispatch(fetchReviews()),
    createCart: () => dispatch(createCart()),
    openModal: (modal) => dispatch(openModal(modal)),
    updatePet: (pet) => dispatch(updatePet(pet)),
    createPetpoint: (petpoint) => dispatch(createPetpoint(petpoint)),
    fetchPetpoints: () => dispatch(fetchPetpoints()),
    fetchPet: (petId) => dispatch(fetchPet(petId)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapS, mapD)(PetShowPage)