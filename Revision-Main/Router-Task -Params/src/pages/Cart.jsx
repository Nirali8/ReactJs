import React from 'react'
import { Link, Outlet } from "react-router-dom";


const Cart = () => {
  return (
    <div>
      <h1 className="bg-purple-500 text-3xl">This is Cart PAge</h1>
      <ul>
       <li>
          <Link to="shop">Shop Now</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
}

export default Cart
