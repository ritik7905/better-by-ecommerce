import { Button, Col, Input, Layout, Row, Typography } from 'antd'
import React from 'react'

// =============================
import "./styles.scss"
// =============================

const { Footer } = Layout;
const { Title, Paragraph } = Typography

const AppFooter = () => {
    return (
        <section className='app-footer'>
            <Footer className='app-footer-content'>
                <Row className='footer-container'>
                    <Col md={{ span: 4, }} sm={{ span: 8, }} xs={{ span: 24, }}>
                        <div className="col-data">
                            <Title level={4} className="footer-title">GET IN TOUCH</Title>
                            <Paragraph className='company-description'>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</Paragraph>
                        </div>
                    </Col>
                    <Col md={{ span: 4, }} sm={{ span: 8, }} xs={{ span: 24, }}>
                        <div className="col-data">
                            <Title level={4} className="footer-title">CATEGORIES</Title>
                            <ul className="category-lists">
                                <li>Men</li>
                                <li>Women</li>
                                <li>Dresses</li>
                                <li>Sunglasses</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={{ span: 4, }} sm={{ span: 8, }} xs={{ span: 24, }}>
                        <div className="col-data">
                            <Title level={4} className="footer-title">LINKS</Title>
                            <ul className="category-lists">
                                <li>Search</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Returns</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={{ span: 4, }} sm={{ span: 8, }} xs={{ span: 24, }}>
                        <div className="col-data">
                            <Title level={4} className="footer-title">HELP</Title>
                            <ul className="category-lists">
                                <li>Track Orders</li>
                                <li>Returns</li>
                                <li>Shipping</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={{ span: 4, }} sm={{ span: 8, }} xs={{ span: 24, }}>
                        <div className="col-data">
                            <Title level={4} className="footer-title">NEWSLETTER</Title>
                            <div className="email-input">
                                <Input type='email' placeholder="email@example.com" />
                            </div>
                            <div className='subscribe-btn'>
                                <Button>SUBSCRIBE</Button>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Footer>
        </section>
    )
}

export default AppFooter