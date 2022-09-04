import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Store from "./pages/Store";
import About from "./pages/About";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
