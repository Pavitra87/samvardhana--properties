import React from "react";
import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import logo from "../assets/Logo.png";

function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md w-full px-5">
      <div className="max-w-7xl mx-auto flex flex-row md:flex-row justify-between items-center py-3 px-2 sm:px-6 md:px-9 gap-3">
        {/* Logo (Visible on md and up) */}
        <div className="hidden md:block">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Right Side - Logout */}
        <button
          className="text-red-600 hover:text-red-800 text-xl"
          title="Logout"
        >
          <FaPowerOff />
        </button>
      </div>
    </header>
  );
}

export default DashboardHeader;
