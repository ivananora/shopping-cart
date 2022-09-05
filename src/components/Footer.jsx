import React from "react";

const Footer = () => {
  return (
    <div className="flex h-16 mx-auto px-4 bg-green-600 text-white items-center justify-center">
      <p className="mr-4">
        Sign up for updates on promotions, new products, and sales.
      </p>
      <form>
        <input
          type="text"
          placeholder="Email Address"
          className="mr-2 rounded text-black-900 p-1 shadow-inner"
        />
        <button
          type="submit"
          className="rounded bg-white text-green-600 py-1 px-2"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Footer;
