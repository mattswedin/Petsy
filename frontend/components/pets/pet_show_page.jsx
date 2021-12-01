import React, {useEffect} from "react";

const PetShowPage = ({ pet, fetchPet, match }) => {
    
    useEffect(() => {
        fetchPet(match.params.petId)
    }, [])

    
    return(

        pet ? (
        <div className="pet-show-entire-container">
            <div>
                <img className="pet-profile-pic-show" src={pet.photo} />
            </div>
            <div className="pet-show-info-container">
                <h1 className="title">{pet.name}, the { pet.category === "Sheep" ? pet.category : pet.category.slice(0, -1)}</h1>
                <h1 className="price" >{pet.adoptable ?  "Available to Adopt!" : "Not up for Adoption"}</h1>
                <h1>{pet.color}</h1>
                <h1>{pet.size}</h1>
            </div>
        </div>
        ) : null
    )
}

export default PetShowPage