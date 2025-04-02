import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeadset } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";

const HeaderComponent = () => {
  return (
    <section className="bg-white min-w-screen   border-b border-gray-300  py-1 shadow-md">
      <header className="flex justify-between items-center   mx-auto     w-[90%]  ">
        <Link href={"/"} className="text-base md:text-lg lg:text-2xl ">
          Teacher&apos;s Center
        </Link>
        <div className="flex justify-evenly items-center  w-full max-w-[25rem]  ">
          <div className="flex gap-4 items-center  text-md lg:text-3xl px-2 border-r h-full  border-gray-800">
            <span className="hover:scale-105 transition-all duration-300 cursor-pointer">
              <FaHeadset />
            </span>
            <span className="shake-animation  hover:scale-105 transition-all duration-300 cursor-pointer">
              <MdNotificationsActive />
            </span>
          </div>
          <div className="flex gap-2 lg:gap-4 items-center  ">
            <Link href={"/"}>
              <Image
                src="https://i.postimg.cc/Kv7pntC9/icons8-person-80.png"
                alt="Logo"
                width={50}
                className="rounded-full w-10 h-10 "
                height={50}
                priority
              />
            </Link>
            <div className="text-base lg:text-lg">
              <h1 className="font-bold ">Sir 1</h1>
              <div className="text-gray-900 text-sm lg:text-lg">
                <span className="lg:border-r border-gray-400  mr-1">
                  Chemistry{" "}
                </span>
                <span className="hidden lg:block"> Level 3</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default HeaderComponent;

//! This is the header section of the application.
// - Displays the title "Teacher's Center" with a link to the homepage.
// - Includes icons for support (FaHeadset) and notifications (MdNotificationsActive).
// - Shows a user profile section with an image, name, subject, and level.
// - Uses responsive styling for different screen sizes.
