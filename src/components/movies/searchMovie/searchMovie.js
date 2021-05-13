import React from 'react'
import { connect } from 'react-redux'
import { searchMovie } from '../../../actions/index'
import './searchMovie.css'

class SeacrhBar extends React.Component {
    state = { movie: '' }
    
    onSubmit = (e) => {
        e.preventDefault()
        this.props.searchMovie(this.state.movie)
    }

    render() {
        return (
            <div className="search_movie">
                <div className="search_movie__Container">
                    <form onSubmit={this.onSubmit}>
                        <h1>Search Movie</h1>
                        <input onChange={(e) => { this.setState({ movie: e.target.value }) }} values={this.state.movie} />
                        <br/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, {searchMovie})(SeacrhBar)