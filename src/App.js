import { HashRouter as Router, Route, Routes, Switch } from 'react-router-dom'
// import {loadStripe} from '@stripe/stripe-js'
// import {Elements} from '@stripe/react-stripe-js'

import { Header } from './cmps/Header'
import { Home } from './pages/Home'
import { Payment } from './pages/Payment'
import { Checkout } from './pages/Checkout'
import { Login } from './pages/Login.jsx'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './services/firebase'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('user logged in as', authUser)
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app main-layout">
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        {/* <Footer></Footer> */}
      </div>
    </Router>
  );
}

export default App;
