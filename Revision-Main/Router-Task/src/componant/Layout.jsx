import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Cart from "../pages/Cart";
import ContactUs from "../pages/ContactUs";
import Error from "../pages/Error";
import Faq from "../pages/Faq";
import Shop from "../pages/Shop";
import NavBar from "./NavBar";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LoaderPage from "../pages/LoaderPage";
import Loader from "../pages/Loader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />}></Route>
      <Route path="cart" element={<Cart />}>
        <Route path="shop" element={<Shop />}></Route>
      </Route>
      <Route path="about" element={<AboutUs />}>
        <Route path="contact" element={<ContactUs />}></Route>
        <Route path="faq" element={<Faq />}></Route>
      </Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="loader" element={<LoaderPage/>} loader={Loader}></Route>
    </Route>
  )
);

const Layout = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />}></Route>
            <Route path="cart" element={<Cart />}>
              <Route path="shop" element={<Shop />}></Route>
            </Route>
            <Route path="about" element={<AboutUs />}>
              <Route path="contact" element={<ContactUs />}></Route>
              <Route path="faq" element={<Faq />}></Route>
            </Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
          
          <RouterProvider router={router}/>
    </div>
  );
};

export default Layout;
