import { combineReducers } from "redux";
import categoriesReducer from "./category_reducer"
import usersReducer from "./users_reducer";
import petsReducer from "./pets_reducer";
import reviewsReducer from "./reviews_reducer";
import petpointReducer from "./petpoint_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    category: categoriesReducer,
    pets: petsReducer,
    reviews: reviewsReducer,
    petpoints: petpointReducer

});

export default entitiesReducer;