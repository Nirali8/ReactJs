import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useLogin } from "../Hook/ContextHook";


const NavBar = () => {

  const {isLogin,user,setIsLogin}=useLogin()
  const location = useLocation()
  // console.log(location);
  
  return (
    <>
      <div>
        <h1 className="bg-amber-600 text-3xl">{location.pathname}</h1>
        <ul className="flex">
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
          <li>
            {isLogin ? (
              <button onClick={() => setIsLogin(false)}>{`Hi..${user.userName} LogOut`}</button>
            ) : (
              <Link to="login">Login</Link>
            )}
           
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
