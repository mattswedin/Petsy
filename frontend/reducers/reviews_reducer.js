import {
    RECEIVE_ALL_REVIEWS,
    RECEIVE_REVIEW
} from '../actions/review_actions';


const ReviewsReducer = (oldstate = {}, action) => {
    Object.freeze(oldstate)
    let nextState = Object.assign({}, oldstate)

    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            return nextState = action.reviews;
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState;
        default:
            return oldstate;
    }
}

export default ReviewsReducer;