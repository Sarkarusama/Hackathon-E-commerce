"use client";
import Image from "next/image";
import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { PiPlantFill } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";

const About = () => {
  return (
    <section>
      <div>
        {/* about us-comforty */}
        <div className="w-full max-w-screen-xl mx-auto my-5 px-4 md:px-4 lg:px-0">
          <div className="flex flex-col md:flex-row justify-between mx-auto gap-5">
            <div className="w-full lg:h-[530px] lg:w-[615px] bg-[#007580] lg:p-20 p-10 md:p-10">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-5">
                About Us-Comforty
              </p>
              <p className="text-white font-extralight text-[14px] md:text-[14px] lg:text-[18px]">
                At Comforty, we believe that the right chair can transform your
                space and elevate your comfort. Specializing in ergonomic
                design, premium materials, and modern aesthetics, we craft
                chairs that seamlessly blend style with functionality.
              </p>
              <button className="px-5 py-3 text-white bg-[#029FAE] mt-10 lg:mt-40">
                View Collection
              </button>
            </div>
            <div className="w-full md:w-[615px] flex justify-center">
              <Image
                src={require("@/public/about-popular/product_1.png")}
                height={530}
                width={615}
                alt="chair"
                className="w-full h-[530px] max-w-[400px] md:max-w-full"
              />
            </div>
          </div>
          {/* brand difference */}
          <div>
            <p className="text-center text-2xl md:text-3xl font-bold mt-20">
              What makes our Brand Different
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
              <div className="bg-[#F0F2F3] p-10 text-[#029FAE] hover:scale-105 duration-300 cursor-pointer">
                <p>
                  <TbTruckDelivery className="mb-3 text-2xl" />
                </p>
                <p className="mb-3">Next day as standard</p>
                <p className="mb-3">
                  Order before 3pm and get your order the next day as standard
                </p>
              </div>
              <div className="bg-[#F0F2F3] p-10 text-[#029FAE] hover:scale-105 duration-300 cursor-pointer">
                <p>
                  <CiCircleCheck className="mb-3 text-2xl" />
                </p>
                <p className="mb-3">Handmade craftsmanship</p>
                <p className="mb-3">
                  Handmade crafted goods made with real passion and
                  craftsmanship
                </p>
              </div>
              <div className="bg-[#F0F2F3] p-10 text-[#029FAE] hover:scale-105 duration-300 cursor-pointer">
                <p>
                  <Image
                    src={require("@/public/purchase/Purchase.png")}
                    alt="icon"
                    className="mb-3"
                  />
                </p>
                <p className="mb-3">Affordable prices</p>
                <p className="mb-3">
                  For our materials and quality you won’t find better prices
                  anywhere
                </p>
              </div>
              <div className="bg-[#F0F2F3] p-10 text-[#029FAE] hover:scale-105 duration-300 cursor-pointer">
                <p>
                  <PiPlantFill className="mb-3 text-2xl" />
                </p>
                <p className="mb-3">Eco-friendly materials</p>
                <p className="mb-3">
                  We use 100% recycled to ensure our footprint is more
                  manageable
                </p>
              </div>
            </div>
          </div>
          {/* popular-products */}
          <div>
            <div className="mx-auto mt-20 mb-10">
              <p className="text-3xl text-center lg:text-left  font-bold">Our Popular Products</p>
            </div>

            <div className="flex flex-col  gap-6 justify-between lg:flex-row items-center ">
              <div className="hover:scale-105 duration-300 cursor-pointer shadow-md p-2  rounded-md">
                <Image
                  src={require("@/public/about-popular/large.png")}
                  alt="sofa"
                  width={650}
                  height={350}
                  className="w-[650px] h-auto lg:h-[350px] mb-3 rounded-md"
                />
                <p className="mb-1 text-center lg:text-left ">The Poplar suede sofa</p> <p className="text-center lg:text-left mb-4 lg:mb-0">$99.00</p>
              </div>
              <div className="flex gap-6 flex-col lg:flex-row md:flex-row items-center ">
              <div className="hover:scale-105 duration-300 cursor-pointer shadow-md p-2 rounded-md">
                <Image
                  src={require("@/public/about-popular/Photo.png")}
                  alt="sofa"
                  width={300}
                  className="w-[300px] mb-3 rounded-md"
                />
                <p className="mb-1 text-center lg:text-left">The Dandy Chair</p>
                <p className="text-center lg:text-left ">$99.00</p>
              </div>
              <div className="hover:scale-105 duration-300 cursor-pointer shadow-md p-2 rounded-md">
                <Image
                  src={require("@/public/about-popular/Photo (1).png")}
                  alt="sofa"
                  width={300}
                  className="w-[300px] mb-3 rounded-md"
                />
                <p className="mb-1 text-center lg:text-left">The Dandy Chair</p>
                <p className="text-center lg:text-left">$99.00</p>
              </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
// [#636270] text
// [#029FAE] button
// [#272343] heading
// [#F0F2F3] bg

