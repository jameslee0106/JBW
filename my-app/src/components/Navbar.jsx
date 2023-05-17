import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const Navbar = () => {

  return (
    <div className=" text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#8F00FF]">
        <Link to="/">4Techies</Link>
      </h1>
      <ul className="hidden md:flex">
        <CustomLink to="/">
          <li className="p-4 font-semibold link link-underline link-underline-black text-white">Home</li>
        </CustomLink>
        <CustomLink to="/careers">
          <li className="p-4 font-semibold link link-underline link-underline-black text-white">Jobs</li>{" "}
        </CustomLink>
        <CustomLink to="/about">
          <li className="p-4 whitespace-nowrap font-semibold link link-underline link-underline-black text-white">About Us</li>
        </CustomLink>
        <CustomLink to="/user">
          <li className="p-4 whitespace-nowrap font-semibold link link-underline link-underline-black text-white">My Profile</li>
        </CustomLink>
        <CustomLink to="/signup">
          <button className="bg-[#8F00FF] w-[125px] px-4 rounded text-[#F5F6FB] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#8F00FF] duration-300 ml-4">
            <li className="p-4 whitespace-nowrap font-semibold">Sign up</li>{" "}
          </button>
        </CustomLink>
        <CustomLink to="/login">
          <button className="mx-4 bg-blue-700 w-[125px] px-4 rounded text-[#F5F6FB] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300">
            <li className="p-4 whitespace-nowrap font-semibold">Log in</li>
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
