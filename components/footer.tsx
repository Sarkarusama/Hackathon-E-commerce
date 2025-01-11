"use client";
import Image from "next/image";
import React from "react";
import { BiLogoMastercard } from "react-icons/bi";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    
  <footer>
      <div className="w-full border-y-2 border-gray-100 py-16 px-4 ">
      <div className="flex max-w-screen-xl justify-between mx-auto gap-[50px] flex-col lg:flex-row  ">
        
        <div className="logo ">
          <div className="flex items-center gap-2">
            <Image
              src={require("@/public/logo/logo-icon.svg")}
              alt="logo-comforty"
            />
            <span className="text-3xl font-bold text-[#272343] hover:cursor-pointer">Comforty</span>
          </div>
          <p className="text-[#636270] mt-5 mr-5">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus{" "}
          </p>
          <div className="flex gap-5 text-2xl mt-6  text-[#636270] ">
            <FaFacebook className="hover:border-[#029FAE] hover:border-2 rounded-full cursor-pointer " />
            <FaTwitter className="hover:border-[#029FAE] hover:border-2 rounded-full cursor-pointer "/>
            <RiInstagramFill className="hover:border-[#029FAE] hover:border-2 rounded-full cursor-pointer "/>
            <IoLogoPinterest className="hover:border-[#029FAE] hover:border-2 rounded-full cursor-pointer "/>
            <FaYoutube className="hover:border-[#029FAE] hover:border-2 rounded-full cursor-pointer "/>
          </div>
        </div>
        <div className="category w-[300px]">
          <p className="text-[#636270] mb-3">CATEGORY</p>
          <ul className="text-[#272343] cursor-pointer">
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Sofa</li>
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Armchair</li>
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Wing Chair</li>
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Desk Chair</li>
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Wodden Chair</li>
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Park Chair</li>
          </ul>
        </div>
        <div className="support w-[230px]">
          <p className="text-[#636270] mb-3">SUPPORT</p>
          <ul className="text-[#272343] cursor-pointer">
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Help & Support</li>
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Terms & Conditions</li>
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Privacy Policy</li>
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Help</li>
          </ul>
        </div>
        <div className="subscribe ">
          <p className="text-[#636270] mb-3">NEWSLETTER</p>
          <div className="flex gap-2 lg:gap-2 md:gap-2 mb-3 justify-between">
          <input type="email" placeholder="Your Email "  className="py-2 px-6 w-full lg:w-full md:w-full border-2 border-gray-200 rounded-md" />
          <button className="bg-[#029FAE] text-white px-6 py-2 rounded-md hover:bg-[#02a0aece]">Subscribe</button>
          </div>
          <p className="text-[#636270] text-left lg:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
        </div>
      </div>
      </div>
      <div className="max-w-screen-xl h-[60px] flex items-center justify-between mx-auto text-[14px] lg:text-[16px] md:[16px] text-[#636270] flex-col md:flex-row lg:flex-row px-4 lg:px-0 ">
        <p className="flex ">@ 2021 - Blogy - Designed & Develop by <span className="font-bold"> Zakirsoft</span></p>
        <div className="flex gap-5 hover:cursor-pointer">
          <Image src={require("@/public/foot-icons/mastercard_1.png")} alt="mastercard-logo"/>
          <Image src={require("@/public/foot-icons/paypal_2.png")} alt="paypal-logo"/>
          <Image src={require("@/public/foot-icons/american_3.png")} alt="american-logo"/>
          <Image src={require("@/public/foot-icons/visa_4.png")} alt="visa-logo"/>
        </div>
        
      </div>
    </footer> 

  
  );
};

export default Footer;

{/* <footer>
      <div className="w-full border-y-2 border-gray-100 py-16 ">
      <div className="flex w-[1250px] justify-between mx-auto gap-[50px]  ">
        
        <div className="logo ">
          <div className="flex items-center gap-2">
            <Image
              src={require("@/public/logo/logo-icon.svg")}
              alt="logo-comforty"
            />
            <span className="text-3xl font-bold text-[#272343] hover:cursor-pointer">Comforty</span>
          </div>
          <p className="text-[#636270] mt-5 mr-5">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus{" "}
          </p>
          <div className="flex gap-5 text-2xl mt-6  text-[#636270] ">
            <FaFacebook className="hover:border-[#029FAE] hover:border-2 rounded-full cursor-pointer " />
            <FaTwitter className="hover:border-[#029FAE] hover:border-2 rounded-full cursor-pointer "/>
            <RiInstagramFill className="hover:border-[#029FAE] hover:border-2 rounded-full cursor-pointer "/>
            <IoLogoPinterest className="hover:border-[#029FAE] hover:border-2 rounded-full cursor-pointer "/>
            <FaYoutube className="hover:border-[#029FAE] hover:border-2 rounded-full cursor-pointer "/>
          </div>
        </div>
        <div className="category w-[300px]">
          <p className="text-[#636270] mb-3">CATEGORY</p>
          <ul className="text-[#272343] cursor-pointer">
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Sofa</li>
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Armchair</li>
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Wing Chair</li>
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Desk Chair</li>
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Wodden Chair</li>
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Park Chair</li>
          </ul>
        </div>
        <div className="support w-[230px]">
          <p className="text-[#636270] mb-3">SUPPORT</p>
          <ul className="text-[#272343] cursor-pointer">
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Help & Support</li>
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Terms & Conditions</li>
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Privacy Policy</li>
            <li className="hover:text-[#029FAE] hover:border-b-2 border-[#029FAE]">Help</li>
          </ul>
        </div>
        <div className="subscribe ">
          <p className="text-[#636270] mb-3">NEWSLETTER</p>
          <div className="flex gap-2 mb-3">
          <input type="email" placeholder="Your Email "  className="py-2 px-6 border-2 border-gray-200 rounded-md" />
          <button className="bg-[#029FAE] text-white px-6 py-2 rounded-md hover:bg-[#02a0aece]">Subscribe</button>
          </div>
          <p className="text-[#636270]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
        </div>
      </div>
      </div>
      <div className="w-[1250px] h-[60px] flex items-center justify-between mx-auto text-[#636270]">
        <p >@ 2021 - Blogy - Designed & Develop by <span className="font-bold"> Zakirsoft</span></p>
        <div className="flex gap-5 hover:cursor-pointer">
          <Image src={require("@/public/foot-icons/mastercard_1.png")} alt="mastercard-logo"/>
          <Image src={require("@/public/foot-icons/paypal_2.png")} alt="paypal-logo"/>
          <Image src={require("@/public/foot-icons/american_3.png")} alt="american-logo"/>
          <Image src={require("@/public/foot-icons/visa_4.png")} alt="visa-logo"/>
        </div>
        
      </div>
    </footer> */}