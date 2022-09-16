import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import StoreComponent from "../pages/StoreComponent";
import ProductPage from "../pages/ProductPage";
import About from "../pages/About";
import Cart from "../pages/Cart";

const Main = () => {
  return (
    <Routes>
      <Route path="/shopping-cart" element={<Home />} />
      <Route path="/store" element={<StoreComponent />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Main;
