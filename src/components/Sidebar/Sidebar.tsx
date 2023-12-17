"use client";
import { useState } from "react";
import sidebarToggle from "@/../public/assets/Sidebar/sidebarToggle.svg";
import Image from "next/image";
export default function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebarHandler = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div
      id="docs-sidebar"
      className={`hs-collapse ${
        isSidebarOpen
          ? "hs-collapse-open: -translate-x-1/4"
          : "-translate-x-full"
      } bg-light-blue fixed duration-300 left-[70px] sm:left-[120px] top-0  bottom-0 z-10 w-[115%] sm:w-[480px] border-e border-gray-200 pb-10 overflow-y-auto`}
      aria-labelledby="hs-basic-collapse"
    >
      <button
        type="button"
        className={`transform duration-300 transition ${
          isSidebarOpen ? "rotate-180 sm:right-[15px]" : "rotate-0"
        } z-10 fixed  top-[75px] sm:top-[130px]  sm:right-[28px] hs-collapse-toggle text-gray-500 hover:text-gray-600 p-3 mt-3`}
        onClick={toggleSidebarHandler}
        aria-label="Toggle navigation"
      >
        <Image
          src={sidebarToggle}
          alt="sidebar-toggle"
          width={39}
          height={32}
        ></Image>
        <span className="sr-only">Toggle Navigation</span>
        {/* Add your sidebar-toggle image or icon here */}
      </button>
      {/* Sidebar content */}
      {/* ... */}
    </div>
  );
}
