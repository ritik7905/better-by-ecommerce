import React from 'react'
import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    return (
        <Card className='product-card'>
            <Card.Body className='product-details'>
                <Image fluid src={props.image_url} />
            </Card.Body>
            <Card.Title>
                <Link to={"/"}>{props.dress_name}</Link>
            </Card.Title>
        </Card>
    )
}

export default ProductCard