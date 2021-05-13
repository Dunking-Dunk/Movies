import React from 'react'
import {connect} from 'react-redux'
import { fetchMovieById, fetchMovieReviews } from '../../../actions/index'

import './Movie_id.css'

class Movie_id extends React.Component {
    componentDidMount() {
        this.props.fetchMovieById(this.props.match.params.id)
        this.props.fetchMovieReviews(this.props.match.params.id)
    }

    renderMovieReview = () => {
        return this.props.reviews.map((review) => {
            return (
                <>
                    <div className="review__content">
                        <h4>{review.author_details.username}</h4>
                        <p>{review.content}</p>
                    </div>
                </>
            )
        })

    }

    render() {
        console.log(this.props.reviews)
        const movie = this.props.movie
        if (!movie.production_companies) {
            return 'Loading..'
        } 
        const production_companies = movie.production_companies.map((company) => {
                return( <ul>
                    <li>{company.name}</li>
                </ul>)
            })
        if (!this.props.movie && !this.props.reviews) {
            return 'Loading..'
        } else {
            return (
                <div className="movie_id">
                    <div className="movie_id__container">
                        <div className="movie_id__content">
                            <div className="movie_id__content1">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                <p>#{movie.tagline}</p>
                            </div>
                            <div className="movie_id__content2">
                                <h1>{movie.title}</h1>
                                <p><span>Genres:</span> {movie.genres.map((g) => {
                                return `${g.name}, `
                                })}</p>
                                <h4>{movie.overview}</h4>
                                <p>Runtime: {movie.runtime} min</p>
                                <div className="movie_id--language">Available Language: <div className="movie_id--language--p">{movie.spoken_languages.map((lang) => {
                                    return <p>{lang.english_name}</p>
                                })}</div> </div>
                            </div>
                           
                        </div>
                        <h1 className="movie_id__details--h1">More Details</h1>
                        <div className="movie_id__allDetails">
                            <div className="movie_id__details">
                                <p><span>Release Date:</span> <br/>{movie.release_date}</p>
                                <p><span>Budget:</span> <br/>{movie.budget} $</p>
                                <p><span>Revenue:</span> <br/>{movie.revenue} $</p>
                                <p><span>Rating:</span> <br/>{movie.vote_average}%</p>
                                <p><span>Vote Count:</span> <br/>{movie.vote_count}</p>
                            </div>
                            <div className="movie_id_otherDetails">
                                <div>production_companies: {production_companies}
                                </div>
                                <div>production_countries:
                                    {movie.production_countries.map((country) => {
                                        return( <ul>
                                            <li>{country.name}</li>
                                        </ul>)
                                    })}</div>
                            </div>
                        </div>
                        <div className="review">
                            <h1>Top Reviews</h1>
                            <div className="review__container">
                                {this.renderMovieReview()}
                            </div>
                        </div>
                        
                        <button className="movie_id__button"><a href={movie.homepage}>Watch Here</a></button>
                    </div>
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie_id,
    reviews: state.movieReview}
}
export default connect(mapStateToProps, { fetchMovieById,fetchMovieReviews })(Movie_id)