import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const Navbar = () => {

  return (
    <div className=" text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#8F00FF]">
        <Link to="/">USA Job Search</Link>
      </h1>
      <ul className="hidden md:flex">
        <CustomLink to="/">
          <p className="p-4 font-semibold link link-underline link-underline-black text-white">Home</p>
        </CustomLink>
        <CustomLink to="/about">
          <p className="p-4 whitespace-nowrap font-semibold link link-underline link-underline-black text-white">About Us</p>
        </CustomLink>
        <CustomLink to="/profile">
          <p className="p-4 whitespace-nowrap font-semibold link link-underline link-underline-black text-white">My Profile</p>
        </CustomLink>
        <CustomLink to="/search">
          <p className="p-4 whitespace-nowrap font-semibold link link-underline link-underline-black text-white">Search</p>
        </CustomLink>
        <CustomLink to="/signup">
          <button className="bg-[#8F00FF] w-[125px] px-4 rounded text-[#F5F6FB] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#8F00FF] duration-300 ml-4">
          <p className="p-4 whitespace-nowrap font-semibold">Sign up</p>
          </button>
        </CustomLink>
        <CustomLink to="/login">
          <button className="mx-4 bg-blue-700 w-[125px] px-4 rounded text-[#F5F6FB] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300">
          <p className="p-4 whitespace-nowrap font-semibold">Log in</p>
          </button>
        </CustomLink>
      </ul>
  
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
