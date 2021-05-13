import { combineReducers } from 'redux'
import popularMovieReducer from './movieReducers'
import movie_idReducer from './movie_idReducer'
import searchMovieReducer from './searchMovieReducer'
import topRatedMovie from './topRatedMovieReducer'
import latestMovieReducer from './latestMovieReducer'
import upcomingMovieReducer from './upcomingMovieReducer'
import movieReviewReducer from './movieReviewsReducer'

export default combineReducers({
    Popularmovies: popularMovieReducer,
    movie_id: movie_idReducer,
    searchedMovie: searchMovieReducer,
    topRatedMovie: topRatedMovie,
    latestMovie: latestMovieReducer,
    upcomingMovie: upcomingMovieReducer,
    movieReview: movieReviewReducer
})