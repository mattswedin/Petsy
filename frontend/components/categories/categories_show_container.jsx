import { connect } from "react-redux";
import { fetchCategory } from "../../actions/category_actions";
import { fetchPets } from "../../actions/pet_actions";
import { fetchUsers } from "../../actions/session_actions";
import CategoriesShow from "./categories_show"

const mapS = (state, ownProps) => ({
    
    category: state.entities.category[ownProps.match.params.categoryId],
    pets: state.entities.pets,
    users: state.entities.users
})

const mapD = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPets: () => dispatch(fetchPets()),
    fetchCategory: id => dispatch(fetchCategory(id))
})

export default connect(mapS, mapD)(CategoriesShow)