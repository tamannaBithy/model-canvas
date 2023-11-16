import Image from "next/image";
import React from "react";
import logo from "../../public/heroImg/logo.png";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Image src={logo} alt="logo" className="w-48" />
      </div>

      <div className="hidden  md:flex items-center space-x-14 py-4 pr-16">
        <a href="#" className="navLink">
          Home
        </a>
        <a href="#" className="navLink">
          About
        </a>
        <a href="#" className="navLink">
          Portfolio
        </a>
        <a href="#" className="navLink">
          Blog
        </a>
        <a href="#" className="navLink">
          Pages
        </a>
        <a href="#" className="navLink">
          Contact
        </a>

        <div
          className="w-10 h-10 rounded-full bg-white cursor-pointer transition-colors  delay-100
          relative text-black hover:text-[#815937]"
        >
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <IoSearch />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
