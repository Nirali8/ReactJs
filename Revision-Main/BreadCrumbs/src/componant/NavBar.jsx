import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

const NavBar = () => {

  const location = useLocation()
  // console.log(location);
  
  return (
    <>
      <div>
        <Breadcrumb/>
        {/* <h1 className="bg-amber-600 text-3xl">{ location.pathname }</h1> */}
        <ul className="flex bg-yellow-500 text-4xl justify-between">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">AboutUs</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/loader">Loader</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
