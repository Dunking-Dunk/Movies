import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchPopularMovies, fetchTopRatedMovies, fetchLatestMovies, fetchUpcomingMovies} from '../../actions/index'
import './Movie.css'
import SearchBar from './searchMovie/searchMovie'

class Movie extends React.Component{
        componentDidMount() {
                this.props.fetchPopularMovies()
                this.props.fetchTopRatedMovies()
                this.props.fetchLatestMovies()
                this.props.fetchUpcomingMovies()
        }
        renderPopularMovie = () => {
              return  this.props.movies.map((movie) => {
                      return movie.results.map((movie) => {
                              if (movie.poster_path === null) {
                                return (<div className="popularmovie__card">
                                        <Link to={`/movies/${movie.id}`}><img className="popularmovie__poster" src="https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail-300x225.jpg" /></Link>
                                      </div>)
                              } else {
                                return (<div className="popularmovie__card">
                                <Link to={`/movies/${movie.id}`}><img className="popularmovie__poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /></Link>
                        </div>)
                              } 
                        })
                })
        }
        renderSearchedMovie = () => {
               return this.props.searchedMovie.map((movie) => {
                        return movie.results.map((movie) => {
                                if (movie.poster_path === null) {
                                        return (<div className="popularmovie__card">
                                                <Link to={`/movies/${movie.id}`}><img className="popularmovie__poster" src="https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail-300x225.jpg" /></Link>
                                              </div>)
                                      } else {
                                        return (<div className="popularmovie__card">
                                        <Link to={`/movies/${movie.id}`}><img className="popularmovie__poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /></Link>
                                </div>)
                                      } 
                        })
                })
        }
        renderTopRatedMovie = () => {
                return this.props.topRatedMovie.map((movie) => {
                        return movie.results.map((movie) => {
                                if (movie.poster_path === null) {
                                        return (<div className="popularmovie__card">
                                                <Link to={`/movies/${movie.id}`}><img className="popularmovie__poster" src="https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail-300x225.jpg" /></Link>
                                              </div>)
                                      } else {
                                        return (<div className="popularmovie__card">
                                        <Link to={`/movies/${movie.id}`}><img className="popularmovie__poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /></Link>
                                </div>)
                                      } 
                        })
                })
        }

        renderLatestMovie = () => {
                return this.props.latestMovie.map((movie) => {
                        return movie.results.map((movie) => {
                                if (movie.poster_path === null) {
                                        return (<div className="popularmovie__card">
                                                <Link to={`/movies/${movie.id}`}><img className="popularmovie__poster" src="https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail-300x225.jpg" /></Link>
                                              </div>)
                                      } else {
                                        return (<div className="popularmovie__card">
                                        <Link to={`/movies/${movie.id}`}><img className="popularmovie__poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /></Link>
                                </div>)
                                      } 
                        })
                })
        }

        renderUpcomingMovie = () => {
                return this.props.upcomingMovie.map((movie) => {
                        return movie.results.map((movie) => {
                                if (movie.poster_path === null) {
                                        return (<div className="popularmovie__card">
                                                <Link to={`/movies/${movie.id}`}><img className="popularmovie__poster" src="https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail-300x225.jpg" /></Link>
                                              </div>)
                                      } else {
                                        return (<div className="popularmovie__card">
                                        <Link to={`/movies/${movie.id}`}><img className="popularmovie__poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /></Link>
                                </div>)
                                      } 
                        })
                })
        }
        
        render() {
                if (this.props.movies && this.props.searchedMovie && this.props.topRatedMovie && this.props.latestMovie && this.props.upcomingMovie ) {
                        return (
                                <React.Fragment>
                                        <div className="navigation">
                                                <div className="navigation__container">
                                                        <a className="navigation__links" href="#search">Search Movies</a>
                                                        <a className="navigation__links" href="#newmovie">New Movies</a>
                                                        <a className="navigation__links" href="#popularmovie">Popular Movie</a>
                                                        <a className="navigation__links" href="#topratedmovie">Top Rated Movie</a>
                                                        <a className="navigation__links" href="#upcomingmovie">Upcoming Movies</a>
                                                </div>

                                        </div>
                                        <div id="search" style={{backgroundColor: "#000000"}}></div>
                                        <SearchBar />
                                        <div className="searchedmovie" >
                                                <div className="popularmovie__container">
                                                        {this.renderSearchedMovie()}
                                                </div>
                                        </div>
                                        <div className="popularmovie" id="newmovie">
                                                <h1>New Movies</h1>
                                                <div className="popularmovie__container">
                                                        {this.renderLatestMovie()}
                                                </div>
                                        </div>
                                        <div className="popularmovie" id="popularmovie">
                                                <h1>Popular Movies</h1>
                                                <div className="popularmovie__container">
                                                        {this.renderPopularMovie()}
                                                </div>
                                        </div>
                                        <div className="popularmovie" id="topratedmovie">
                                                <h1>Top Rated Movies</h1>
                                                <div className="popularmovie__container">
                                                        {this.renderTopRatedMovie()}
                                                </div>
                                        </div>
                                        <div className="popularmovie" id="upcomingmovie">
                                                <h1>UpComing Movies</h1>
                                                <div className="popularmovie__container">
                                                        {this.renderUpcomingMovie()}
                                                </div>
                                        </div>
                                </React.Fragment>
                        )
                } else {
                      return  <div>Loading...</div>
        }
       
}
}

const mapStateToProps = (state) => {
        return {
                movies: state.Popularmovies,
                searchedMovie: state.searchedMovie,
                topRatedMovie: state.topRatedMovie,
                latestMovie: state.latestMovie,
                upcomingMovie: state.upcomingMovie
        }
}

export default connect(mapStateToProps, {fetchPopularMovies,fetchTopRatedMovies, fetchLatestMovies, fetchUpcomingMovies})(Movie)