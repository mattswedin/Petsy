import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from "./reducers/session_reducer.js"

const sessionReducer = (oldState, action) => {
    Object.freeze(oldState)
    const newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.currentUser.id] = action.currentUser
            return newState
        case LOGOUT_CURRENT_USER:
            newState[action.currentUser.id] = null
        default:
            return oldState;
    }
}

export default sessionReducer;
