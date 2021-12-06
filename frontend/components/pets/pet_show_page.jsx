import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import ReviewsIndexContainer from "../reviews/reviews_index_container"
import FooterContainer from '../footer/footer_container';

const PetShowPage = ({ pet, fetchPet, fetchUsers, match, users, createPetpoint, fetchPetpoints, petpoints, currentUser, openModal}) => {
    
    useEffect(() => {
        fetchPet(match.params.petId)
        fetchPetpoints()
        fetchUsers()
    }, [])


    const petPointArr = Object.values(petpoints).filter( petpoint => pet.id === petpoint.pet_id)
    const userPetters = petPointArr.filter( petpoint => currentUser === petpoint.petter_id)




    const handleClick = () => {
        if (!pet.adoptable) {
            createPetpoint({pet_id: pet.id})
        } else {
            openModal({type: 'areYouSure', pet: pet})
        }
    }

    const handleAdd = () => {
        openModal({type: 'addToCart', pet: pet})
    }

    console.log(users)
    
    return(

        pet && users[pet.owner_id] ? (
        <div>
            
            <div className="pet-show-entire-container">
                <div className="petpoint-stats">
                    <h6>Given Pets:</h6>
                    <h1 className="petnum" >{userPetters.length}</h1>
                    <br />
                    <br />
                    <h6>Overall Pets:</h6>
                    <h1 className="petnum" >{petPointArr.length}</h1>
                </div>
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
                    <select className=" color-size-butts">
                        <option value={pet.color}>{pet.color}</option>
                    </select>
                    <br />
                    <br />
                     <h1>Pet Size</h1>
                    <select className=" color-size-butts" >
                        <option value={pet.size}>{pet.size}</option>
                    </select>
                    <div>
                        <br />
                        <br />
                            <button onClick={handleClick} className="adopt-button">{pet.adoptable ? "Adopt Now!" : "Pet Now!"}</button>
                        <br />
                        <br />
                            <button className="basket-button" onClick={handleAdd}>Add to Adoption Basket!</button>
                    </div>
                </div>
            
                
            </div>

            <FooterContainer />

        </div>
        ) : null
    )
}

export default PetShowPage