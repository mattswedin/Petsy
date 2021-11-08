import {
    RECEIVE_ALL_PETS,
    RECEIVE_PET,
    REMOVE_PET,
} from '../actions/pet_actions';
import merge from 'lodash/merge';


const PetsReducer = (oldstate = {}, action) => {
    Object.freeze(oldstate)
    let nextState = Object.assign({}, oldstate)

    switch (action.type) {
        case RECEIVE_ALL_PETS:
            return action.pets;
        case RECEIVE_PET:
            nextState[action.pet.id] = action.pet;
            return nextState;
        case REMOVE_PET:
            delete nextState[action.petId]
            return nextState;
        default:
            return oldstate;
    }
}

export default PetsReducer;