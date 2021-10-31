import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER
} from "./actions/session_actions.js"

const sessionErrorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    const newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            newState[action.errors] = action.errors
            return newState
        case RECEIVE_CURRENT_USER:
            delete newState[action.errors]
            return newState

    
        default:
            return oldState;
    }
}

export default sessionErrorsReducer;