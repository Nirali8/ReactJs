import React from "react";
import logo from "../assets/asset 1.svg";
import { Link, NavLink, Outlet } from "react-router-dom";
import { BsSearchHeart, BsHeart, BsCart3 } from "react-icons/bs";
import { FaRegUser, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";

const NavBar = () => {
  return (
    <div>
      <div className="flex items-center justify-around h-20">
        <div className="text-2xl lg:hidden">
          <RiMenu3Line />
        </div>
        <div>
          <img className="h-8" src={logo}></img>
        </div>
        <div>
          <nav className="max-lg:hidden">
            <ul className="flex gap-6 items-center text-2xl">
              <li>
                <NavLink to="/" className="group">
                  Home
                  <div class="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className="group">
                  Shop
                  <div class="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/product" className="group">
                  Products
                  <div class="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </NavLink>
              </li>
              <li className="relative group p-1">
                <NavLink to="#" className="flex">
                  Pages
                  <div class="absolute bg-black h-[2px] w-0 group-hover:w-full bottom-0 transition-all duration-500"></div>
                  <FaCaretDown className="mt-[6px]" />
                </NavLink>
                {/* Dropdown Menu */}
                <div className="absolute hidden group-hover:block mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <NavLink
                    to="/about"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    AboutUs
                  </NavLink>
                  <NavLink
                    to="/faq"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Faq
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    ContactUs
                  </NavLink>
                </div>
              </li>
              <li>
                <NavLink to="/blog" className="group">
                  Blog
                  <div class="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkout" className="group">
                  Buy Now
                  <div class="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <ul className="flex gap-6 text-2xl max-sm:hidden">
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
              <NavLink to="/wishlist" className="max-md:hidden">
                <BsHeart />
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="max-md:hidden">
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
