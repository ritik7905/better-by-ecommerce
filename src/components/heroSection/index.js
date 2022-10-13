import React from 'react'
import { Carousel } from 'react-bootstrap'
import { images } from "../../assets/images"
import { motion } from "framer-motion"

// styles
import "./style.scss"

const HeroSection = () => {
    return (
        <div className='app-hero-carousel'>
            <div className="hero-crousel">
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <div className="carousel_img">
                            <img
                                className="d-block w-100 img-fluid"
                                src={images.hero_1}
                                alt="First slide"
                            />
                        </div>
                        <div className="overlay"></div>
                        <Carousel.Caption>
                            <motion.h3 className='collection-year' whileInView={{ y: [-200, 0] }} transition={{ duration: 1.2, ease: "backInOut" }}>Women Collection 2022</motion.h3>
                            <motion.h2 className='upcoming-events' whileInView={{ y: [200, 0] }} transition={{ duration: 1.5, ease: "backInOut" }}>NEW ARRIVALS</motion.h2>
                            <motion.button whileInView={{ x: [-500, 0], opacity: [0, 0.5, 1] }} transition={{ duration: 1.5, ease: "anticipate" }} className='shop-btn'>SHOP NOW</motion.button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <div className="carousel_img">
                            <img
                                className="d-block w-100 img-fluid"
                                src={images.hero_2}
                                alt="First slide"
                            />
                        </div>
                        <div className="overlay"></div>
                        <Carousel.Caption>
                            <motion.h3 className='collection-year' whileInView={{ y: [-200, 0] }} transition={{ duration: 1.2, ease: "backInOut" }}>Women Collection 2022</motion.h3>
                            <motion.h2 className='upcoming-events' whileInView={{ y: [200, 0] }} transition={{ duration: 1.5, ease: "backInOut" }}>NEW ARRIVALS</motion.h2>
                            <motion.button whileInView={{ y: [200, 0], opacity: [0, 0.5, 1] }} transition={{ duration: 1.5, ease: "anticipate" }} className='shop-btn'>SHOP NOW</motion.button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <div className="carousel_img">
                            <img
                                className="d-block w-100 img-fluid"
                                src={images.hero_3}
                                alt="First slide"
                            />
                        </div>
                        <div className="overlay"></div>
                        <Carousel.Caption>
                            <motion.h3 className='collection-year' whileInView={{ y: [200, 0] }} transition={{ duration: 1.2, ease: "backInOut" }}>Women Collection 2022</motion.h3>
                            <motion.h2 className='upcoming-events' whileInView={{ y: [-200, 0] }} transition={{ duration: 1.5, ease: "backInOut" }}>NEW ARRIVALS</motion.h2>
                            <motion.button whileInView={{ x: [500, 0], opacity: [0, 0.5, 1] }} transition={{ duration: 1.5, ease: "anticipate" }} className='shop-btn'>SHOP NOW</motion.button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default HeroSection