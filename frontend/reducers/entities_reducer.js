import { combineReducers } from "redux";
import categoryReducer from "./category_reducer"
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    category: categoryReducer
});

export default entitiesReducer;