import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../context/productContext'


const API = "https://api.pujakaitem.com/api/products"
const SingleProductDetails = () => {

    const { isSingleLoading, getSingleProduct, singleProduct } = useProductContext()

    const { id } = useParams()

    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`)
    }, [])

    return (
        <div>SingleProductDetails</div>
    )
}

export default SingleProductDetails