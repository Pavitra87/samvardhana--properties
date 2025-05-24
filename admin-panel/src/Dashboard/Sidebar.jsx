import React from "react";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdHome,
  MdPermContactCalendar,
  MdOutlineFormatListBulleted,
} from "react-icons/md";
import { BiImageAdd } from "react-icons/bi";
import { TbLogs } from "react-icons/tb";
import { FaQuestionCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="hidden md:block w-64 min-h-screen bg-gray-800 text-white shadow-lg">
      <ul className="flex flex-col justify-center py-4 space-y-2">
        <li>
          <Link
            to="/projectdashboard"
            className="flex items-center py-2  px-4   hover:bg-gray-700 transition"
          >
            <MdOutlineFormatListBulleted className="text-xl mr-3" />
            Projects
          </Link>
        </li>
        
        <li>
          <Link
            to="/blogdashboard"
            className="flex items-center py-2  px-4   hover:bg-gray-700 transition"
          >
            <TbLogs className="text-xl mr-3" />
            Blogs
          </Link>
        </li>
        <li>
          <Link
            to="/faqdashboard"
            className="flex items-center py-2  px-4  hover:bg-gray-700 transition"
          >
            <FaQuestionCircle className="text-xl mr-3" />
            FAQs
          </Link>
        </li>
        <li>
          <Link className="flex items-center py-2  px-4  hover:bg-gray-700 transition">
            <MdPermContactCalendar className="text-xl mr-3" />
            Contact Us
          </Link>
        </li>

        {/* <li>
          <Link
           
            className="flex items-center py-2  px-4  hover:bg-gray-700 transition"
          >
            <MdOutlineFormatListBulleted className="text-xl mr-3" />
            About Us
          </Link>
        </li> */}

        <li>
          <Link className="flex items-center px-4 py-2 hover:bg-gray-700 transition">
            <MdPermContactCalendar className="text-xl mr-3" />
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
