import { Input } from 'antd'
import React from 'react'
import { Table } from 'react-bootstrap'

// styles
import "./styles.scss"


const CartTable = () => {
    return (
        <>
            <Table className='my-table'>
                <thead className='cart-table-header'>
                    <tr className='table-head-row'>
                        <th className='column-1 column'></th>
                        <th className='column-2 column'>Product</th>
                        <th className='column-3 column'>Price</th>
                        <th className='column-4 column'>Quantity</th>
                        <th className='column-5 column'>Total</th>
                    </tr>
                </thead>
                <tbody className='cart-table-content'>
                    <tr className='table-body-row'>
                        <td className='column-1 column'>
                            <div className='cart-img-product'>
                                <img src="https://preview.colorlib.com/theme/fashe/images/xitem-10.jpg.pagespeed.ic.1njKEG95CH.webp" alt="cart-img" />
                            </div>
                        </td>
                        <td className='column-2 column'>
                            Men tShirt
                        </td>
                        <td className='column-3 column'>
                            $36.00
                        </td>
                        <td className='column-4 column'>
                            <div className="product-counter">
                                <button>-</button>
                                <Input />
                                <button>+</button>
                            </div>

                        </td>
                        <td className='column-5 column'>
                            $36.00
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default CartTable