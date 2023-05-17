import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#8F00FF]">
        <Link to="/">4Techies</Link>
      </h1>
      <ul className="hidden md:flex">
        <CustomLink to="/">
          <li className="p-4 font-semibold">Home</li>
        </CustomLink>
        <CustomLink to="/careers">
          <li className="p-4 font-semibold">Jobs</li>{" "}
        </CustomLink>
        <CustomLink to="/about">
          <li className="p-4 whitespace-nowrap font-semibold">About Us</li>
        </CustomLink>
        <CustomLink to="/user">
          <li className="p-4 whitespace-nowrap font-semibold">My Profile</li>
        </CustomLink>
        <CustomLink to="/signup">
          <button className="bg-[#8F00FF] w-[125px] px-4 rounded text-[#F5F6FB] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#8F00FF] duration-300">
            <li className="p-4 whitespace-nowrap font-semibold">Sign up</li>{" "}
          </button>
        </CustomLink>
        <CustomLink to="/login">
          <button className="mx-4 bg-blue-700 w-[125px] px-4 rounded text-[#F5F6FB] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300">
            <li className="p-4 whitespace-nowrap font-semibold">Log in</li>
          </button>
        </CustomLink>
      </ul>
      <div onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#8F00FF] m-4">
          4Techies
        </h1>
        <ul className="uppercase p-4 ">
          <li className="p-4 border-b border-gray-600 ">Home</li>
          <li className="p-4 border-b border-gray-600">Jobs</li>
          <li className="p-4 border-b border-gray-600">About Us</li>
          <li className="p-4 border-b border-gray-600">My Profile</li>
          <li className="p-4 border-b border-gray-600">Sign up</li>
          <li className="p-4 border-b border-gray-600">Log in</li>
        </ul>
      </div>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
