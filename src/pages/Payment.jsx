import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addOrderToUser } from '../store/actions/user.actions'

import { Header } from '../cmps/Header'
import { DeliveryAdress } from '../cmps/DeliveryAdress'
import { Subtotal } from '../cmps/Subtotal'
import { OrderLIst } from '../cmps/OrderLIst'
import { PaymentDetails } from '../cmps/PaymentDetails'
import { useNavigate } from 'react-router-dom'

export function Payment() {
    const [isDemoModal, setIsDemoModal] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.userModule.loggedInUser)
    const cartItems = useSelector(state => state.cartModule.cartItems)

    const makeOrder = (ev) => {
        ev.preventDefault()
        setIsDemoModal(true)
        setTimeout(() => {
            navigate('/')
        }, 3000);
        dispatch(addOrderToUser(cartItems))
        // dispatch(addOrderToUser(cartItems))
        dispatch({ type: 'SET_CART', cart:null })

    }

    const removeFromCart = (productId) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            productId
        })
    }

    return (
        <>




            <Header isPayment={true} />
            <section className='payment-page'>
                <div className="payment-container">
                    <DeliveryAdress user={user} />
                    <OrderLIst cartItems={cartItems} removeFromCart={removeFromCart} />
                    <PaymentDetails makeOrder={makeOrder} cartItems={cartItems} />

                </div>

                {isDemoModal && <div className="payment-modal">
                    <p>Order completed</p>
                    <p>your card will not be charged an nothing will really happen. this payment feature is only for demo UI</p>
                </div>}
            </section>
        </>
    )
}
