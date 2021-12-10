import React, {useState} from "react";
import {FaStar} from "react-icons/fa"

const Rating = () => {

    const [rating, setRating] = useState(null)

    return (
        
        
        <div className="rating-div">
            {
                [...Array(5)].map((star, i) => 
                    <label>
                    <input type="radio" name="rating" value={i + 1} onClick={() => setRating(i + 1)} />
                    <FaStar className="star" size={50}/>
                    </label>
                    
                    )
                
            }
        </div>
    )
}

export default Rating;