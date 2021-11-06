import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { fetchCategories } from '../../actions/category_actions';



const mapStateToProps = ({ session, entities: { users } }) => ({
    categories: {
        title: "Goats",
        body: "",
    },
    currentUser: users[session.id]
    

});

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex)