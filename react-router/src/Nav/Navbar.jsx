import React from 'react'
import logo from '../assests/react-router.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-around bg-gray-400'>
      <div>
        <img className='h-16' src={logo} alt="" />
      </div>
      <div>
        <nav>
            <ul className='flex gap-6'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">AboutUs</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/contact">ContactUs</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar