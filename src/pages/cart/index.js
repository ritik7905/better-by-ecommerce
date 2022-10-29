import React from 'react'

import { CartTable, PageIntroHeader } from "../../components/allComponentsTogether"

// styles
import "./styles.scss"
const Cart = () => {
  return (
    <div className='cart-page'>
      <div className="content cart-content">
        <PageIntroHeader intro_title="CART" />
      </div>
      <div className="cart-content container">
        <div className="cart-product-table">
          <CartTable />
        </div>
      </div>
    </div>
  )
}

export default Cart