import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen items-center">
        <NavBar />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
