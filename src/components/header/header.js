import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'


class Header extends React.Component {
    constructor() {
        super()
        this.menuRef = React.createRef()
        this.menuLinks = React.createRef()
    }
    mobileMenuClick = () => {
        this.menuRef.current.classList.toggle('is-active')
        this.menuLinks.current.classList.toggle('active')
    }

    renderNavbarLinks = () => {
        if (window.location.pathname === '/movies') {
            return (<><li className="navbar__items"><a className="navbar__links" href="#popular">Popular</a></li>
                    <li className="navbar__items"><a className="navbar__links" href="#toprated">Top Rated</a></li></>)
        }
        else {
            return (<>
                 <li className="navbar__items"><a className="navbar__links" href="#about-page">About Us</a></li>
                 <li className="navbar__items"><a className="navbar__links" href="#services">Services</a></li>
                </>)
                }
                }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar">
                    <div className="navbar__container">
                        <a className="navbar__logo" id="navbar__logo" href="#home">Movies</a>
                        <div className="navbar__toggle" id="mobile-menu" ref={this.menuRef} onClick={this.mobileMenuClick}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                        <ul className="navbar__menu" ref={this.menuLinks}>
                            <li className="navbar__items"><Link className="navbar__links" to="/">Home</Link></li>
                            <li className="navbar__items"><Link className="navbar__links" to="/movies">Movies</Link></li>
                            <li className="navbar__button"><button className="button" href="#sign-up">Powered by Movie DB</button></li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Header