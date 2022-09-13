import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cart = useSelector((state) => state.cart);

  const sumProducts = () => {
    return cart.reduce((total, cart) => total + cart.quantity, 0);
  };

  return (
    <div className="flex flex-col items-center w-screen sticky top-0 z-50 bg-white border-b-2 border-gray-100 drop-shadow-sm">
      <div className="flex flex-col justify-between items-center sm:flex-row sm:w-full xl:w-[1280px] px-4">
        <Link
          to="/"
          className="text-3xl font-bold italic text-green-600 uppercase"
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
          <Link to="/cart" className="py-4 pl-4 relative">
            <AiOutlineShoppingCart size="20" />
            {cart.length > 0 ? (
              <p className="flex absolute top-[25px] right-[10px] w-[18px] h-[18px] rounded-full bg-green-600 text-white justify-center items-center">
                {sumProducts()}
              </p>
            ) : null}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
