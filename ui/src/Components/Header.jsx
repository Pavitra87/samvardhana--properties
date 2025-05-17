import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaPhoneAlt, FaBars, FaTimes, FaPowerOff } from "react-icons/fa";
import logo from "../assets/Logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const getLinkClass = (path) =>
    location.pathname === path
      ? "border-green-700 text-green-700"
      : "border-transparent text-gray-800";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md w-full px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-3 px-2 sm:px-6 md:px-9 gap-3 md:gap-3">
        {/* Mobile Header */}
        <div className="md:hidden w-full flex justify-between items-center">
          {/* Hamburger */}
          <button onClick={toggleMenu} className="text-green-800 text-xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Logo */}
          <Link to={"/"}>
            {" "}
            <img
              src={logo}
              alt="Logo"
              className="h-9 w-auto sm:h-10 sm:mx-10"
            />
          </Link>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="flex items-center gap-1 bg-green-700 text-white px-3 py-2 rounded text-xs sm:text-sm hover:bg-green-600 transition-colors"
          >
            <FaPhoneAlt />
          </Link>
        </div>

        {/* Desktop Logo */}
        <div className="hidden md:block">
          <Link to="/">
            {" "}
            <img src={logo} alt="Logo" className="h-12w-auto " />
          </Link>
        </div>

        {/* <button */}

        {/* //   className="text-red-600 hover:text-red-800 text-xl"
          //   title="Logout"
          // >
          //   <FaPowerOff />
          // </button> */}

        <>
          {/* Navigation Links */}
          <nav
            className={`${
              isOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row items-start md:items-center w-full md:w-auto 
          space-y-2 md:space-y-0 md:space-x-6 text-sm max-[768px]:text-xs  mt-2 md:mt-0`}
          >
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`border-b-2 pb-1 whitespace-nowrap ${getLinkClass(
                "/"
              )}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`border-b-2 pb-1 whitespace-nowrap ${getLinkClass(
                "/about"
              )}`}
            >
              About Us
            </Link>
            <Link
              to="/project"
              onClick={() => setIsOpen(false)}
              className={`border-b-2 pb-1 whitespace-nowrap ${getLinkClass(
                "/project"
              )}`}
            >
              Project
            </Link>

            <Link
              to="/blogs"
              onClick={() => setIsOpen(false)}
              className={`border-b-2 pb-1 whitespace-nowrap ${getLinkClass(
                "/blogs"
              )}`}
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`border-b-2 pb-1 whitespace-nowrap ${getLinkClass(
                "/contact"
              )}`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:block mt-2 md:mt-0">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded text-sm hover:bg-green-600 transition-colors"
            >
              <FaPhoneAlt />
              <span>Contact With Us</span>
            </Link>
          </div>
        </>
      </div>
    </header>
  );
}

export default Header;
