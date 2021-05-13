const movieReviewReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_REVIEWS_MOVIES":
            return action.payload
        default:
            return state
     }
}

export default movieReviewReducer