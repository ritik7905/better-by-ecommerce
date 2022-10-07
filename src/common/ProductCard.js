import { Card } from 'antd'
import React from 'react'

const ProductCard = (props) => {
    return (
        <Card
            hoverable
            size='large'
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        ></Card>
    )
}

export default ProductCard