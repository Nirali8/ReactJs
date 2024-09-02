import React from "react";
import logo from "../assets/react.svg";
import { Link, NavLink, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-around bg-slate-600">
        <div>
          <img className="h-16" src={logo}></img>
        </div>
        <div>
          <nav>
            <ul className="flex gap-6 items-center">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">AboutUs</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/cart">Cart</NavLink>
              </li>
              <li>
                <NavLink to="/contact">ContactUs</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
