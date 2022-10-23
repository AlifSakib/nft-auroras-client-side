import React from "react";
import heroImage from "../../assets/hero.jpg";
const Home = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6  text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">Discover,</span>
            </span>{" "}
            Collect & Sell Extraordinary NFTs
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            The Crypto Monkey is a high-quality collection of 100 unique monkeys
            on the NFTMart marketplace.
          </p>
        </div>
        <div className="mx-auto lg:max-w-2xl">
          <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              src={heroImage}
              alt=""
            />
          </div>
          <div className="mt-5">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            >
              Discover
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
