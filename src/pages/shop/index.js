import React, { useState } from 'react';
import { Col, Row, Typography, Select } from 'antd'
import { Slider } from 'antd';
import { BsSearch } from "react-icons/bs"
import { PageIntroHeader, Product, ProductCard } from "../../components/allComponentsTogether"

// styles
// ============================
import "./styles.scss"
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import { product_Details } from '../../common/routes';
import { useProductContext } from '../../context/productContext';
// ============================

const { Title } = Typography
const { Option } = Select;
const Shop = () => {

    const { isLoading, products } = useProductContext()
    const [disabled, setDisabled] = useState(false);

    const [color, setColor] = useState("green");


    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };


    return (
        <section className='shop-page'>
            <div className="content shop-content">
                <PageIntroHeader intro_title="Women" description="New Arrivals Women Collection 2022" />
            </div>

            <div className='product-list-container'>
                <div className="container">

                    <Row gutter={[10, 20]} className="product-content">
                        <Col md={6} className="left-bar">
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

                            <Title level={4} className="title filter-title">Filters</Title>
                            <div className="filter-price">
                                <div className='filter-heading'>Price</div>

                                <div className="price-range-selector">
                                    <Slider range defaultValue={[0, 20]} disabled={disabled} />
                                    <div className="filter-info">
                                        <Button>FILTER</Button>
                                        <div className="price">
                                            Range: $ <span className='lover-val'>0</span> - $ <span className='upper-val'>50</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="filter-color">
                                <div className="filter-heading color-heading">Colors</div>
                                <ul className="categories-lists">
                                    <li><Input type='color' value={color} /></li>
                                    <li><Input type='color' value={color} /></li>
                                    <li><Input type='color' value={color} /></li>
                                    <li><Input type='color' value={color} /></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={16} className="right-bar">
                            <Row className="product-listing-selector">
                                <Col md={12} className="price-behavior">
                                    <div className='sort-price-range'>
                                        <Select
                                            defaultValue="Default Price"
                                            style={{
                                                width: 120,
                                            }}
                                            onChange={handleChange}
                                        >
                                            <Option value="popular">Popular</Option>
                                            <Option value="price-low-to-high">Price: Low to High</Option>
                                            <Option value="price-high-to-low">Price: High to Low</Option>
                                        </Select>
                                    </div>
                                    <div className='sort-between-amount'>
                                        <Select
                                            defaultValue="Price"
                                            style={{
                                                width: 120,
                                            }}
                                            onChange={handleChange}
                                        >
                                            <Option value="popular">Price</Option>
                                            <Option value="zero-to-fifty">$0.00 - $50.00</Option>
                                            <Option value="fifty-to-hundred">$50.00 - $100.00</Option>
                                            <Option value="hundred-to-oneFifty">$100.00 - $150.00</Option>
                                            <Option value="oneFifty-to-twoHundred">$150.00 - $200.00</Option>
                                        </Select>
                                    </div>
                                </Col>
                                <Col md={12} className="all-products-data">
                                    <div className="product-stocks">
                                        <Title level={5}>Showing 1-12 of 16 results</Title>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="categories-wise-product-container" gutter={20}>
                                {products?.map((item) => {
                                    return (
                                        <Col sm={24} md={12} lg={8} className="card" key={item.id
                                        }>
                                            <Product key={item.id} featureList={item} />
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div >
        </section >
    )
}

export default Shop