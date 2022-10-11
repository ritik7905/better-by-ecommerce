import React from 'react'
import { Button, Carousel } from 'react-bootstrap';
import { images } from '../../assets/images';
// styles
import "./style.scss"

const HeroCarusel = () => {

    return (
        <div className="hero-crousel">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <div className="carousel_img">
                        <img
                            className="d-block w-100 img-fluid"
                            src={images.hero_1}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 className='collection-year'>Women Collection 2022</h3>
                        <h2 className='upcoming-events'>NEW ARRIVALS</h2>
                        <Button className='shop-btn'>SHOP NOW</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <div className="carousel_img">
                        <img
                            className="d-block w-100 img-fluid"
                            src={images.hero_2}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 className='collection-year'>Women Collection 2022</h3>
                        <h2 className='upcoming-events'>NEW ARRIVALS</h2>
                        <Button className='shop-btn'>SHOP NOW</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <div className="carousel_img">
                        <img
                            className="d-block w-100 img-fluid"
                            src={images.hero_3}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 className='collection-year'>Women Collection 2022</h3>
                        <h2 className='upcoming-events'>NEW ARRIVALS</h2>
                        <Button className='shop-btn'>SHOP NOW</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HeroCarusel