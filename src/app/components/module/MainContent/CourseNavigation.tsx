"use client";

import { useState } from "react";
import { FaDownload, FaTrashAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
import CourseActions from "./CourseActions";

const CourseNavigation = () => {
  const [activeTab, setActiveTab] = useState("Materials");
  const [courseDropdown, setCourseDropdown] = useState(false);
  const [batchDropdown, setBatchDropdown] = useState(false);

  const tabs = [
    "Students",
    "Announcements",
    "Materials",
    "Homework",
    "Attendance",
    "Discussion",
  ];

  return (
    <div className="p-4 rounded-lg     max-w-7xl mx-auto w-full">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        {/* Course Selection */}
        <div className="flex gap-4 relative w-full sm:w-auto">
          {/* Course Dropdown */}
          <div className="relative w-full sm:w-auto">
            <button
              className="bg-white px-4 py-2 rounded-md shadow-md flex justify-between items-center gap-2 w-full sm:w-auto"
              onClick={() => setCourseDropdown(!courseDropdown)}
            >
              Course for Chemistry <IoIosArrowDown />
            </button>
            {courseDropdown && (
              <div className="absolute top-12 left-0 bg-white shadow-md rounded-md w-full sm:w-48 z-10">
                <ul className="p-2">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Physics
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Mathematics
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Biology
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Batch Dropdown */}
          <div className="relative w-full sm:w-auto">
            <button
              className="bg-white px-4 py-2 rounded-md shadow-md flex justify-between items-center gap-2 w-full sm:w-auto"
              onClick={() => setBatchDropdown(!batchDropdown)}
            >
              All Batches <IoIosArrowDown />
            </button>
            {batchDropdown && (
              <div className="absolute top-12 left-0 bg-white shadow-md rounded-md w-full sm:w-48 z-10">
                <ul className="p-2">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Batch A
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Batch B
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Batch C
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <CourseActions />
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
        <div
          className="bg-black h-2 rounded-full"
          style={{ width: "50%" }}
        ></div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center border-b border-gray-300 justify-between">
        <div className="flex gap-4 items-center overflow-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2  hover:text-blue-500 transition-all ${
                activeTab === tab
                  ? "border-b-4 border-blue-500 text-blue-500 font-bold"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
          <IoEllipsisHorizontalCircle
            className="ml-4 cursor-pointer"
            size={24}
          />
        </div>

        {/* Right Side Icons */}
        <div className="flex justify-end gap-4">
          <FaTrashAlt
            className="cursor-pointer text-gray-600 hover:text-red-500"
            size={18}
          />
          <FaDownload
            className="cursor-pointer text-gray-600 hover:text-blue-500"
            size={18}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseNavigation;
