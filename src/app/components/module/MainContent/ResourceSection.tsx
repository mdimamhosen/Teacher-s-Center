"use client";
import React, { useState } from "react";
import { FaEye, FaInfoCircle, FaRegFileAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const ResourceSection = () => {
  const [accessDropdown, setAccessDropdown] = useState(false);
  const [actionsDropdown, setActionsDropdown] = useState(false);

  return (
    <div className="p-4   rounded-lg border-b border-gray-300  w-full bg-white ">
      <div className="flex flex-col justify-between w-full">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between p-2 ">
          <div className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" />
            <FaRegFileAlt size={28} className="text-gray-700" />
            <span className="font-semibold text-lg  ">
              Chapter 2 revision notes.pdf
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Info Button */}
            <button className="text-gray-600 focus:outline-none">
              <FaInfoCircle size={24} className="text-black font-bold" />
            </button>

            {/* Access To Dropdown */}
            <div className="relative">
              <button
                className="bg-gray-100 px-4 py-2 rounded-md flex items-center gap-2"
                onClick={() => setAccessDropdown(!accessDropdown)}
              >
                <FaEye size={14} className="text-black" />
                <span>Access to</span>
                <IoIosArrowDown />
              </button>
              {accessDropdown && (
                <div className="absolute top-12 left-0 bg-white shadow-md rounded-md w-48 z-10">
                  <ul className="p-2">
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      Public
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      Private
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      Restricted
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Actions Dropdown */}
            <div className="relative">
              <button
                className="bg-gray-100 px-4 py-2 rounded-md flex items-center gap-2"
                onClick={() => setActionsDropdown(!actionsDropdown)}
              >
                <span>Actions</span>
                <IoIosArrowDown />
              </button>
              {actionsDropdown && (
                <div className="absolute top-12 left-0 bg-white shadow-md rounded-md w-48 z-10">
                  <ul className="p-2">
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      Edit
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      Delete
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      Move
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceSection;
