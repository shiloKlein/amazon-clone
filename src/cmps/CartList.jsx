import React from 'react'

import { CartPreview } from './CartPreview'

export function CartList(props) {
    return (
        <section className={`${props.payment?'flex column payment ':''}cart-list`}>
            <ul>
                {props.cartItems?.length && props.cartItems.map(product => {
                    if(typeof product!=='number')return <li>
                    {/* <p>{JSON.stringify(product)}</p> */}
                    <CartPreview payment={props.payment} product={product} removeFromCart={props.removeFromCart}></CartPreview>
                </li>})}
            </ul>
        </section>
    )
}
