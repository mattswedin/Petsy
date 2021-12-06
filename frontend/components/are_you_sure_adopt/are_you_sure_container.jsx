import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import { updatePet,fetchPet } from "../../actions/pet_actions"
import AreYouSure from './are_you_sure'

const mapS = state => ({
    pet: state.ui.modal.pet,
    currentuser: state.session.id
})

const mapD = dispatch => ({
    fetchPet: (id) => dispatch(fetchPet(id)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
    updatePet: (pet) => dispatch(updatePet(pet))
    
})

export default connect(mapS, mapD)(AreYouSure)
