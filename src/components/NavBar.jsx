import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center sticky top-0 z-50 h-20 max-w-[1240px] mx-auto bg-white/50 backdrop-blur-sm">
      <Link
        to="/"
        className="text-3xl pl-4 font-bold italic text-green-600 uppercase"
      >
        minimal1st
      </Link>
      <div className="flex">
        <Link to="/store" className="p-4">
          Store
        </Link>
        <Link to="/about" className="p-4">
          About
        </Link>
        <Link to="/cart" className="p-4 pl-4">
          <AiOutlineShoppingCart size="20" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
