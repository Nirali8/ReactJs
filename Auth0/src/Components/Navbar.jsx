import React from "react";
import logo from "../assets/react.svg";
import { useAuth0 } from "@auth0/auth0-react";

import { Link, NavLink, Outlet } from "react-router-dom";
const Navbar = () => {

   const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

   console.log(user);

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
                <NavLink to="/profile">UserProfile</NavLink>
              </li>
              {isAuthenticated ? (
                <div className="flex">
                  <li>
                    <NavLink>
                      <button
                        onClick={() =>
                          logout({
                            logoutParams: { returnTo: window.location.origin },
                          })
                        }
                      >
                        Logout
                      </button>
                    </NavLink>
                  </li>
                  <li>
                    <span>{user.nickname}</span>
                  </li>
                </div>
              ) : (
                <li>
                  <NavLink>
                    <button onClick={() => loginWithRedirect()}>Login</button>
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
