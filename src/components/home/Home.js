import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="hero" id="home">
                    <div className="hero__container">
                        <h1 className="hero__title">Choose Your <span>Movies</span></h1>
                        <p className="hero__description">Movie Time</p>
                        <button className="hero__button"><Link to='/movies'>Explore</Link></button>
                    </div>
                </div>

                <div className="main" id="about-page">
                    <div className="main__container">
                        <div className="main__img--container">
                            <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80"/>
                        </div>
                        <div className='main__content'>
                            <h1>What do we do?</h1>
                            <h2>We help you to choose Movies to Watch!</h2>
                            <p>Never Ending Movies .......</p>
                        </div>
                    </div>
                </div>

                <services className="services" id="services">
                    <h1>Our Services</h1>
                    <div className="services__wrapper">
                        <div className="services__card">
                            <h2>Popular Movies</h2>
                            <p>We will show you Popular movies</p>
                            <div className="services__btn"><Link class="serviceButton">Click here</Link></div>
                        </div>
                        <div className="services__card">
                            <h2>Movie Rating and Reviews</h2>
                            <p>We will Rate and Review Every Movie at their release date</p>
                            <div className="services__btn"><Link class="serviceButton">Click here</Link></div>
                        </div>
                    </div>
                </services>
            </React.Fragment>
        )
    }
}

export default Home