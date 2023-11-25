import React from "react";
import Typed from "react-typed";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#8F00FF] font-bold p-2 text-xl">
            Empowering Individuals Everywhere: Find Your Dream Job Near You!
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Unleash Your Superpowers.
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              Calling
            </p>
            <Typed
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
              strings={[
                "Software Developers",
                "Engineers",
                "Financial Analysts",
                "UX/UI Designers",
              ]}
              typeSpeed={140}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            Discover job opportunities that match your unique skills and
            talents. From finance to engineering, we've got you
            covered.
          </p>
          <Link to="/search">
            <button className="bg-[#8F00FF] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#F5F6FB] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#8F00FF] duration-300">
             Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
