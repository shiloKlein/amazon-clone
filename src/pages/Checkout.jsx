import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo, useState } from 'react'

import {removeFromCart} from '../store/actions/product.actions'

import { Header } from '../cmps/Header'
import { Subtotal } from '../cmps/Subtotal'
import { CartList } from '../cmps/CartList'


export function Checkout() {
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = 'Amazon Shopping Cart'
    }, [])


    const cartItems = useSelector(state => state.cartModule.cartItems)
    const user = useSelector(state => state.userModule.loggedInUser)
    const onRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId))
        // dispatch({
        //     type: "REMOVE_FROM_CART",
        //     productId
        // })
    }

    return (
        <>
            <Header />
            <section className='checkout flex'>
                <div className="cart">
                    <h3>hello {user ? user.email : 'Guest'}</h3>
                    <h1>Shopping Cart</h1>
                    <div>
                        <h3 className='checkout-title'>Shopping cart</h3>
                        {!!cartItems.length && <CartList cartItems={cartItems} removeFromCart={onRemoveFromCart}></CartList>}
                    </div>
                </div>
                <div className="cart-checkout-details"></div>
                <Subtotal cartItems={cartItems} />
            </section>
        </>
    )
}
