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
import LoaderDataPAge from "../pages/LoaderDataPAge";
import { LoaderData } from "../pages/LoaderDataPAge";
import MainLoader from "../pages/MainLoader";
import LoaderError from "../pages/LoaderError";
import Login from "../pages/Login";
import Login1 from "../pages/Login1";

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
      <Route path="login" element={<Login />}></Route>
      <Route path="login1" element={<Login1 />}></Route>
      <Route path="loader" element={<MainLoader />}>
        <Route
          index
          element={<LoaderPage />}
          loader={Loader}
          errorElement={<LoaderError />}
        ></Route>
        <Route
          path=":id"
          element={<LoaderDataPAge />}
          loader={LoaderData}
          errorElement={<LoaderError />}
        ></Route>
      </Route>
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
