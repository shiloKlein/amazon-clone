import React from 'react'
import product1img from '../assets/imgs/lean-startup.jpg'

export function Product() {
    return (
        <article className='product flex column align-center'>
            <div className='product-info'>
                <p>The lean startup</p>
                <p className='product-price'>
                    <span>$</span>
                    19.99
                </p>
                <div className='product-ranting'>
                    <p>*</p>
                </div>
            </div>
            <img src="https://res.cloudinary.com/dtcqwwf0m/image/upload/v1673196709/amazon/lean-startup_dvoqgk.jpg" alt="" />
            <button>Add to basket</button>
        </article>
    )
}
