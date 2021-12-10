import React, { useState } from 'react'
import { FaStar } from "react-icons/fa"

const ReviewsForm = ({ createReview, closeModal, pet}) => {
    const [ state, setState ] = useState({
        body: '',
        pet_id: pet.id,
    })

    const [rating, setRating] = useState(0)
    
    
    const update = field => {
        return event => {
            setState(prevProps => ({
                ...prevProps,
                [field]: event.target.value
            }));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const trueRating = Object.assign(state, rating)
        createReview(trueRating).then(closeModal())

    }


    return (

        <div className="review-container">
            <div className="review-form">
                   
        
                    <div className="rating-div">
                        {
                            [...Array(5)].map((star, i) =>

                                <label key={i}>
                                <input type="radio" name="rating" value={i + 1} onClick={() => setRating({ ranking: i + 1 })} />
                                <FaStar className="star" color={i + 1 <= rating.ranking ? "black" : "gray"} size={50}/>
                                </label>
                                
                            )
                            
                        }
                    </div>
                    
                    <br />
                    {/* <h1 className="title" >Review</h1> */}
                    <br />
                    <textarea className="text-window" type="text" textarea={state.body} onChange={update("body")}/>
                    <br />
                    <br />
                    <br />
                    <button className="adopt-button" type="button" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default ReviewsForm