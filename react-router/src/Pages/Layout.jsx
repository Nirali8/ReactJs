import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Cart from './Cart'
import Login from './Login'
import Shop from './Shop'
import Error from './Error'
import Navbar from '../Nav/Navbar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<AboutUs/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/shop' element={<Shop/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout