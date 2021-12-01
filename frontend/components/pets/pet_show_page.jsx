import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const PetShowPage = ({ pet, fetchPet, match, users }) => {
    
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
                <div className="owner" >
                    <h1>{pet.adoptable ? "Previous Owner: " : "Owner: "}</h1><Link to={`/users/${pet.owner_id}`}> {users[pet.owner_id].username}</Link>
                </div>
                <h1 className="title">{pet.name}, the { pet.category === "Sheep" || pet.category === "Fish" ? pet.category : pet.category.slice(0, -1)}</h1>
                <h1 className="price" >{pet.adoptable ?  "Available to Adopt!" : "Not up for Adoption"}</h1>
                <h1>{pet.color}</h1>
                <h1>{pet.size}</h1>
            </div>
        </div>
        ) : null
    )
}

export default PetShowPage