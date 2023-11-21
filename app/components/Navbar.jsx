"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/heroImg/logo.png";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.cursor =
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M6 6l12 12M6 18L18 6'/%3E%3C/svg%3E\") 12 12, pointer";
    } else {
      document.body.style.cursor = "auto";
    }
  }, [isModalOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.addEventListener("click", handleOutsideClick);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.removeEventListener("click", handleOutsideClick);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(".modal-input-box")) {
      closeModal();
    }
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <Image src={logo} alt="logo" className="xl:w-48 w-32" />
      </div>

      <div className="hidden xl:flex items-center space-x-14 py-4 pr-16">
        <a
          href="https://s7template.com/wp/ruposhi-new/#"
          className="navLink"
          target="_blank"
        >
          Home
        </a>
        <a
          href="https://s7template.com/wp/ruposhi-new/about"
          className="navLink"
          target="_blank"
        >
          About
        </a>

        <a
          href="https://s7template.com/wp/ruposhi-new/blog"
          className="navLink"
          target="_blank"
        >
          Blog
        </a>
        <a href="#" className="navLink">
          Pages
        </a>
        <a
          href="https://s7template.com/wp/ruposhi-new/contact"
          className="navLink"
          target="_blank"
        >
          Contact
        </a>

        <div className="relative">
          <div
            className="w-10 h-10 rounded-full bg-white cursor-pointer transition-colors delay-100 relative text-black 
             hover:text-[#815937]"
            onClick={isModalOpen ? closeModal : openModal}
          >
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <IoSearch />
            </p>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="modal-input-box bg-white p-4 rounded-md w-1/3"
              />
            </div>
          )}
        </div>
      </div>

      {/* Hamburger menu for small devices */}
      <div className="xl:hidden mr-8">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="z-10 xl:hidden absolute top-14 bg-white text-gray-500 font-semibold py-5 inset-x-0 space-y-2 divide-y divide-solid">
          <a
            href="https://s7template.com/wp/ruposhi-new/#"
            className="block pl-5 "
            target="_blank"
          >
            Home
          </a>
          <a
            href="https://s7template.com/wp/ruposhi-new/about"
            className="block pl-5 pt-4"
            target="_blank"
          >
            About
          </a>
          <a
            href="https://s7template.com/wp/ruposhi-new/blog"
            className="block pl-5  pt-4"
            target="_blank"
          >
            Blogs
          </a>
          <a href="#" className="block pl-5  pt-4">
            Pages
          </a>
          <a
            href="https://s7template.com/wp/ruposhi-new/contact"
            className="block pl-5  pt-4"
            target="_blank"
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
