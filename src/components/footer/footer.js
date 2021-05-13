import React from 'react'
import './footer.css'

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                  <div class="social__media">
                        <div class="social__media--wrap">
                            <div class="footer__logo">
                                <a href="#home" id="footer__logo">Movies</a>
                            </div>
                            <p class="website__rights">@ Movies 2021. All Rights reserved</p>
                            <div class="social__icons">
                                <a href="/" class="social__icon--link"><i class="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com/__hursun_ss__/?hl=en" class="social__icon--link"><i class="fab fa-instagram"></i></a>
                                <a href="/" class="social__icon--link"><i class="fab fa-youtube"></i></a>
                                <a href="/" class="social__icon--link"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default Footer