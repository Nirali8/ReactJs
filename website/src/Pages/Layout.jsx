import React from "react";
import Home from "./Home";
import Shop from "./Shop";
import Product from "./Product";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import CheckOut from "./CheckOut";
import ContactUs from "./ContactUs";
import Cart from "./Cart";
import Login from "./Login";
import Error from "./Error";
import Faq from "./Faq";
import Wishlist from "./Wishlist";
import NavBar from "../components/NavBar";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
const List = createBrowserRouter([
  {
    path: "",
    element: <NavBar />,
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
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/error",
        element: <Error />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);
const Layout = () => {
  return (
    <div>
      <RouterProvider router={List}></RouterProvider>
    </div>
  );
};

export default Layout;
