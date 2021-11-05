import {
    RECEIVE_ALL_CATEGORIES,
    RECEIVE_CATEGORY
} from '../actions/category_actions';


const CategoriesReducer = (oldstate = {}, action) => {
    Object.freeze(oldstate)
    let nextState = Object.assign({}, oldstate)

    switch (action.type) {
        case RECEIVE_ALL_CATEGORIES:
            return nextState = action.categories;
        case RECEIVE_CATEGORY:
            nextState[action.category.id] = action.category;
            return nextState;
        default:
            return oldstate;
    }
}

export default CategoriesReducer;