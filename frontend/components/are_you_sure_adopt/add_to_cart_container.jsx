import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import { updatePet,fetchPet } from "../../actions/pet_actions"
import { fetchUsers } from "../../actions/session_actions";
import AddToCart from './add_to_cart'

const mapS = state => ({
    pet: state.ui.modal.pet,
    currentuser: state.session.id,
    users: state.entities.users
})

const mapD = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPet: (id) => dispatch(fetchPet(id)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
    updatePet: (pet) => dispatch(updatePet(pet))
})

export default connect(mapS, mapD)(AddToCart)