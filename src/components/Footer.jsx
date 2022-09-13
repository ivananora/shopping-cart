import React from "react";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row w-screen mt-auto px-4 bg-black text-white items-center justify-center">
      <div className="flex p-2 items-center">
        <a href="https://github.com/ivananora/shopping-cart" className="mr-4">
          <BsGithub size="28" />
        </a>
        <p className="sm:mr-4">
          Sign up for updates on promotions, new products, and sales.
        </p>
      </div>
      <form>
        <input
          type="text"
          placeholder="Email Address"
          className="mr-2 rounded text-black p-1 m-1 shadow-inner"
        />
        <button className="rounded bg-white text-black py-1 px-2 m-1">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Footer;
