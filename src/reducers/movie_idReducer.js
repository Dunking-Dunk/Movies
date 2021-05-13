const movie_idReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_MOVIE_ID":
            return action.payload
        default:
            return state
     }
}

export default movie_idReducer