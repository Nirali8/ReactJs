import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Navbar";
import Home from "./Home";
import Product from "./Product";
import Wishlist from "./Wishlist";
const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
