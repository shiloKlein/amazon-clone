import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Subtotal(props) {
    const navigate = useNavigate()
    let itemsCount = props.cartItems?.length || 0

    const calcTotal = () => {
        return props.cartItems.reduce((acc, item) => acc + item.price || 0, 0)
    }

    return (
        <section className={`${props.isPayment?'payment ':''}subtotal flex column space-between`}>
            <div className="flex">
                <p>Subtotal ({`${itemsCount}  ${itemsCount === 1 ? 'item' : 'items'}`}) <span>{'$' + calcTotal()}</span></p>
                {/* <p>$100</p> */}
            </div>
            {!props.isPayment && <><div className='gift-input flex align-center'>
                <input type="checkbox" id='gift-checkbox' />
                <label htmlFor="gift-checkbox">
                    This order contains a gift</label>
            </div>
                <button onClick={(ev) => navigate('/payment')}>checkout</button></>}
        </section>
    )
}
