import { RECEIVE_CURRENT_USER } from "./reducers/session_reducer.js"

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    const newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
          newState[action.user.id] = action.user
    
        default:
            return oldState;
    }
}

export default usersReducer;