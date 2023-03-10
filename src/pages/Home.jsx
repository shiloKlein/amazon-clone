import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts, setFilterBy, addToCart } from '../store/actions/product.actions'


// import { loadRobots, removeRobot, setFilterBy } from '../store/actions/robot.actions'
import { Header } from '../cmps/Header'
import { SideFilter } from '../cmps/SideFilter'
import { ProductFilter } from '../cmps/ProductFilter'

// import products from '../services/product.json'
import hero from '../assets/imgs/amazon-hero.jpg'
import { List } from '../cmps/List'
import categories from '../services/main-categories.json'


export function Home() {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cartModule.cartItems)
    const products = useSelector(state => state.cartModule.products)
    const filterBy = useSelector(state => state.cartModule.filterBy)

    useEffect(() => {
        dispatch(loadProducts())
        // loadProducts()
        document.title = 'Amazon clone'
    }, [])
    const onAddToCart = (ev,product) => {
        ev.stopPropagation()
        dispatch(addToCart(product))
        
    }
    const onChangeFilter = (filterBy) => {
    
        dispatch(setFilterBy(filterBy))
        dispatch(loadProducts())
    }


    return (
        <>
            <Header filterBy={filterBy} setFilterBy={onChangeFilter} isFilter={true} />

            <section className='home flex full'>
                <SideFilter filterBy={filterBy} setFilterBy={onChangeFilter} />
                <div className="home-container flex column">
                    <img className="hero-img" src="https://res.cloudinary.com/dtcqwwf0m/image/upload/v1673196706/amazon/amazon-hero_oukiiy.jpg" alt="bobo" />
                    <div>
                        {/* <ProductFilter filterBy={filterBy} setFilterBy={setFilterBy} /> */}
                        {products && <List products={products} addToCart={onAddToCart}></List>}
                    </div>
                </div>
            </section>
        </>
    )
}
