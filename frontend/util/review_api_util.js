export const fetchReviews = () => {
    return $.ajax({
        url: "/api/reviews",
        method: "GET"
    });
};

export const createReview = ( review ) => {
    return $.ajax({
        url: "/api/reviews",
        method: "POST",
        data: { review }
    });
};