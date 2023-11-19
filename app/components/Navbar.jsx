"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/heroImg/logo.png";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <Image src={logo} alt="logo" className="w-48" />
      </div>

      <div className="hidden  lg:flex items-center space-x-14 py-4 pr-16">
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

      {/* Hamburger menu for small devices */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path d="M12 2L2 12h20zm0 20L2 12h20" />
            ) : (
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 right-0 bg-gray-800 text-white p-4 space-y-4">
          <a href="#" className="block hover:text-gray-300">
            About
          </a>
          <a href="#" className="block hover:text-gray-300">
            Contact
          </a>
          <a href="#" className="block hover:text-gray-300">
            Blogs
          </a>
          <a href="#" className="block hover:text-gray-300">
            Pages
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
