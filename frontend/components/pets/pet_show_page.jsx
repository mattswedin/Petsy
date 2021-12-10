import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import ReviewsIndexContainer from "../reviews/reviews_index_container"
import FooterContainer from '../footer/footer_container';
import { FaStar, FaStarHalf, FaCat } from "react-icons/fa";
import { GiPawHeart, GiDogHouse } from "react-icons/gi";

const PetShowPage = ({ fetchCartItems, reviews, fetchReviews, pet, fetchPet, fetchUsers, match, users, createPetpoint, fetchPetpoints, petpoints, currentUser, openModal, createCart, cart_items }) => {

    useEffect(() => {
        fetchPet(match.params.petId)
    }, [])
    
    useEffect(() => {
        fetchPetpoints()
        fetchUsers()
        fetchReviews() 
        fetchCartItems()
         

    }, [])

    const petPointArr = Object.values(petpoints).filter( petpoint => pet.id === petpoint.pet_id)
    const userPetters = petPointArr.filter( petpoint => currentUser === petpoint.petter_id)
    let petReviews;
    if (pet) {petReviews = Object.values(reviews).filter(review => pet.id === review.pet_id)} else {
        petReviews = []
    }
    

    let reviewSum = 0;
    petReviews.map(review => reviewSum += review.ranking)
    let reviewScore;
    if (reviewSum === 0){reviewScore = 5} else {reviewScore = reviewSum / petReviews.length}
    let halfStar = false
    if ( reviewScore % 1 === 0 ) { halfStar = false } else { halfStar = true }


    const handleClick = () => {
        if (!pet.adoptable) {
            createPetpoint({pet_id: pet.id})
        } else {
            openModal({type: 'areYouSure', pet: pet})
        }
    }

    const handleAdd = () => {
        if (users[currentUser].current_order === 0){createCart()}
        openModal({type: 'addToCart', pet: pet})
    }

    console.log(users)
    
    return(

        pet && users[pet.owner_id] ? (
        <div>
            <div className="pet-show-entire-container">
                <div className="pet-left-container">
                    <div className="top-left">
                    <div className="petpoint-stats">
                        <GiPawHeart size={80} />
                        <br />
                        <br />
                        <br />
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
                    </div>
                    </div>
                    <div className="reviews">
                    <ReviewsIndexContainer pet={pet} />
                    </div>
                </div>
                
                <div className="pet-show-info-container">
                    <div className="owner" >
                        <h1>{pet.adoptable ? "Previous Owner: " : "Owner: "}</h1><Link className="pet-link" to={`/users/${pet.owner_id}`}> {users[pet.owner_id].username}</Link>
                    </div>
                    <div className="pet-top-review-stars">
                        <div>
                            <div>
                                {
                                    [...Array(Math.floor(reviewScore))].map( (stars, i) => (
                                        <FaStar key={i} className="star" color={"black"} size={10} />
                                        ))
                                        
                                }
                                { halfStar ? <FaStarHalf className="star" color={"black"} size={10} /> : null }
                            </div>
                        </div>
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
                    <div className="icons">
                        <br />
                        <br />
                            <div className="icon-div" >
                                <GiDogHouse size={40} className="icon-big"/>
                                <h1 className="basket" >Only 1 in this world and they're in {Object.values(cart_items).filter((item, i) => { 
                                return (item.pet_id === pet.id)}).length} people's baskets.</h1>
                            </div>
                        <br />
                        <br />
                            <div className="icon-div" >
                                <FaCat size={40} className="icon-big"/>
                                <h1 className="basket" >{ !pet.adoptable ? `${pet.name} is not available for adoption.` : `${pet.name} is available for immediate adoption and snuggles!`}</h1>
                            </div>
                        <br />
                        <br />
                        
                    </div>
                </div>
            
                
            </div>
            

            <FooterContainer />

        </div>
        ) : null
    )
}

export default PetShowPage