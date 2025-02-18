import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="bg-violet-300 p-5 text-xl flex justify-center space-x-5">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/wishlist" className="p-1.5">
          <FaRegHeart />
        </Link>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
