import { useState } from "react";
import "./App.css";

import WishlistContextProvider from "./componant/context/WishlistContextProvider";
import Shop from "./componant/Shop";
import Product from "./componant/Product"
import Home from "./componant/Home";
import Navbar from "./componant/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <h1 className="text-center text-3xl bg-yellow-600 p-4 m-3">
        This is App Components
      </h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/shop"
            element={
              <WishlistContextProvider>
                <Shop />
              </WishlistContextProvider>
            }
          ></Route>
          <Route
            path="/product"
            element={
              <WishlistContextProvider>
                <Product />
              </WishlistContextProvider>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
