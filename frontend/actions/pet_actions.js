import * as PetApiUtil from '../util/pet_api_util';
export const RECEIVE_ALL_PETS = "RECEIVE_ALL_PETS"
export const RECEIVE_PET = "RECEIVE_PET"
export const REMOVE_PET = "REMOVE_PET"

const receivePets = pets => {
    return {
        type: RECEIVE_ALL_PETS,
        pets
    }
}

const receivePet = pet => {
    return {
        type: RECEIVE_PET,
        pet
    }
}

const removePet = petId => {
    return {
        type: REMOVE_PET,
        petId
    }
}

export const fetchPets = () => dispatch => {
    return PetApiUtil.fetchPets()
        .then(pets => dispatch(receivePets(pets)))
}

export const fetchPet = petId => dispatch => {
    return PetApiUtil.fetchPet(petId)
        .then(petId => dispatch(receivePet(petId)))
}

export const createPet = pet => dispatch => {
    return PetApiUtil.createPet(pet)
        .then(pet => dispatch(receivePet(pet))
        )
}

export const updatePet = pet => dispatch => {
    return PetApiUtil.updatePet(pet)
        .then(pet => dispatch(receivePet(pet))
        )
}

export const deletePet = petId => dispatch => {
    return PetApiUtil.deletePet(petId)
        .then(() => dispatch(removePet(petId))
        )
}
