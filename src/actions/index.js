import imbd from '../api/index'

export const fetchPopularMovies = () => async (dispatch) => {
        const response = await imbd.get('/popular',  {
            params: {
                page: 1
            }
        })
        dispatch({type: 'FETCH_POPULAR_MOVIES', payload: response.data})
}

export const fetchMovieById = (id) => async (dispatch) => {
    const response = await imbd.get(`/${id}`)
    dispatch({type: 'FETCH_MOVIE_ID', payload: response.data})
}

export const searchMovie = (query) => async (dispatch) => {
    const response = await imbd.get('https://api.themoviedb.org/3/search/movie', {
        params: {
            query: query,
            include_adult: false,
        }
    })
    dispatch({type: 'SEARCH_MOVIE', payload: response.data})
}

export const fetchTopRatedMovies = () => async(dispatch) => {
    const response = await imbd.get('/top_rated',  {
        params: {
            page: 1
        }
    })
    dispatch({type: 'FETCH_TOP_RATED_MOVIES', payload: response.data})
}

export const fetchLatestMovies = () => async(dispatch) => {
    const response = await imbd.get('/now_playing', {
        params: {
            page: 1
        }
    })
    dispatch({type: 'FETCH_LATEST_MOVIES', payload: response.data})
}

export const fetchUpcomingMovies = () => async(dispatch) => {
    const response = await imbd.get('/upcoming', {
        params: {
            page: 2
        }
    })
    dispatch({type: 'FETCH_UPCOMING_MOVIES', payload: response.data})
}

export const fetchMovieReviews = (id) => async (dispatch) => {
    const response = await imbd.get(`/${id}/reviews`)
    dispatch({type: 'FETCH_REVIEWS_MOVIES', payload: response.data.results})
}

