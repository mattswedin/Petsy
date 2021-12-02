import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import reviews_index_container from "./reviews_index_container";


const ReviewsIndex = ({ reviews, pet, fetchReviews, fetchUsers, users, openModal, session }) => {

     useEffect(() => {
        fetchReviews()
        fetchUsers()
    }, [])

    const petReviews = Object.values(reviews).filter(review => pet.id === review.pet_id)

    if (pet.owner_id !== session.id) {

        return petReviews[0] ? (
            <div>
                <h1>{petReviews.length} pet { petReviews.length === 1 ? "review" : "reviews"}</h1>
                {
                petReviews.map(review => 
                    <div>
                        <Link to={`/users/${review.author_id}`}> {users[review.author_id].username}</Link>
                        <h1>{review.ranking}</h1>
                        <p>{review.body}</p>
                    </div>
                )   
                    
                }
                </div>
                
            ) : (
                <div>
                    <h1>No reviews for this pet!</h1>
                </div>
                )
    } else {

                return petReviews[0] ? (
            <div>
                <h1>{petReviews.length} pet { petReviews.length === 1 ? "review" : "reviews"}</h1>
                <button onClick={() => openModal({type: "review", pet: pet })}>Give {pet.name} a review!</button>
                {
                petReviews.map(review => 
                    <div>
                        <Link to={`/users/${review.author_id}`}> {users[review.author_id].username}</Link>
                        <h1>{review.ranking}</h1>
                        <p>{review.body}</p>
                    </div>
                )   
                    
                }
                </div>
                
            ) : (
                <div>
                    <h1>No reviews for {pet.name}!</h1>
                    <button onClick={() => openModal({type: "review", pet: pet })}>Be the first to review {pet.name}!</button>
                </div>
                )
                
    }
}

export default ReviewsIndex;