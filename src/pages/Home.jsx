import React from 'react'

import products from '../services/product.json'
import hero from '../assets/imgs/amazon-hero.jpg'
import { List } from '../cmps/List'
import categories from '../services/main-categories.json'


export function Home() {
    return (
        <section className='home'>
            <div className="home-container flex justify-center">
                <img className="hero-img" src="https://res.cloudinary.com/dtcqwwf0m/image/upload/v1673196706/amazon/amazon-hero_oukiiy.jpg" alt="bobo" />
            </div>
                {products && <List products={products}></List>}
        </section>
    )
}
