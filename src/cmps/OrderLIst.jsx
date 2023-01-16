import React from 'react'
import { CartList } from './CartList'


export function OrderLIst(props) {
  return (
    <section>
      <h3>Review Items and Delivery</h3>
      <div>
        {!!props.cartItems?.length &&
          <CartList cartItems={props.cartItems}
            removeFromCart={props.removeFromCart}
            payment={true} />}

      </div>
    </section>
  )
}
