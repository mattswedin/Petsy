import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalf, FaRegUserCircle } from "react-icons/fa";


const ReviewsIndex = ({ reviews, pet, fetchReviews, fetchUsers, users, openModal, session }) => {

     useEffect(() => {
        fetchReviews()
        fetchUsers()
    }, [])

    const timestamp = Date.now();

    const theDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);

    const petReviews = Object.values(reviews).filter(review => pet.id === review.pet_id)
    let reviewSum = 0;
    petReviews.map(review => reviewSum += review.ranking)
     
    let reviewScore = reviewSum / petReviews.length
    let halfStar = false
    if (reviewScore % 1 === 0) { halfStar = false } else { halfStar = true}



    if (pet.owner_id !== session.id) {

        return petReviews[0] ? (
            <div>
                <div className="reviews-title-div" >
                    <h1 className="review-title" >{petReviews.length} pet { petReviews.length === 1 ? "review" : "reviews"}</h1>
                    <div>
                        <div>
                            {
                                [...Array(Math.floor(reviewScore))].map( (stars, i) => (
                                    <FaStar key={i} className="star" color={"black"} size={25} />
                                    ))    
                            }
                            { halfStar ? <FaStarHalf className="star" color={"black"} size={25} /> : null }
                        </div>
                    </div>
                </div>
                
                {
                petReviews.map((review, i) =>
                <div className="review-casing">
                    <FaRegUserCircle size={35}/>
                    <div key={i} className="reviewer-div">
                        <div className="username-date">
                            <Link  className="username" to={`/users/${review.author_id}`}> {users[review.author_id].username}</Link>
                            <h1 className="dayte" >{review.created_at.slice(0, 10)}</h1>
                        </div>
                        <div>
                            {
                                [...Array(review.ranking)].map((star, i) => {
                                    
                                    

                                    return (
                                    <FaStar key={i} className="star" color={"black"} size={25} />
                                    )
                                 
                                    
                                
                                })
                            }
                        </div>
                        <div className="review-body-div">
                        <p className="review-body" >{review.body}</p>
                        </div>
                    </div>
                </div>    
                )   
                    
                }
                </div>
                
            ) : (
                <div>
                    <div className="reviews-title-div" >
                    <h1 className="review-title" >No reviews for this pet!</h1>
                        <div>
                            {
                                [...Array(5)].map((star, i) => {
                                    
                                    

                                    return (
                                    <FaStar key={i} className="star" color={"black"} size={25} />
                                    )
                                 
                                    
                                
                                })
                            }
                        </div>
                    </div>
                </div>
                )
    } else {

                return petReviews[0] ? (
            <div>
                <div className="reviews-title-div" >
                    <h1 className="review-title" >{petReviews.length} pet { petReviews.length === 1 ? "review" : "reviews"}</h1>
                        <div>
                            <div>
                                {
                                    [...Array(Math.floor(reviewScore))].map( (stars, i) => (
                                        <FaStar key={i} className="star" color={"black"} size={25} />
                                        ))
                                        
                                }
                                { halfStar ? <FaStarHalf className="star" color={"black"} size={25} /> : null }
                            </div>
                        </div>
                        <div className="review-button" >
                            <h1  className="button-title" onClick={() => openModal({type: "review", pet: pet })}>Give {pet.name} a review!</h1>
                        </div>
                </div>

                
                    {
                        
                    petReviews.map((review, i) =>
                    <div className="review-casing">
                        <FaRegUserCircle size={35}/>
                        <div key={i} className="reviewer-div" >
                            <div className="username-date">
                            <Link className="username" to={`/users/${review.author_id}`}> {users[review.author_id].username}</Link>
                            <h1 className="dayte" >{review.created_at.slice(0,10)}</h1>
                            </div>
                            <div>
                                    {
                                    [...Array(review.ranking)].map((star, i) => {
                                        
                                        

                                        return (
                                        <FaStar key={i} className="star" color={"black"} size={25} />
                                        )
                                    
                                        
                                    
                                    })
                                }
                            </div>
                            <div className="review-body-div">
                                <p className="review-body" >{review.body}</p>
                            </div>
                        </div>
                    </div>
                    )   
                        
                    }
                
                </div>
                
            ) : (
                <div className="reviews-title-div" >
                    <h1 className="review-title">No reviews for {pet.name}!</h1>
                    <div>
                            {
                                [...Array(5)].map((star, i) => {
                                    
                                    

                                    return (
                                    <FaStar key={i} className="star" color={"black"} size={25} />
                                    )
                                 
                                    
                                
                                })
                            }
                        </div>
                        <div className="review-button">
                            <h1 className="button-title" onClick={() => openModal({type: "review", pet: pet })}>Be the first to review {pet.name}!</h1>
                        </div>
                </div>
                )
                
    }
}

export default ReviewsIndex;