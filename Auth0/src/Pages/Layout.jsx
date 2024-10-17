import React from 'react'
import AboutUs from './AboutUs'
import Blog from './Blog'
import Cart from './Cart'
import ContactUs from './ContactUs'
import Error from './Error'
import Home from './Home'
import Login from './Login'
import Shop from './Shop'
import Navbar from '../Components/Navbar'
import Profile from "./Profile";
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const List = createBrowserRouter([
  {
    path: "",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
const Layout = () => {
  return (
    <div>
      <RouterProvider router={List}></RouterProvider>
    </div>
  )
}

export default Layout
