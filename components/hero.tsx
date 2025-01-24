"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section>
      <div className="w-full px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col justify-between md:flex-row items-center  bg-[#F0F2F3]  md:px-20 py-12 md:py-20">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <p className="text-[12px] sm:text-[14px] md:text-[16px] text-[#636270] mb-6">
              WELCOME TO CHAIRY
            </p>
            <p className="text-[16px] sm:text-[18px] md:text-[28px] lg:text-[50px] font-bold text-[#272343] leading-[24px] sm:leading-[30px] md:leading-[40px] lg:leading-[50px] mb-6">
              Best Furniture Collection for your interior.
            </p>
            <button className="bg-[#029FAE] text-white px-5 py-2 text-[12px] sm:text-[14px] flex gap-4 items-center rounded-md mx-auto md:mx-0 mt-8 hover:bg-[#02a0aece]">
              Shop Now <FaArrowRightLong />
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/3 mt-8 md:mt-0 md:ml-12">
            <Image
              src={require("@/public/hero/product-image@2x.png")}
              alt="chair"
              width={300} 
              height={300}
              className="hover:cursor-pointer mx-auto w-full max-w-[300px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


