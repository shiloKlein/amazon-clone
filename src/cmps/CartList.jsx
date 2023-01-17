import React from 'react'

import { CartPreview } from './CartPreview'

export function CartList(props) {

    return (
        <section className={`${props.payment?'payment ':''}cart-list`}>
            <ul>
                {props.cartItems.length && props.cartItems.map(product => <li>
                    {/* <p>{JSON.stringify(product)}</p> */}
                    <CartPreview payment={props.payment} product={product} removeFromCart={props.removeFromCart}></CartPreview>
                </li>)}
            </ul>
        </section>
    )
}
