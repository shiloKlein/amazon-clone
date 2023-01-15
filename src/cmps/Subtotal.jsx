import React from 'react'

export function Subtotal(props) {
    let itemsCount = props.cartItems?.length || 0
    
    const calcTotal = () => {
        return props.cartItems.reduce((acc, item) => acc + item.price || 0, 0)
    }

    return (
        <section className='subtotal flex column space-between'>
            <div className="flex">
                <p>Subtotal ({`${itemsCount}  ${itemsCount === 1 ? 'item' : 'items'}`}) <span>{'$' + calcTotal()}</span></p>
                {/* <p>$100</p> */}
            </div>
            <div className='gift-input flex align-center'>
                <input type="checkbox" id='gift-checkbox' />
                <label for="gift-checkbox">
                    This order contains a gift</label>
            </div>
            <button>checkout</button>
        </section>
    )
}
