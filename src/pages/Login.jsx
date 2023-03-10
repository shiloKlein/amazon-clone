import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userService } from '../services/userService.js'
import { useDispatch, useSelector } from 'react-redux'

import { userSignUp } from '../store/actions/user.actions'

export function Login() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const navigate = useNavigate()


    const login = async (ev) => {
        ev.preventDefault()
        try {
            await userService.login(email, password)
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    }

    const signup = async (ev) => {
        try {
            await userService.signup(email, password )
            dispatch(userSignUp(username, email, password))//needed because the auth procces of firebase dont allow saving more details on the user like prev orders
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <section className='login-page flex column align-center'>
            <Link to="/"><img className='login-logo'
                src="https://res.cloudinary.com/dtcqwwf0m/image/upload/v1673793986/amazon/header-logo_dpbx9l.png" alt="logo" />
            </Link>

            <div className="login-form-container login-page flex column align-center">
                <h1>Log in </h1>

                <form className='flex column align-center'>

                    <label htmlFor="username-input" >user name</label>
                    <input type="text" value={username}
                        onChange={ev => setUsername(ev.target.value)}
                        placeholder='write your username here' required />

                    <label htmlFor="email-input" >email</label>
                    <input type="email" value={email}
                        onChange={ev => setEmail(ev.target.value)}
                        placeholder='write your mail here' required />

                    <label htmlFor="password-input">password</label>
                    <input type="password" value={password}
                        onChange={ev => setPassword(ev.target.value)}
                        placeholder='write your password here' required />

                    <button type="submit" onClick={login}>log-in</button>
                </form>

                <p>By continuing, you agree to Amazon clone's <a href="#">Conditions of Use</a>  and <a href="#">Privacy Notice</a> .</p>
            </div>

            <div className="sign-up">
                <p className='sign-up-heading'>New to Amazon?</p>
                <button onClick={signup}>Create your Amazon account</button>
            </div>
        </section>
    )
}
