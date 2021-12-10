import {
    RECEIVE_ALL_PETPOINTS,
    RECEIVE_PETPOINT
} from '../actions/petpoint_action';


const PetpointReducer = (oldstate = {}, action) => {
    Object.freeze(oldstate)
    let nextState = Object.assign({}, oldstate)

    switch (action.type) {
        case RECEIVE_ALL_PETPOINTS:
            return nextState = action.petpoints;
        case RECEIVE_PETPOINT:
            nextState[action.petpoint.id] = action.petpoint;
            return nextState;
        default:
            return oldstate;
    }
}

export default PetpointReducer;