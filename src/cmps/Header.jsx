import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../services/firebase'

import { ProductFilter } from './ProductFilter'
import { Subtotal } from './Subtotal'

import logo from '../assets/imgs/logo/header-logo.png'
import React from 'react'

export function Header(props) {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cartModule.cartItems)
    const user = useSelector(state => state.userModule.loggedInUser)
    const handleAuth = () => {
        if (user) {
            auth.signOut()
            dispatch({
                type: "LOG_OUT",
            })
        }
    }

    return (
        <header className="header full main-layout">
            <div className='flex align-center'>
                <Link to="/">
                    <img className="header-logo" src={logo} alt="bobo" />
                </Link>

                <div className="header-search flex align-center">
                    {props.isFilter && <>   <ProductFilter filterBy={props.filterBy} setFilterBy={props.setFilterBy} />
                        <span className="material-symbols-outlined">
                            search
                        </span></>}

                    {props.isPayment && <Subtotal  isPayment={true} cartItems={cartItems} />}
                </div>

                <nav className="header-nav flex space-evenly">

                    <div className="header-option"
                        onClick={handleAuth}>
                        {`hello ${user ? user.username : 'guest'}`}

                        <Link to={user ? '/' : '/login'}><span >{user ? 'Log out' : 'Log in'}</span></Link>
                    </div>
                    <NavLink to="/orders" >
                        <div className="header-option">
                            Returns
                            <span >& orders </span>
                        </div>
                    </NavLink>
                    <div className="header-option">
                        Your
                        <span>Prime</span>
                    </div>

                    <NavLink to="/checkout" className="flex align-center">
                        <div className="header-option-basket flex align-center" title="go to cart">
                            <span className="material-symbols-outlined">
                                shopping_basket
                            </span>
                            <span>{cartItems.length}</span>
                        </div>
                    </NavLink>
                </nav>

            </div>
        </header>
    )
}
