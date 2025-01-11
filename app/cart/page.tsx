"use client";
import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
        <h2 className="font-bold text-3xl lg:text-3xl md:text-3xl mb-7 lg:mb-5 md:mb-5 mt-10 mx-auto text-center lg:text-left ">Bag</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="mb-20 items-center">
            <div className="lg:w-[900px] md:w-[700px] w-full flex ">
              <div>
                <Image
                  src={require("@/public/our_product/product_3.png")}
                  alt="chair"
                  height={150}
                  width={150}
                />
              </div>
              {/* price & detail */}
              <div className="lg:w-[600px] md:w-[500px] ml-5 lg:ml-10 md:ml-10">
                <p className="font-bold  mb-2 md:mb-6 lg:mb-6 flex flex-col lg:flex-row justify-between text-sm lg:text-[16px] md:flex-row">
                  Library Stool Chair{" "}
                  <span className="font-normal text-sm lg:text-[16px] mt-2 lg:mt-0">MRP:$99:00</span>
                </p>
                <p className="text-gray-400 mb-1 text-sm lg:text-[16px]">Ashen Slate/Cobalt Bliss</p>
                <span className="mr-10 lg:mr-14">Size L</span>
                <span>Quantity 1</span>
                {/* icons */}
                <div className="flex mt-6 lg:mt-8 hover:cursor-pointer items-center">
                  <CiHeart className="text-3xl mr-5 hover:text-[#02a0aece]" />
                  <RiDeleteBin6Line className="text-2xl hover:text-[#02a0aece]" />
                </div>
              </div>
            </div>
            <div className="h-[1px] sm:w-full lg:w-[800px] md:w-full bg-gray-300 mt-10"></div>
            <div className="lg:w-[900px] flex mt-10 mb-10">
              {/* image */}
              <div>
                <Image
                  src={require("@/public/our_product/product_5.png")}
                  alt="chair"
                  height={150}
                  width={150}
                />
              </div>
              {/* price-detail */}
              <div className="lg:w-[600px] md:w-[500px] ml-5 lg:ml-10 md:ml-10">
                <h3 className="font-bold  mb-2 md:mb-6 lg:mb-6 flex flex-col lg:flex-row justify-between text-sm lg:text-[16px] md:flex-row">
                  Library Stool Chair{" "}
                  <span className="font-normal text-sm lg:text-[16px] mt-2 lg:mt-0">MRP:$99:00</span>
                </h3>
                <p className="font-normal text-sm lg:text-[16px] mt-2 lg:mt-0 text-gray-400">Ashen Slate/Cobalt Bliss</p>
                <span className="mr-10 lg:mr-14">Size L</span>
                <span>Quantity 1</span>
                {/* icons */}
                <div className="flex mt-6 lg:mt-8 hover:cursor-pointer items-center">
                  <CiHeart className="text-3xl mr-5 hover:text-[#02a0aece] hover:cursor-pointer" />
                  <RiDeleteBin6Line className="text-2xl hover:text-[#02a0aece] hover:cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="h-[1px] sm:w-full md:w-full lg:w-[800px] bg-gray-300 mt-10"></div>
          </div>
          <div className="lg:w-[350px] md:w-[400px]">
            <p className="font-bold mb-5">Summary</p>
            <p className="flex justify-between mb-1">
              Subtotal <span>$198.00</span>
            </p>
            <p className="flex justify-between mb-1">
              Estimated Delivery & Handling<span>Free</span>
            </p>
            <div className="w-full h-[1px] bg-gray-300 my-4"></div>
            <p className="flex justify-between">
              Total <span>$198.00</span>
            </p>
            <div className="w-full h-[1px] bg-gray-300 my-4"></div>
            <button className="bg-[#029FAE] px-20 py-3 rounded-full w-full hover:bg-[#02a0aece] text-white">
              Member CheckOut
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
