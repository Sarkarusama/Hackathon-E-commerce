"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section>
      <div className="w-full px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col justify-between md:flex-row items-center  bg-[#F0F2F3]  md:px-20 py-10 md:py-20">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <p className="text-[14px] lg:text-[20px]  md:text-[16px] text-[#636270] mb-4 lg:mb-8">
              WELCOME TO CHAIRY
            </p>
            <p className="text-[20px] md:text-[28px] lg:text-[50px] font-bold text-[#272343] leading-[24px] sm:leading-[30px] md:leading-[40px] lg:leading-[50px] mb-4 lg:mb-8">
              Best Furniture Collection for your interior.
            </p>
            <Link href={"/cart"}>
            <button className="bg-[#029FAE] text-white px-5 py-2 text-[12px] sm:text-[14px] flex gap-4 items-center rounded-md mx-auto md:mx-0 mt-4 hover:bg-[#02a0aece]">
              
              Shop Now <FaArrowRightLong />
            </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="md:w-1/3 mt-4 md:mt-0 md:ml-12">
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


