import { Card, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { product_Details } from '../../common/routes'
import FormatPrice from '../formatPrice'

// styles
import "./styles.scss"
const { Title, Paragraph } = Typography
const Product = ({ featureList }) => {

    const { id, name, price, image } = featureList

    return (
        <Link to={`${product_Details}/${id}`}>
            <Card cover={<img alt="example" src={image} />} style={{ width: 250, }} hoverable className="product-card">
                <div className="card-data">
                    <div className="card-data-flex">
                        <Title level={3} className="card-name">{name.charAt(0).toUpperCase() + name.slice(1)}</Title>
                        <Paragraph className='card-price'><FormatPrice price={price} /></Paragraph>
                    </div>
                </div>
            </Card>
        </Link>
    )
}

export default Product