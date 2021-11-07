import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { fetchCategories } from '../../actions/category_actions';



const mapStateToProps = (state) => {

    const { session, entities: { users } } = state

    return {
        
        currentUser: users[session.id],
        categories: state.entities.category
    
    }

};

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex)