"use client";

import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaArrowAltCircleLeft, FaCommentDollar, FaBars } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { IoMdAnalytics } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import {
  MdAccessTimeFilled,
  MdBatchPrediction,
  MdDashboard,
  MdManageHistory,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar Toggle Button for Mobile */}
      <button
        className="md:hidden p-2 text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={28} />
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-white text-black  r shadow-lg  min-h-[calc(100vh-4.1rem)] w-64 p-4 fixed flex flex-col justify-between bottom-0 left-0 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative`}
      >
        <div className="flex flex-col gap-8 space-y-10">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between text-black mb-4">
            <h1 className="text-lg lg:text-2xl font-bold">Tech</h1>
            <button
              className="text-gray-700 cursor-pointer md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaArrowAltCircleLeft size={28} />
            </button>
            <button className="text-gray-700 cursor-pointer hidden md:block ">
              <FaArrowAltCircleLeft size={28} />
            </button>
          </div>

          {/* Sidebar Items */}
          <ul className="space-y-4 text-gray-800 text-lg lg:text-xl">
            <li className="hover:text-blue-500 transition-all duration-300 ease-linear cursor-pointer flex items-center gap-2">
              <MdDashboard size={24} /> Dashboard
            </li>

            {/* Dropdown Section */}
            <li className="relative group">
              <div className="flex items-center justify-between cursor-pointer gap-2 hover:text-blue-500 transition-all duration-300 ease-linear">
                <MdManageHistory size={24} /> Manage Batch
                <MdOutlineKeyboardArrowDown size={24} />
              </div>
              <ul className="pl-6 mt-2 space-y-2 hidden group-hover:block transition-all duration-300 ease-in-out">
                <li className="hover:text-blue-500 transition-all duration-300 ease-linear cursor-pointer flex items-center gap-2">
                  <MdBatchPrediction size={24} /> All Batches
                </li>
                <li className="hover:text-blue-500 transition-all duration-300 ease-linear cursor-pointer flex items-center gap-2">
                  <GrResources size={24} /> Resources
                </li>
              </ul>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300 ease-linear cursor-pointer flex items-center gap-2">
              <FaCommentDollar size={24} /> My Earnings
            </li>
            <li className="hover:text-blue-500 transition-all duration-300 ease-linear cursor-pointer flex items-center gap-2">
              <MdAccessTimeFilled size={24} /> Timetable
            </li>
            <li className="hover:text-blue-500 transition-all duration-300 ease-linear cursor-pointer flex items-center gap-2">
              <IoMdAnalytics size={24} /> Analytics
            </li>
          </ul>
        </div>

        {/* Sidebar Footer */}
        <div>
          <ul className="space-y-4 text-gray-800 text-lg lg:text-xl">
            <li className="hover:text-blue-500 transition-all duration-300 ease-linear cursor-pointer flex items-center gap-2">
              <CgProfile size={24} /> Manage Profile
            </li>
            <li className="hover:text-blue-500 transition-all duration-300 ease-linear cursor-pointer flex items-center gap-2">
              <IoSettings size={24} /> Settings
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

// ! This is a responsive sidebar component.
// - It includes navigation items like Dashboard, Manage Batch, My Earnings, Timetable, and Analytics.
// - "Manage Batch" has a dropdown with sub-items.
// - A toggle button allows opening/closing the sidebar on mobile devices.
// - The footer contains options for managing the profile and settings.
