import { Col, Input, Row, Typography } from 'antd'
import React from 'react'
import { BsArrowRight, BsSearch } from "react-icons/bs"
import { images } from '../../assets/images'

import { PageIntroHeader } from "../../components/allComponentsTogether"

// styles
// ================================
import "./styles.scss"
// ================================

const { Title, Paragraph } = Typography

const BlogsPage = () => {
    return (
        <section className='blog-page'>
            <div className="content blog-content">
                <PageIntroHeader intro_title="BLOGS" />
            </div>
            <div className="blog-list-container container">
                <Row className='blog-container'>
                    <Col md={16} className="px-2">
                        <Row className='blog-lists'>
                            <Col md={24} className='left-bar blog-list'>
                                <div className="blog-img">
                                    <img src={images.multi_colors} alt="blog-img" />
                                </div>
                                <div className="blog-body">
                                    <Title level={4} className="blog-title">Black Friday Guide: Best Sales & Discount Codes</Title>
                                    <div className="user-actions">
                                        <span>By Admin
                                            <span className='left-line'>|</span>
                                        </span>
                                        <span>Cooking, Foods
                                            <span className='left-line'>|</span>
                                        </span>
                                        <span>8 Comments</span>
                                    </div>
                                    <Paragraph className='blog-desc'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</Paragraph>

                                    <div className="reading">
                                        <a href="">Continue Reading</a>
                                        <BsArrowRight />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={8} className="right-aside">
                        <Row gutter={[10, 20]} className="product-content">
                            <Col md={24} className="left-bar">
                                <div className="search-products">
                                    <BsSearch />
                                    <Input placeholder='Search Products....' />
                                </div>
                                <Title level={4} className="title category-title">Categories</Title>
                                <ul className="categories-lists">
                                    <li>All</li>
                                    <li>Women</li>
                                    <li>Men</li>
                                    <li>Kids</li>
                                    <li>Accessories</li>
                                </ul>

                            </Col>
                            <Col sm={24} md={24} className="right-bar">
                                <Title level={4} className="title featured-title">Featured Products</Title>
                                <Row gutter={[10, 20]} className="product-cards">
                                    <Col className="product-card">
                                        <div className="card-img">
                                            <img src={images.black_hood} alt="product-image" />
                                        </div>
                                        <div className='product-body'>
                                            <Title level={5} className="card-title">White Shirt With Pleat Detail Back</Title>
                                            <div className='product-amt'>
                                                <span>${19.00}</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </div >

        </section >
    )
}

export default BlogsPage