import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import ReviewsIndexContainer from "../reviews/reviews_index_container"
import FooterContainer from '../footer/footer_container';

const PetShowPage = ({ pet, fetchPet, fetchUsers, match, users }) => {
    
    useEffect(() => {
        fetchUsers()
        fetchPet(match.params.petId)
    }, [])

    
    return(

        pet ? (
        <div>
            <div className="pet-show-entire-container">
                <div className="picture-container">
                    <div className="pet-profile-pic-show" >
                        <img src={pet.photo} />
                    </div>
                    <div className="reviews">
                        <ReviewsIndexContainer pet={pet} />
                    </div>
                </div>
                <div className="pet-show-info-container">
                    <div className="owner" >
                        <h1>{pet.adoptable ? "Previous Owner: " : "Owner: "}</h1><Link to={`/users/${pet.owner_id}`}> {users[pet.owner_id].username}</Link>
                    </div>
                    <h1 className="title">{pet.name}, the { pet.category === "Sheep" || pet.category === "Fish" ? pet.category : pet.category.slice(0, -1)}</h1>
                    <h1 className="price" >{pet.adoptable ?  "Available to Adopt!" : "Not up for Adoption"}</h1>
                    <br />
                    <h6 className="precious">{pet.adoptable ? `*${pet.name} is a precious creature and should be treated as such. Please be kind to your pets and give them lots of love!` : `*${pet.name} is a precious creature and is loved very much by their owner, ${users[pet.owner_id].username}. Please be kind to your pets and give them lots of love!`}</h6>
                    <br />
                    <h1>Pet Color</h1>
                    <select>
                        <option value={pet.color}>{pet.color}</option>
                    </select>
                    <br />
                    <br />
                     <h1>Pet Size</h1>
                    <select>
                        <option value={pet.size}>{pet.size}</option>
                    </select>
                </div>
            
                
            </div>

            <FooterContainer />

        </div>
        ) : null
    )
}

export default PetShowPage