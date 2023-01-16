import React from 'react'

export function DeliveryAdress(props) {

    return (
        <section>
            <h3>Delivery Adress</h3>
            <div>
                <p>{props.user?.email}</p>
                <p>16 Angular Square</p>
                <p>Evan You, TS</p>
            </div>
        </section>
    )
}
