import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../context/productContext'

import { PageNavigation } from '../../components/allComponentsTogether'


const API = "https://api.pujakaitem.com/api/products"
const SingleProductDetails = () => {

    const { isSingleLoading, getSingleProduct, singleProduct } = useProductContext()

    const { id } = useParams()

    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`)
    }, [])

    console.log(singleProduct);

    const { id: elias, name, company, price } = singleProduct

    if (isSingleLoading) {
        return <div className='page-loading'>Loading......</div>
    } else {

        return (
            <section className='single-product-details'>
                {/* Page-navigation */}
                <PageNavigation title={name} />

                <div className="product-details-container">
                    <div className="container">

                    </div>
                </div>
            </section>

        )
    }
}

export default SingleProductDetails