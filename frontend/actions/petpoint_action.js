import * as PetpointApiUtil from '../util/petpoint_api_util';
export const RECEIVE_ALL_PETPOINTS = "RECEIVE_ALL_PETPOINTS"
export const RECEIVE_PETPOINT = "RECEIVE_PETPOINT"

const receivePetpoints = petpoints => ({
    type: RECEIVE_ALL_PETPOINTS,
    petpoints
})

const receivePetpoint = petpoint => ({
    type: RECEIVE_PETPOINT,
    petpoint
})

export const fetchPetpoints = () => dispatch => {
    return PetpointApiUtil.fetchPetpoints()
        .then(petpoints => dispatch(receivePetpoints(petpoints)))
}

export const createPetpoint = petpoint => dispatch => {
    return PetpointApiUtil.createPetpoint(petpoint)
        .then(petpoint => dispatch(receivePetpoint(petpoint)))
}