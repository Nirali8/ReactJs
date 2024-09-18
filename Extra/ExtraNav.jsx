import React from "react";
import logo from "../assets/asset 1.svg";
import { Link, NavLink, Outlet } from "react-router-dom";
import { BsSearchHeart, BsHeart, BsCart3 } from "react-icons/bs";
import { FaRegUser, FaCaretDown } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <div className="flex items-center justify-around h-20">
        <div>
          <img className="h-8" src={logo}></img>
        </div>
        <div>
          <nav>
            <ul className="flex gap-6 items-center text-2xl">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li className="relative">
                <NavLink
                  to="/product"
                  className="flex"
                  onClick={toggleDropdown}
                >
                  Products
                  <FaCaretDown className="mt-[6px]" />
                </NavLink>
                {isDropdownOpen && (
                  <div className="absolute  mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <NavLink
                      to="/option1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Option 1
                    </NavLink>
                    <NavLink
                      to="/option2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Option 2
                    </NavLink>
                    <NavLink
                      to="/option3"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Option 3
                    </NavLink>
                  </div>
                )}
              </li>
              <li>
                <NavLink to="/about">Pages</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/checkout">Buy Now</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <ul className="flex gap-6 text-2xl">
            <li>
              <NavLink to="/">
                <BsSearchHeart />
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <FaRegUser />
              </NavLink>
            </li>
            <li>
              <NavLink to="/wishlist">
                <BsHeart />
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <BsCart3 />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
