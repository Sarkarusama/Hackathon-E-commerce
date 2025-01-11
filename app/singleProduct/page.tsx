"use client";
import Image from "next/image";
import React from "react";
import { GrCart } from "react-icons/gr";

const Single_product = () => {
  return (
    <section>
      <div className="w-full lg:my-12 mt-4 md:my-10 px-4 ">
        <div className="flex max-w-screen-xl flex-col md:flex-row lg:flex-row justify-between mx-auto lg:mb-20 md:mb-16 mb-10 gap-0 md:gap-3">
          <div>
            <Image
              src={require("@/public/single-product/product.png")}
              alt="chair"
              height={600}
              width={600}
              className="cursor-pointer  sm:w-[300px] lg:w-[600px]  md:w-[500px]"
            />
          </div>
          <div className="lg:w-[600px] sm:w-[300px] md:w-[400px] ">
            <p className="lg:text-[55px] w-full lg:w-[400px] text-[35px] md:w-full md:text-[30px] font-bold lg:mb-8 md:mb-3 mb-3 mt-3 lg:mt-0 md:mt-0">Library Stool Chair</p>
            <button className="bg-[#029FAE] text-white text-[14px] lg:text-[20px] md:text-[16px] px-3 py-2 rounded-full  hover:bg-[#02a0aece]">
              $20.00 USD
            </button>
            <div className="h-[2px] w-full bg-[#F0F2F3] lg:my-8 md:my-6 my-3"></div>
            <p className="lg:text-[22px] text-[16px] md:text-[16px] font-extralight text-[#636270]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
              adipiscing
            </p>
            <button className="text-[14px] lg:text-[18px] md:text-[16px] bg-[#029FAE] px-5 py-2 text-white rounded-md lg:mt-10 mt-3 md:mt-6 flex gap-2 items-center font-bold hover:bg-[#02a0aece]">
              <GrCart className="text-md" />
              Add to Cart
            </button>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between lg:mb-11 md:mb-10 mb-7">
            <p className="lg:text-3xl sm:text-[40px] md:text-3xl font-bold">FEATURED PRODUCTS</p>
            <p className="hover:border-b-2 cursor-pointer border-black ">View All</p>
          </div>
          <div className=" grid grid-col lg:grid-cols-5 md:grid-cols-3 cursor-pointer gap-5 lg:gap-8 md:gap-3 mx-auto">
            <div className="lg:w-[230px] w-[300px] md:w-[230px] mx-auto">
              <div>
                <Image
                  src={require("@/public/all-product/product_7.png")}
                  alt="chair"
                  height={240}
                  width={240}
                  className="w-[300px] lg:w-[240px] md:w-[230px]"
                />
              </div>
              <div className="flex justify-between mt-3 cursor-pointer">
                <p className="hover:text-[#029FAE]">Library Stool Chair</p>
                <p className="font-bold ">$99</p>
              </div>
            </div>
            <div className="lg:w-[230px] w-[300px]  md:w-[230px] mx-auto">
              <div>
                <Image
                  src={require("@/public/all-product/product_1.png")}
                  alt="chair"
                  height={240}
                  width={240}
                  className="w-[300px] lg:w-[240px] md:w-[230px]"
                />
              </div>
              <div className="flex justify-between mt-3">
                <p className="hover:text-[#029FAE] ">Library Stool Chair</p>
                <p className="font-bold">$99</p>
              </div>
            </div>
            <div className="lg:w-[230px] w-[300px] md:w-[230px] mx-auto">
              <div>
                <Image
                  src={require("@/public/all-product/product_12.png")}
                  alt="chair"
                  height={240}
                  width={240}
                  className="w-[300px] lg:w-[240px] md:w-[230px]"
                />
              </div>
              <div className="flex justify-between mt-3">
                <p className="hover:text-[#029FAE] ">Library Stool Chair</p>
                <p className="font-bold">$99</p>
              </div>
            </div>
            <div className="lg:w-[230px] w-[300px] md:w-[230px] mx-auto">
              <div>
                <Image
                  src={require("@/public/all-product/product_2.png")}
                  alt="chair"
                  height={240}
                  width={240}
                  className="w-[300px] lg:w-[240px] md:w-[230px]"
                />
              </div>
              <div className="flex justify-between mt-3">
                <p className="hover:text-[#029FAE] ">Library Stool Chair</p>
                <p className="font-bold">$99</p>
              </div>
            </div>
            <div className="lg:w-[230px] w-[300px] md:w-[230px] mx-auto">
              <div>
                <Image
                  src={require("@/public/all-product/product_9.png")}
                  alt="chair"
                  height={240}
                  width={240}
                  className="w-[300px] lg:w-[240px] md:w-[230px]"
                />
              </div>
              <div className="flex justify-between mt-3">
                <p className="hover:text-[#029FAE] ">Library Stool Chair</p>
                <p className="font-bold">$99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Single_product;

