import React from 'react'
import { Typography } from 'antd'

// styles
// ============================
import "./styles.scss"
// ============================

const { Title, Paragraph } = Typography

const PageIntroHeader = (props) => {
    return (
        <div className='page-intro-header'>
            <div className="page-content">
                <Title level={2} className="intro-title">{props.intro_title}</Title>
                <Paragraph className='intro-description'>{props.description}</Paragraph>
            </div>
        </div>
    )
}

export default PageIntroHeader