import React from 'react'

import { CartPreview } from './CartPreview'

export function CartList(props) {
    console.log(props.cartItems);

    return (
        <section className='cart-list'>
            <ul>
                {props.cartItems.length && props.cartItems.map(product => <li>
                    {/* <p>{JSON.stringify(product)}</p> */}
                    <CartPreview product={product} removeFromCart={props.removeFromCart}></CartPreview>
                </li>)}
            </ul>
        </section>
    )
}
