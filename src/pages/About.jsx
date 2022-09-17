import React from "react";

const About = () => {
  return (
    <div className="grid gap-5 mx-4 my-10 p-5 max-w-[1280px] grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col text-6xl justify-center max-h-[500px]">
        <div className="mb-4 md:mr-10">
          Hello there! Please feel free to reach out to us through the
          following:
        </div>
        <ul className="text-4xl">
          <li>Call us - 1234567890</li>
          <li>Message us on Instagram</li>
          <li>Email us - example@email.com</li>
        </ul>
      </div>
      <form className="flex flex-col h-full">
        <input
          type="text"
          placeholder="Name"
          className="mr-2 rounded text-black p-1 m-1 border"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="mr-2 rounded text-black p-1 m-1 border"
        />
        <input
          type="text"
          placeholder="Contact Number"
          className="mr-2 rounded text-black p-1 m-1 border"
        />
        <textarea
          rows="4"
          placeholder="Message"
          className="mr-2 rounded text-black p-1 m-1 border"
        />
        <div className="rounded bg-green-700 text-white text-center py-3 px-6 m-1 sm:w-40">
          Submit
        </div>
      </form>
    </div>
  );
};

export default About;
