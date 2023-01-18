import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartList } from '../cmps/CartList'
import { Header } from '../cmps/Header'

// const activeMap = [false, false, false, false, false, false, false, false, false, false]
export function OrderListPage() {
    const user = useSelector(state => state.userModule.loggedInUser)
    console.log(user);
    const [activeMap, setActiveMap] = useState([]);
    const [isOrderActive, setIsOrderActive] = useState(activeMap)
    // const ordersIdx = user?.prevOrders.map((order,idx)=>{return {idx:false}})
    useEffect(() => {
        console.log('Mounted')
    }, [])

    const toggleOrder = (idx) => {
        setIsOrderActive(prevIsActive => {
            const newIsActive = [...prevIsActive] // create a new copy of the state
            newIsActive[idx] = !newIsActive[idx] // update the appropriate index
            return newIsActive
        })
    }
    const date = (time) => {
        // return time
        return new Date(time * 1000).toDateString()
    }
    return (
        <>
            <Header />

<section className='order-list-page'>
                <h3></h3>
                <div className='order-list-container flex column'>
                    {user?.prevOrders &&
                        Object.values(user.prevOrders).map((order, idx) => {
                            const items = Object.values(order)
                            return (
                                <div>
                                    <h1>order from:</h1>
                                    <h3 onClick={() => toggleOrder(idx)}>{date(order.createdAt)} </h3>
                                    <div className={`order-list-container ${isOrderActive && isOrderActive[idx] ? 'active' : ''}`}>
                                        <CartList cartItems={items}
                                            payment={true} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
