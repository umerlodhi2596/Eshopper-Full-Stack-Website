import React from 'react'
import './hero.css'

function Hero() {
    return (
        <>
            <div className="hero-wrapper">
                <div className="container">
                    <div className="row hero-col">
                        <div className="col-lg-9 col-12">
                            <div className="hero-banner">
                                <div id="carouselExample" className="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="./assets/images/carousel-1.jpg" className="d-block w-100" alt="..." />
                                            <div className="overlay"></div>
                                            <div className="carousel-content">
                                                <h5>10% Off Your First Order</h5>
                                                <h2>Fashionable Dress</h2>
                                                <button className='carousel-btn'>Shop Now</button>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="./assets/images/carousel-2.jpg" className="d-block w-100" alt="..." />
                                            <div className="overlay"></div>
                                            <div className="carousel-content">
                                                <h5>10% Off Your First Order</h5>
                                                <h2>Reasonable Price</h2>
                                                <button className='carousel-btn'>Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
