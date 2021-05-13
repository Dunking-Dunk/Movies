import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from '../history'
import Home from './home/Home'
import Movies from './movies/Movie'
import Header from './header/header'
import Footer from './footer/footer'
import Movie_id from './movies/Movie_id/Movie_id'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router history={history}>
                    <Header/>
                    <Route exact component={Home} path="/" />
                    <Route exact component={Movies} path="/movies" />
                    <Route exact component={Movie_id} path="/movies/:id"/>
                    <Footer/>
                </Router>
            </React.Fragment>
        )
    }
}

export default App