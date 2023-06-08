import React from 'react'
import Banner from './Banner/Banner'
import Header from './Header/Header'
import './style.css'
function Hero() {
    return (
        <section class="hero-section">
            <Header />
            <div className="hero-content">
            <Banner />
            </div>
        </section>
    )
}

export default Hero