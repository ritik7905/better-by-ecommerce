import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProductDetails = () => {

    const { id } = useParams()
    console.log(id);
    return (
        <div>SingleProductDetails</div>
    )
}

export default SingleProductDetails