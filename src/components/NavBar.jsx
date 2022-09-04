import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="text-white flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold italic text-blue-400 uppercase">
        store
      </h1>
      <ul className="flex">
        <li className="p-4">Store</li>
        <li className="p-4">About</li>
        <li className="p-4">
          <Icons icon={<AiOutlineShoppingCart size="20" />} />
        </li>
      </ul>
    </div>
  );
};

const Icons = ({ icon }) => {
  return <div className="navbar-icon">{icon}</div>;
};

export default NavBar;
