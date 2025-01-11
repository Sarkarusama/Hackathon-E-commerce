"use client";
import Image from "next/image";
import React from "react";

const Top_categories = () => {
  return (
    <section>
  <div className="px-4">
    <h2 className="max-w-screen-xl mx-auto text-3xl font-bold mt-20 mb-10 text-[#272343] text-center lg:text-start ">
      Top Categories
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-screen-xl">
      {/* Card 1 */}
      <div className="relative">
        <Image
          src={require("@/public/top_category/image8@2x.png")}
          alt="chair"
          height={400}
          width={400}
          className="hover:cursor-pointer w-full object-cover"
        />
        <div className="h-[80px] w-full bg-black opacity-70 absolute bottom-0">
          <div className="text-white my-[18px] ml-4">
            <p className="font-bold">Wings Chair</p>
            <p className="font-extralight text-[14px]">3584 Products</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative">
        <Image
          src={require("@/public/top_category/image9@2x.png")}
          alt="chair"
          height={400}
          width={400}
          className="hover:cursor-pointer w-full object-cover"
        />
        <div className="h-[80px] w-full bg-black opacity-70 absolute bottom-0">
          <div className="text-white my-[18px] ml-4">
            <p className="font-bold">Wooden Chair</p>
            <p className="font-extralight text-[14px]">157 Products</p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative">
        <Image
          src={require("@/public/top_category/image10@2x.png")}
          alt="chair"
          height={400}
          width={400}
          className="hover:cursor-pointer w-full object-cover"
        />
        <div className="h-[80px] w-full bg-black opacity-70 absolute bottom-0">
          <div className="text-white my-[18px] ml-4">
            <p className="font-bold">Desk Chair</p>
            <p className="font-extralight text-[14px]">154 Products</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Top_categories;

{/* <section >
<div>
  <h2 className="max-w-screen-xl mx-auto text-3xl font-bold mt-20 mb-10 text-[#272343] text-center lg:text-start ">
    Top Categories
  </h2>
  <div className="flex mx-auto max-w-screen-xl flex-col md:flex-row lg:flex-row justify-between">
    <div className="relative">
      <Image
        src={require("@/public/top_category/image8@2x.png")}
        alt="chair"
        height={400}
        width={400}
        className='hover:cursor-pointer'
      />
      <div className="h-[80px] w-full bg-black opacity-70 absolute bottom-0 ">
        <div className="text-white my-[18px] ml-4">
          <p className="font-bold">Wings Chair</p>
          <p className="font-extralight text-[14px]">3584 Products</p>
        </div>
      </div>
    </div>
    <div className="relative">
      <Image
        src={require("@/public/top_category/image9@2x.png")}
        alt="chair"
        height={400}
        width={400}
        className='hover:cursor-pointer'
      />
      <div className="h-[80px] w-full bg-black opacity-70 absolute bottom-0 ">
        <div className="text-white my-[18px] ml-4">
          <p className="font-bold">Wooden Chair</p>
          <p className="font-extralight text-[14px]">157 Products</p>
        </div>
      </div>
    </div>
    <div className="relative">
      <Image
        src={require("@/public/top_category/image10@2x.png")}
        alt="chair"
        height={400}
        width={400}
        className='hover:cursor-pointer'
      />
      <div className="h-[80px] w-full bg-black opacity-70 absolute bottom-0 ">
        <div className="text-white my-[18px] ml-4">
          <p className="font-bold">Desk Chair</p>
          <p className="font-extralight text-[14px]">154 Products</p>
        </div>
      </div>
    </div>
  </div>
</div>
</section> */}