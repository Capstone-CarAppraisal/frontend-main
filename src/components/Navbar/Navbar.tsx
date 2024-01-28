"use client";
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import Link from "next/link";
import Image from "next/image";
import questionIcon from "@/../public/assets/Nav/questionIcon.svg";
import homeLogo from "@/../public/assets/Nav/homeLogo.svg";
import closeIcon from "@/../public/assets/Nav/closeIcon.svg";

export default function Navbar() {
  const [isNavOpen, setNavIsOpen] = useState(false);

  const handleToggleNavMenu = () => {
    setNavIsOpen((prev) => !prev);
  };

  return (
    <div className="z-50 fixed top-0 right-0 left-0">
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-dark-blue text-sm py-4">
        <nav
          className="w-full mx-auto px-6 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-row space-x-3">
              <div>
                <Link
                  className="flex flex-row space-x-3 font-worksans lg:ml-[165px] text-4xl font-black text-white"
                  href="/"
                >
                  CAR
                  <span className="text-rose">APP</span>
                  <div className="w-[50px]">
                    <Image
                      src={homeLogo}
                      alt="home-logo"
                      width={50}
                      height={50}
                    ></Image>
                  </div>
                </Link>
              </div>
            </div>

            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
                onClick={handleToggleNavMenu}
              >
                {isNavOpen ? (
                  <Image src={closeIcon} alt="close-icon"></Image>
                ) : (
                  <Hamburger />
                )}
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block "
          >
            <div className="font-sans font-semibold flex flex-col align-center justify-center h-screen sm:h-[65px] text-xl flex-col items-center gap-y-20 gap-x-8 text-white mt-5 sm:flex-row sm:items-center sm:space-x-3 sm:justify-end sm:mt-0 sm:ps-5 sm:mr-8">
              <Link className="" href="/about-us">
                เกี่ยวกับเรา
              </Link>
              <Link className="flex flex-row items-center" href="#">
                วิธีใช้งาน
                <span className="pl-2">
                  <Image src={questionIcon} alt="question-icon"></Image>
                </span>
              </Link>
              <div className="sm:hidden">
                <Link href="#">ประเมินราคา</Link>
              </div>
              <div className="hidden sm:block">
                <Link href="/estimate">
                  <button
                    type="button"
                    className="h-[51px] py-3 px-6 inline-flex text-xl items-center gap-x-2 text-sm rounded-2xl bg-blue text-white"
                  >
                    ประเมินราคา
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
