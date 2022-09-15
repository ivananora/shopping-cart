import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid grid-cols-1 text-center lg:text-left  w-full xl:w-[1280px] px-4 py-10 items-center lg:grid-cols-2">
      <main className="mb-10">
        <h1 className="text-6xl lg:text-7xl lg:mr-20 pb-5">
          Every purchase will be made with pleasure.
        </h1>
        <p className="text-lg lg:mr-40 pb-5">
          We work with global brands and have created an application for you to
          do your shopping.
        </p>
        <Link
          to="/store"
          className="rounded bg-green-600 text-white py-3 px-6 m-1 hover:bg-green-500"
        >
          Start Shopping
        </Link>
      </main>
      <aside>
        <div>
          <img
            src={require("../assets/djamal-akhmad-fahmi-2y5hL5L7btI-unsplash.jpg")}
            className="block w-full rounded-xl"
            alt="imagehero"
          />
        </div>
      </aside>
    </div>
  );
};

export default Home;
