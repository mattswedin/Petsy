import { connect } from "react-redux";
import { fetchCategories } from "../../actions/category_actions";
import CategoryNav from "./category_nav"

const mapS = state => {
    return {categories: state.entities.category}
}

const mapD = dispatch => ({
    fetchCategories: cats => dispatch(fetchCategories(cats))
})

export default connect(mapS, mapD)(CategoryNav)