import { useState } from "react";
import { FaArrowLeft, FaEye } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const BreadcrumbSection = () => {
  const [accessDropdown, setAccessDropdown] = useState(false);
  const [actionsDropdown, setActionsDropdown] = useState(false);

  return (
    <div className="flex items-center justify-between w-full py     ">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2">
        <button
          className="p-2 rounded-full bg-black text-white cursor-pointer"
          title="<- Go Back"
        >
          <FaArrowLeft size={14} />
        </button>
        <span className="text-gray-500 cursor-pointer hover:underline">
          Chapter 1 &gt;
        </span>
        <a href="#" className="text-gray-500 hover:underline cursor-pointer">
          Chapter 1.1
        </a>
        <span className="text-gray-500 cursor-pointer">&gt;</span>
        <span className="font-bold cursor-pointer">
          <label className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-md">
            <input type="checkbox" />
            <span className="font-bold">Chapter 1</span>
          </label>
        </span>
      </div>

      {/* Actions Section */}
      <div className="flex items-center space-x-4">
        {/* Access To Dropdown */}
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
      </div>
    </div>
  );
};

export default BreadcrumbSection;
