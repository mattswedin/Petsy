import React, { useState } from 'react'

const ReviewsForm = ({ createReview, closeModal, pet}) => {
    const [ state, setState ] = useState({
        body: '',
        ranking: 1,
        pet_id: pet.id
    })

    const updateNum = field => {
        return event => {
            setState(prevProps => ({
                ...prevProps,
                [field]: parseInt(event.target.value)
            }));
        }
    }

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
        createReview(state).then(closeModal())

    }


    return (

        <div>
                <h1>Rating</h1>
                <br />
                <input type="radio" name="ranking" value={'1'} onChange={updateNum("ranking")}/>
                <input type="radio" name="ranking" value={'2'} onChange={updateNum("ranking")}/>
                <input type="radio" name="ranking" value={'3'} onChange={updateNum("ranking")}/>
                <input type="radio" name="ranking" value={'4'} onChange={updateNum("ranking")}/>
                <input type="radio" name="ranking" value={'5'} onChange={updateNum("ranking")}/>
                <input type="radio" name="ranking" value={'6'} onChange={updateNum("ranking")}/>
                <input type="radio" name="ranking" value={'7'} onChange={updateNum("ranking")}/>
                <input type="radio" name="ranking" value={'8'} onChange={updateNum("ranking")}/>
                <input type="radio" name="ranking" value={'9'} onChange={updateNum("ranking")}/>
                <input type="radio" name="ranking" value={'10'} onChange={updateNum("ranking")}/>
                <input type="radio" name="ranking" value={'11'} onChange={updateNum("ranking")}/>
                <br />
                <h1>Review</h1>
                <br />
                <input type="text" value={state.body} onChange={update("body")}/>
                <br />
                <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default ReviewsForm