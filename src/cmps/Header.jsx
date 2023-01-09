import { NavLink, useNavigate } from 'react-router-dom'


import logo from '../assets/imgs/logo/header-logo.png'
import React from 'react'

export function Header() {
    return (
        <header className="header full main-layout">
            <div className='flex align-center'>
                <NavLink to="/">
                    <img className="header-logo" src={logo} alt="bobo" />
                </NavLink>
                <div className="header-search flex align-center">
                    <input className="serch-input" type="text" />
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </div>

                <nav className="header-nav flex space-evenly">
                    <div className="header-option">
                        hello guest
                        <span >Sign in</span>
                    </div>
                    <div className="header-option">
                        Returns
                        <span >& orders </span>
                    </div>
                    <div className="header-option">
                        Your
                        <span>Prime</span>
                    </div>
                    <NavLink to="/checkout" >
                        <div className="header-option-basket flex align-center">
                            <span className="material-symbols-outlined">
                                shopping_basket
                            </span>
                            <span>0</span>

                        </div>
                    </NavLink>
                </nav>

            </div>
        </header>
    )
}
