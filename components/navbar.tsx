"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { HiMenu } from "react-icons/hi"; 
import { IoClose } from "react-icons/io5"; 
import { CgDanger } from "react-icons/cg";


import {
  IoCartOutline,
  IoCheckmark,
  IoChevronDownSharp,
} from "react-icons/io5";




const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50">
      {/* nav-1-offer */}
      <div className=" bg-[#272343]">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center max-w-screen-xl mx-auto px-4 py-2 lg:px-0 ">
          {/* Offer Text */}
          <div className="flex justify-between items-center w-full md:w-auto">
            <p className="text-center text-[12px] lg:text-[13px] text-[#FFFFFF] flex items-center gap-2">
              <IoCheckmark className="text-sm lg:text-lg" />
              Free shipping on all orders over $50
            </p>
            {/* Dropdown Trigger for Small Screens */}
            <div
              className="flex md:hidden items-center gap-1 cursor-pointer text-white ml-4"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <IoChevronDownSharp className="text-base" />
            </div>
          </div>
          {/* Links for Small Screen Dropdown */}
          {isDropdownOpen && (
            <ul className="md:hidden mt-2 bg-[#272343] text-white text-[12px] rounded shadow-lg py-2 w-full">
              <li className="flex items-center gap-1 px-4 py-2 hover:bg-gray-700">
                Eng <IoChevronDownSharp />
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <Link href={"/faq"}>Faqs</Link>
              </li>
              <li className="flex items-center gap-1 px-4 py-2 hover:bg-gray-700">
                <CgDanger className="text-[16px]" />
                Need Help
              </li>
            </ul>
          )}
          {/* Links for Large and Medium Screens */}
          <div className="hidden md:block">
            <ul className="flex flex-wrap justify-center lg:justify-end gap-5 text-[12px] lg:text-[13px] text-[#FFFFFF]">
              <li className="flex items-center gap-1 hover:cursor-pointer hover:text-gray-300">
                Eng
                <IoChevronDownSharp />
              </li>
              <li className="hover:cursor-pointer hover:text-gray-300">
                <Link href={"/faq"}>Faqs</Link>
              </li>
              <li className="flex items-center gap-1 hover:cursor-pointer hover:text-gray-300">
                <CgDanger className="text-[16px] lg:text-[18px]" />
                Need Help
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* nav-2-logo */}
      <div className=" bg-[#F0F2F3]">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4  py-2 md:py-4 lg:px-0 ">
          {/* Logo Section */}
            <Link href={"/"}>
          <div className="flex items-center gap-2 font-bold text-xl sm:text-2xl lg:text-3xl">
            <Image
              src={require("@/public/logo/logo-icon.svg")}
              alt="comforty-logo"
              className="w-8 sm:w-10 lg:w-12"
            />
            <p className="hover:cursor-pointer sm:text-xl lg:text-3xl sm:py-1">
              Comforty
            </p>
          </div>
            </Link>

          {/* Cart Button */}
          <div>
            <Link href={"/cart"}>
              <button  className="flex items-center bg-white px-2 py-2 gap-1 rounded-md hover:bg-gray-50 text-sm sm:text-base lg:text-lg">
                <IoCartOutline className="text-lg sm:text-xl lg:text-2xl" />
                Cart
                {/* <span className="w-5 h-5 rounded-full text-center bg-[#007580] text-white md:text-sm sm:text-xs lg:text-sm">
                  
                </span> */}
              </button>
            </Link>
            {/* <UserButton/> */}
          </div>
        </div>
      </div>
      {/* nav-3-link-contact */}
      <div className=" bg-white border-b-2">
        <div className="flex flex-col lg:flex-row w-full justify-between items-center max-w-screen-xl mx-auto px-4  py-4 lg:py-6 lg:px-0 ">
          {/* Mobile Navigation Menu */}
          <div
            className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} w-full`}
          >
            <ul className="flex flex-col gap-6 text-[#636270] text-center">
              <li className="hover:text-[#029FAE] cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#029FAE] cursor-pointer">
                <Link href={"/singleProduct"}>Shop</Link>
              </li>
              <li className="hover:text-[#029FAE] cursor-pointer">
                <Link href="/product">Product</Link>
              </li>
              
              <li className="hover:text-[#029FAE] cursor-pointer">
                <Link href={"/about"}>About</Link>
              </li>
            </ul>
          </div>

          {/* Hamburger Menu Button */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#636270]"
            >
              {isMenuOpen ? (
                <IoClose className="text-2xl" />
              ) : (
                <HiMenu className="text-2xl" />
              )}
            </button>

            {/* Contact Info (Visible on all screens) */}
            <div className="text-[#636270]">
              <p className="whitespace-nowrap">
                <Link href={"/contact"}>Contact</Link>:{" "}
                <span className="font-bold">(808) 555-0111</span>
              </p>
            </div>
          </div>

          {/* Desktop View: Navigation links visible without hamburger */}
          <div className="hidden lg:flex w-full justify-between items-center">
            <ul className="flex gap-6 text-[#636270]">
              <li className="hover:text-[#029FAE] cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#029FAE] cursor-pointer">
                <Link href={"/cart"}>Shop</Link>
              </li>
              <li className="hover:text-[#029FAE] cursor-pointer">
                <Link href="/product">Product</Link>
              </li>
              
              <li className="hover:text-[#029FAE] cursor-pointer">
                <Link href={"/about"}>About</Link>
              </li>
            </ul>

            {/* Contact Info on Desktop */}
            <div className="text-[#636270]">
              <p className="whitespace-nowrap">
                <Link href={"/contact"}>Contact</Link>:
                <span className="font-bold">(808) 555-0111</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Navbar;

