import { Col, Row } from 'antd'
import React from 'react'
import { images } from '../../assets/images'
import { PageIntroHeader } from "../../components/allComponentsTogether"

// styles
import "./styles.scss"

const About = () => {
    return (
        <section className='about-page'>
            <div className="content about-content">
                <PageIntroHeader intro_title="ABOUT US" />
            </div>

            <div className="about-data container">
                <Row gutter={10} className="our-story">
                    <Col md={8} className="left-side">
                        <div className="my-image">
                            <img src={images.leather_bag} alt="my-img" className='responsive' />
                        </div>

                    </Col>
                    <Col md={16} className="right-side">
                        <h3 className='story-title'>Our Story</h3>
                        <div className='my-bio'>
                            <p className='description'>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>

                            <div className="thought">
                                <p className='description'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
                                <div className='name'>
                                    <span>- Ritik Sharma</span>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>
        </section >
    )
}

export default About
