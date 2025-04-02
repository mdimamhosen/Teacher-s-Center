import { useState } from "react";
import { FaEye, FaFolder, FaInfoCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function ChapterSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [accessDropdown, setAccessDropdown] = useState(false);
  const [actionsDropdown, setActionsDropdown] = useState(false);

  return (
    <div className="p-4   rounded-lg   w-full flex  gap-2 bg-white border-b border-gray-300  ">
      <div
        className={`${
          isOpen
            ? " flex flex-col justify-between   w-[70%] "
            : "flex flex-col justify-between   w-full"
        } `}
      >
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between p-2 ">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {" "}
            <input type="checkbox" />
            <FaFolder className="text-gray-700" />
            <span className="font-semibold text-lg underline">
              <span> Chapter 1.1</span>
            </span>
          </div>
          <div className="flex items-center gap-3  ">
            <button className="text-gray-600 focus:outline-none">
              <FaInfoCircle size={24} className="text-black font-bold" />
            </button>
            <button className="text-gray-600 focus:outline-none">
              <div className="relative w-full sm:w-auto">
                <button
                  className="bg-gray-100 px-4 py-2 rounded-md flex items-center gap-2 w-full sm:w-auto"
                  onClick={() => setAccessDropdown(!accessDropdown)}
                >
                  <FaEye size={14} className="text-black" />
                  <span>Access to</span>
                  <IoIosArrowDown />
                </button>
                {accessDropdown && (
                  <div className="absolute top-12 left-0 bg-white shadow-md rounded-md w-full sm:w-48 z-10">
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
            </button>
            <button className="text-gray-600 focus:outline-none">
              {/* Actions Dropdown */}
              <div className="relative w-full sm:w-auto">
                <button
                  className="bg-gray-100 px-4 py-2 rounded-md flex items-center gap-2 w-full sm:w-auto"
                  onClick={() => setActionsDropdown(!actionsDropdown)}
                >
                  <span>Actions</span>
                  <IoIosArrowDown />
                </button>
                {actionsDropdown && (
                  <div className="absolute top-12 left-0 bg-white shadow-md rounded-md w-full sm:w-48 z-10">
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
            </button>
          </div>
        </div>

        <p className="text-gray-500 text-sm text-right mt-4 py-2">
          <span className="text-black font-bold ">Visible to:</span> Batch 1,
          Batch 2, Batch 3, For both online & physical students
        </p>
      </div>
      {isOpen && (
        <div
          className=" border-l border-gray-200 pl-3 text-sm text-gray-500 mt-2   w-[30%]
        "
        >
          <div className="space-y-2">
            <p>
              <strong>Created on:</strong> 25/02/2025, 10:35 PM
            </p>
            <p>
              <strong>Created by:</strong> Sir
            </p>
            <p>
              <strong>Last Modified:</strong> Friday, 25/02/2025, 10:35 PM
            </p>
            <p>
              <strong>Last Modified by:</strong> Sir
            </p>
            <p>
              <strong>Kind:</strong> PDF Document
            </p>
            <p>
              <strong>Size:</strong> 23 MB
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
