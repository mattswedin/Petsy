import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import { updatePet } from "../../actions/pet_actions"
import AreYouSure from './are_you_sure'

const mapS = state => ({
    pet: state.ui.modal.pet
})

const mapD = dispatch => ({
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
    updatePet: (pet) => dispatch(updatePet(pet))
    
})

export default connect(mapS, mapD)(AreYouSure)
