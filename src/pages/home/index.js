import React from 'react'
// styles
import "./styles.scss"
import { HeroSection, ProductCard } from "../../components/allComponentsTogether"
import { images } from '../../assets/images'
import Flickity from "react-flickity-component";
import { data } from './data';
import { blogData } from './data';
import { Card, Col, Row, Typography } from 'antd';


// Object-destructured
const { Meta } = Card;
const { Title, Paragraph } = Typography

const Home = () => {

    return (
        <section className='home-page'>
            <HeroSection />

            <div className="content">
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
                            cellAlign: "left",
                            freeScroll: true,
                            wrapAround: true,
                            groupCells: 3,
                            adaptiveHeight: true,
                            autoPlay: true,
                            pauseAutoPlayOnHover: true,
                            responsive: [
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        wrapAround: true,
                                        cellAlign: "center",
                                        freeScroll: false,
                                        prevNextButtons: false,
                                        pageDots: false
                                    }
                                }
                            ]
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

                <div className="home-blogs">
                    <div className="our-blogs container">
                        <h3 className='blog-title-heading'>Our Blogs</h3>
                        <Row className="sample-blog-cards" gutter={[10, 50]}>
                            {blogData.map((item, i) => {
                                return (
                                    <Col md={{ span: 8, }} sm={{ span: 12, }} xs={{ span: 24, }}>
                                        <Card bordered={false}
                                            cover={
                                                <img
                                                    alt="example"
                                                    src={item.blog_thumbnail}
                                                />
                                            }>
                                            <Title level={4} className="blog-title">{item.blog_title}</Title>
                                            <Paragraph>{item.blog_details}</Paragraph>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home