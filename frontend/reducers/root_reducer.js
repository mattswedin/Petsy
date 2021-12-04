import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import ui_reducer from "./ui_reducer";
import petsReducer from "./pets_reducer";
import categoriesReducer from "./category_reducer";
import usersReducer from "./users_reducer";


const rootReducer = (combineReducers)({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
    ui: ui_reducer,
    categories: categoriesReducer,
    users: usersReducer
})

export default rootReducer