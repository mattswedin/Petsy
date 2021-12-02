import * as ReviewApiUtil from '../util/review_api_util';
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"

const receiveReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
})

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

export const fetchReviews = () => dispatch => {
    return ReviewApiUtil.fetchReviews()
        .then(reviews => dispatch(receiveReviews(reviews)))
}

export const createReview = review => dispatch => {
    return ReviewApiUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)))
}