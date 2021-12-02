import { combineReducers } from "redux";
import categoryReducer from "./category_reducer"
import usersReducer from "./users_reducer";
import petsReducer from "./pets_reducer";
import reviewsReducer from "./reviews_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    category: categoryReducer,
    pets: petsReducer,
    reviews: reviewsReducer

});

export default entitiesReducer;