import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { fetchReviews } from "../../actions/review_actions";
import { fetchUsers } from "../../actions/session_actions";
import ReviewsIndex from "./reviews_index"

const mapS = state => ({
    session: state.session,
    reviews: state.entities.reviews,
    users: state.entities.users

})
const mapD = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchReviews: () => dispatch(fetchReviews()),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mapS, mapD)(ReviewsIndex)