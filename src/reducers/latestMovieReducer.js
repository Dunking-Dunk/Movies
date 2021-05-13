const latestMovieReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_LATEST_MOVIES":
            return [action.payload]
        default:
            return state
     }
}

export default latestMovieReducer