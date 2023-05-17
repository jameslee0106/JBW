import React from "react";
import background from "../assets/login3.jpg";
import { Navbar } from "../components/Navbar";

function Login() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img className="h-screen w-full object-cover" src={background} alt="" />
        </div>

        <div className="bg-gray-800 flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto bg-purple-700 p-8 px-8 rounded-lg">
            <h2 className="text-white text-4xl font-bold text-center">
              Sign In
            </h2>
            <div className="text-white flex flex-col text-gray-400 py-2 font-semibold">
              <label>Email address</label>
              <input
                classname="rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none "
                type="email" placeholder="Email"
              />
            </div>
            <div className="text-white flex flex-col text-gray-400 py-2 font-semibold">
              <label>Password</label>
              <input
                classname="rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password" placeholder="Password"
              />
            </div>
            <div className="text-white flex justify-between text-gray-400 py-2">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Remember Me
              </p>
              <p>Forgot Password</p>
            </div>
            <button className="text-white w-full my-5 py-2 bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
