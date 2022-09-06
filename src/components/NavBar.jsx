import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto">
      <h1 className="w-full text-3xl font-bold italic text-green-600 uppercase">
        minimal1st
      </h1>
      <ul className="flex">
        <li className="p-4">Store</li>
        <li className="p-4">About</li>
        <li className="p">
          <AiOutlineShoppingCart size="20" />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
