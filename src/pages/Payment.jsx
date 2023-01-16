import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { Header } from '../cmps/Header'
import { DeliveryAdress } from '../cmps/DeliveryAdress'
import { OrderLIst } from '../cmps/OrderLIst'
import { PaymentDetails } from '../cmps/PaymentDetails'

export function Payment() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userModule.loggedInUser)
    const cartItems = useSelector(state => state.cartModule.cartItems)

    const removeFromCart = (productId) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            productId
        })
    }

    return (
        <>
            <Header />
            <section className='payment-page'>
                <div className="payment-container">
                    <DeliveryAdress user={user} />
                    <OrderLIst cartItems={cartItems} removeFromCart={removeFromCart} />
                    <PaymentDetails />

                </div>
            </section>
        </>
    )
}
