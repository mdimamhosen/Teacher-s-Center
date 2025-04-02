import React from "react";
import CourseNavigation from "./CourseNavigation";
import FolderFileSection from "./FolderFileSection";

const MainContent = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md  min-h-[calc(100vh-4.1rem)] mx-auto w-full">
      <CourseNavigation />
      <FolderFileSection />
    </div>
  );
};

export default MainContent;
