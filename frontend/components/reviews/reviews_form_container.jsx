import { connect } from "react-redux"
import { closeModal } from "../../actions/modal_actions"
import { createReview } from "../../actions/review_actions"
import ReviewsForm from "./reviews_form"

const mapS = state => ({

    pet: state.ui.modal.pet
    
})

const mapD = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapS, mapD)(ReviewsForm)