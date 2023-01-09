import React from 'react'
import {Preview} from './Preview'

export function List(props) {
    return (
        <section className='products-list' >
            <ul>
                {props.products.map(product => <li>
                    {/* <p>{JSON.stringify(product)}</p> */}
                    <Preview product={product}></Preview>
                </li>)}
            </ul>
        </section>
    )
}
