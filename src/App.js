import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
