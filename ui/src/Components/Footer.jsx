import React from "react";
import logo from "../assets/Logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-8 text-gray-600 text-sm">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 flex flex-col md:flex-row gap-8 justify-between">
        {/* Logo & Description */}
        <div className="md:w-1/3">
          <img src={logo} alt="Logo" className="mb-4 w-34" />
          <p className="text-sm leading-relaxed">
          Building sustainable communities for a better tomorrow. With a focus on eco-friendly developments and 
          prime locations, we deliver residential and commercial spaces that inspire.
          </p>
        </div>

        {/* Quick Links */}
        <div className="">
          <h5 className="text-base font-bold mb-3">Quick Links</h5>
          <ul className="space-y-2 text-sm font-medium">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Projects</li>
            <li className="hover:text-black cursor-pointer">Property Management</li>
            <li className="hover:text-black cursor-pointer">Sustainability Initiatives</li>
            <li className="hover:text-black cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="md:w-1/3">
          <h5 className="text-base font-semibold mb-3">We are on Social Media</h5>
          <p className="text-sm mb-4">
          Don’t miss our future updates! Do follow us on social media
          </p>
          <ul className="flex gap-3">
            <li className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full cursor-pointer">
              <FaFacebookF className="text-gray-800" />
            </li>
            <li className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full cursor-pointer">
              <FaLinkedinIn className="text-gray-800" />
            </li>
            <li className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full cursor-pointer">
              <FaInstagram className="text-gray-800" />
            </li>
            <li className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full cursor-pointer">
              <FaYoutube className="text-gray-800" />
            </li>
            <li className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full cursor-pointer">
              <FaTwitter className="text-gray-800" />
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>©2025, Samvardhana Properties - All rights reserved</p>
        <ul className="flex gap-6 mt-2 md:mt-0 font-semibold">
          <li className="hover:text-black cursor-pointer">Terms & Conditions</li>
          <li className="hover:text-black cursor-pointer">Privacy Policy</li>
          <li className="hover:text-black cursor-pointer">Refund Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
