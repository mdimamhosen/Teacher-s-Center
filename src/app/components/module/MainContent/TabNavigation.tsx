import { useState } from "react";
import {
  FaSearch,
  FaPlus,
  FaEdit,
  FaTrash,
  FaSlidersH,
  FaSyncAlt,
} from "react-icons/fa";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Content");

  return (
    <div className="flex items-center justify-between px-4 py-2  border-gray-500 border-b rounded-t-2xl bg-white">
      {/* Tabs Section */}
      <div className="flex space-x-6 text-lg font-medium">
        {["Content", "Course Details", "Revision"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab === tab
                ? "font-bold border-b-4 border-black"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Actions Section */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center text-gray-500 hover:text-black">
          <FaPlus size={16} className="mr-1" />{" "}
          <span className="italic">Add main Folder</span>
        </button>

        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border px-2 py-1 rounded-md text-sm w-28 focus:outline-none focus:ring"
          />
          <FaSearch
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={14}
          />
        </div>

        <button className="text-gray-500 hover:text-black">
          <FaEdit size={16} />
        </button>
        <button className="text-gray-500 hover:text-black">
          <FaTrash size={16} />
        </button>
        <button className="text-gray-500 hover:text-black">
          <FaSyncAlt size={16} />
        </button>
        <button className="text-gray-500 hover:text-black">
          <FaSlidersH size={16} />
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;
