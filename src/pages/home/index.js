import React from 'react'
import { FeatureCard, HeroSection, Product, ProductCard } from "../../components/allComponentsTogether"
import { images } from '../../assets/images'
import { Col, Row, Typography } from 'antd';
import { useProductContext } from '../../context/productContext';

// styles
import "./styles.scss"

// Object-destructured
const { Title, Paragraph } = Typography

const Home = () => {

    const { isLoading, featureProducts } = useProductContext()
    console.log(featureProducts);

    return (
        <section className='home-page'>
            <HeroSection />

            <div className="content">
                <div className="grid-container product-cards container">
                    <ProductCard image_url={images.leather_bag} dress_name="Hello" />
                    <ProductCard image_url={images.cloths_sets} dress_name="Hello" />
                    <ProductCard image_url={images.winter_suit} dress_name="Hello" />
                </div>

                <div className="product-slider container">
                    <h3 className='featured-title'>featured products</h3>

                    <div className="featured-products">
                        <div className="site-card-wrapper">
                            <Row gutter={60} className="feature-product-row">
                                {featureProducts?.map((item) => {
                                    return (
                                        <Col span={5}>
                                            <Product key={item.id} featureList={item} />
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </div>
                </div>

                <div className="sale-catalogue banner">
                    <div className='sale-info-content container'>
                        <div className='sale-detail sample-img_1'>
                            <img src={images.white_furr} alt="product-img" />
                            <div className="product-info">
                                <div className="data">
                                    <h3 className='headline'>The Beauty</h3>
                                    <h1 className='headline-title'>Look Book</h1>
                                    <a href="#" className='collection'>View Collection</a>
                                </div>
                            </div>
                        </div>
                        <div className='selling-product'>
                            <div className='sale-detail sample-img_2'>
                                <img src={images.spacks} alt="product-img" />
                                <div className="product-info specks">
                                    <div className="specks-data">
                                        <h4 className='product-name'>Galas sol Hawkers one</h4>
                                        <h1 className='product-price'>${15.90}</h1>
                                        <div className="countdown">
                                            <div className='days-countdown box'>
                                                <span className='days day'>{50}</span>
                                                <span className='text'>days</span>
                                            </div>
                                            <div className='hours-countdown box'>
                                                <span className='hrs hr'>{50}</span>
                                                <span className='text'>hrs</span>
                                            </div>
                                            <div className='mins-countdown box'>
                                                <span className='mins min'>{50}</span>
                                                <span className='text'>mins</span>
                                            </div>
                                            <div className='secs-countdown box'>
                                                <span className='secs sec'>{50}</span>
                                                <span className='text'>secs</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home