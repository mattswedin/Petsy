import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import ui_reducer from "./ui_reducer";
import petsReducer from "./pets_reducer";

const rootReducer = (combineReducers)({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
    ui: ui_reducer,
    pets: petsReducer
})

export default rootReducer