import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Error from './Error'
import Login from './Login'
import Profile from './Profile'
import Shop from './Shop'
import Wishlist from './Wishlist'
import Navbar from '../Componant/Navbar'

const Layout = () => {
  return (
    <div>
      <h1>This is Layout Page</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Layout
