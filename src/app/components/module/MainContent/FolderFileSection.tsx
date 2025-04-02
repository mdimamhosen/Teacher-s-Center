"use client";

import { FaPaste, FaPlus, FaUpload } from "react-icons/fa";
import BreadcrumbSection from "./BreadcrumbSection";
import ChapterSection from "./ChapterSection";
import TabNavigation from "./TabNavigation";
import ResourceSection from "./ResourceSection";

const ActionButtons = () => (
  <div className="grid grid-cols-5 gap-4 mt-4 px-4">
    <button className="border border-dashed cursor-pointer transition-all duration-300 ease-linear p-2 flex gap-2 items-center justify-center rounded-lg hover:bg-gray-100">
      <FaPlus /> Add Folder
    </button>
    <button className="border border-dashed cursor-pointer transition-all duration-300 ease-linear p-2 flex gap-2 items-center justify-center rounded-lg hover:bg-gray-100">
      <FaUpload /> Upload File
    </button>
    <button className="border border-dashed cursor-pointer transition-all duration-300 ease-linear p-2 flex gap-2 items-center justify-center rounded-lg hover:bg-gray-100">
      <FaUpload /> Upload Folder
    </button>
    <button className="border border-dashed cursor-pointer transition-all duration-300 ease-linear p-2 flex gap-2 items-center justify-center rounded-lg hover:bg-gray-100">
      <FaPlus /> Add Text
    </button>
    <button className="border border-dashed cursor-pointer transition-all duration-300 ease-linear p-2 flex gap-2 items-center justify-center rounded-lg hover:bg-gray-100">
      <FaPaste /> Paste
    </button>
  </div>
);

const FolderFileSection = () => {
  return (
    <div className="     shadow-2xl  ">
      <TabNavigation />
      <div className="p-6 bg-white      w-full   mx-auto">
        <BreadcrumbSection />
        <div className="mt-4 space-y-2 border-t border-r border-l pb-4 border-gray-200">
          {/* <FolderItem name="Chapter 1.1" /> */}
          <ChapterSection />
          <ResourceSection />
          <ActionButtons />{" "}
        </div>
      </div>{" "}
    </div>
  );
};

export default FolderFileSection;
