import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import { loadRobots, removeRobot, setFilterBy } from '../store/actions/robot.actions'
import { Header } from '../cmps/Header'
import { SideNav } from '../cmps/SideNav'
import { ProductFilter } from '../cmps/ProductFilter'

// import products from '../services/product.json'
import hero from '../assets/imgs/amazon-hero.jpg'
import { List } from '../cmps/List'
import categories from '../services/main-categories.json'


export function Home() {
    useEffect(() => {
        loadProducts()
        document.title = 'Amazon clone'
    },[])
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cartModule.cartItems)
    const products = useSelector(state => state.cartModule.products)
    const filterBy = useSelector(state => state.cartModule.filterBy)
    const addToCart = (product) => {
        dispatch({
            type: "ADD_TO_CART",
            product
        })
    }
    const setFilterBy = (filterBy) => {
        dispatch({
            type: "SET_FILTER_BY",
            filterBy
        })
        loadProducts()
    }

    async function loadProducts() {
        await dispatch({
            type: 'SET_PRODUCTS',
        })
    }
    // console.log(cartItems, 'cartItems');

    return (
        <>
            <Header />

            <section className='home'>
                <div className="home-container flex justify-center">
                    <img className="hero-img" src="https://res.cloudinary.com/dtcqwwf0m/image/upload/v1673196706/amazon/amazon-hero_oukiiy.jpg" alt="bobo" />
                </div>
                <ProductFilter filterBy={filterBy} setFilterBy={setFilterBy}/>
                <div>
                    <SideNav />
                    {products && <List products={products} addToCart={addToCart}></List>}
                </div>
            </section>
        </>
    )
}
