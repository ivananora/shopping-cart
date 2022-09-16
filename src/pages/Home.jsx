import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid grid-cols-1 text-center lg:text-left w-full xl:w-[1280px] px-4 py-10 items-center lg:grid-cols-2">
      <main className="mb-10 w-full">
        <h1 className="text-6xl lg:text-7xl lg:mr-20 pb-5">
          Every purchase will be made with pleasure.
        </h1>
        <p className="text-lg lg:mr-40 pb-5">
          We work with global brands and have created an application for you to
          do your shopping.
        </p>
        <Link
          to="/store"
          className="rounded bg-green-700 text-white py-3 px-6 m-1 hover:bg-green-600"
        >
          Start Shopping
        </Link>
      </main>
      <aside>
        <div>
          <img
            src="https://images.unsplash.com/photo-1507707113652-f8a32c05046d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
            className="block w-full rounded-xl"
            alt="imagehero"
          />
        </div>
      </aside>
    </div>
  );
};

export default Home;
