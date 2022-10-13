import React from 'react'
// styles
import "./styles.scss"
import { HeroSection, ProductCard } from "../../components/allComponentsTogether"
import { images } from '../../assets/images'
import Flickity from "react-flickity-component";
import { data } from './data';

const Home = () => {

    return (
        <section className='home-page'>
            <HeroSection />
            <div className="grid-container product-cards container">
                <ProductCard image_url={images.leather_bag} dress_name="Hello" />
                <ProductCard image_url={images.cloths_sets} dress_name="Hello" />
                <ProductCard image_url={images.winter_suit} dress_name="Hello" />
            </div>

            <div className="product-slider">
                <h3 className='featured-title'>featured products</h3>
                <Flickity
                    className="carousel container"
                    options={{
                        asNavFor: ".carousel-main",
                        contain: true,
                        pageDots: false,
                        freeScroll: false,
                        wrapAround: true,
                        groupCells: 3,
                        adaptiveHeight: true,
                        autoPlay: true,
                        pauseAutoPlayOnHover: true,

                    }}
                >
                    {
                        data.map((item, index) => {
                            return (
                                <div className="carousel-cell" key={index}>
                                    <div className="slider-img">
                                        <img src={item.img} alt="product_img" />
                                    </div>
                                    <div className="card-details">
                                        <a href="#">{item.productTitle}</a>
                                        <span>{item.productPrice}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Flickity>
            </div>
        </section>
    )
}

export default Home