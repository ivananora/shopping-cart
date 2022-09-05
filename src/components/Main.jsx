import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import StoreComponent from "../pages/StoreComponent";
import About from "../pages/About";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<StoreComponent />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Main;
