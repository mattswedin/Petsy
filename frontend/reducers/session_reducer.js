import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from "../actions/session_actions.js"

const sessionReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    const newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.user.id] = action.user
            return newState
        case LOGOUT_CURRENT_USER:
            newState[action.user.id] = null
            return newState
        default:
            return oldState;
    }
}

export default sessionReducer;

// import {
//     RECEIVE_CURRENT_USER,
//     LOGOUT_CURRENT_USER,
// } from '../actions/session_actions';

// const _nullUser = Object.freeze({
//     id: null
// });

// const sessionReducer = (state = _nullUser, action) => {
//     Object.freeze(state);
//     switch (action.type) {
//         case RECEIVE_CURRENT_USER:
//             return { id: action.currentUser.id };
//         case LOGOUT_CURRENT_USER:
//             return _nullUser;
//         default:
//             return state;
//     }
// };

// export default sessionReducer;
