import React from 'react'

export function PaymentDetails(props) {
  const calcTotal = () => {
    return props.cartItems.reduce((acc, item) => acc + item.price || 0, 0)
}
  return (
    <section className='payment-details'>
      <h3>Payment method</h3>
      <div>
        <p className='total'>Total: <span> $</span>{calcTotal()}</p>
        <p>Credit card / Debit card</p>

        <form className='payment-form' onSubmit={(ev)=>props.makeOrder(ev)}>
          <div> <label htmlFor="card-number">card-number</label>
            <input type="number" id="card-number" required />
          </div>
          <div><label htmlFor="name-on-card">name-on-card</label>
            <input type="text" id="name-on-card" required />
          </div>
          <div> <label htmlFor="expiration-Date">expiration-Date</label>
            <input type="text" id="expiration-Date" required />
          </div>
          <div><label htmlFor="cvv">cvv</label>
            <input type="number" id="cvv" required />
          </div>
          <button>Order now</button>
        </form>
      </div>
    </section>)
}
