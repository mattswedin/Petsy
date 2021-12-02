import React, { useState } from 'react'

const ReviewsForm = ({ createReview, closeModal}) => {
    const [ state, setState ] = useState({
        body: '',
        ranking: 0
    })

    console.log(state.ranking)

    const update = (field) => {

        return event => {
            setState({ [field]: event.target.value })
        }
    }

    const handleSubmit = () => {
        console.log(state)
        createReview(state).then(closeModal())

    }


    return (

        <form onSubmit={handleSubmit} >
                <h1>Rating</h1>
                <br />
                <input type="radio" name="ranking" value={.5} onClick={update("ranking")}/>
                <input type="radio" name="ranking" value={1} onClick={update("ranking")}/>
                <input type="radio" name="ranking" value={1.5} onClick={update("ranking")}/>
                <input type="radio" name="ranking" value={2} onClick={update("ranking")}/>
                <input type="radio" name="ranking" value={2.5} onClick={update("ranking")}/>
                <input type="radio" name="ranking" value={3} onClick={update("ranking")}/>
                <input type="radio" name="ranking" value={3.5} onClick={update("ranking")}/>
                <input type="radio" name="ranking" value={4} onClick={update("ranking")}/>
                <input type="radio" name="ranking" value={4.5} onClick={update("ranking")}/>
                <input type="radio" name="ranking" value={5} onClick={update("ranking")}/>
                <br />
                <h1>Review</h1>
                <br />
                <input type="text" value={state.body} onChange={update("body")}/>
                <br />
                <button>Submit</button>
        </form>
    )
}

export default ReviewsForm