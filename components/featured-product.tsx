"use client";
import Image from "next/image";
import React from "react";
import { GrCart } from "react-icons/gr";

const Product = () => {
  return (
    <section>
      <div className="w-full px-4">
        <h2 className="max-w-screen-xl mx-auto font-bold text-3xl mb-10 text-[#272343] text-center lg:text-start  ">
          Featured Products
        </h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  ">
          {/* Product Card */}
          <div className="w-full max-w-[300px] mx-auto">
            <Image
              src={require("@/public/product/image@2x.png")}
              alt="chair"
              height={300}
              width={300}
              className="hover:cursor-pointer"
            />
            {/* Text and Cart Container */}
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="hover:text-[#029FAE] cursor-pointer text-md ">
                  Library Stool Chair
                </p>
                <p className="font-bold text-md ">$20</p>
              </div>
              <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-2 rounded-md cursor-pointer">
                <GrCart className="text-lg" />
              </div>
            </div>
          </div>
          <div className="w-full max-w-[300px] mx-auto">
            <Image
              src={require("@/public/product/image2@2x.png")}
              alt="chair"
              height={300}
              width={300}
              className="hover:cursor-pointer"
            />
            {/* Text and Cart Container */}
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="hover:text-[#029FAE] cursor-pointer text-md ">
                  Library Stool Chair
                </p>
                <p className="font-bold text-md ">$20</p>
              </div>
              <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-2 rounded-md cursor-pointer">
                <GrCart className="text-lg" />
              </div>
            </div>
          </div>
          <div className="w-full max-w-[300px] mx-auto">
            <Image
              src={require("@/public/product/image4@2x.png")}
              alt="chair"
              height={300}
              width={300}
              className="hover:cursor-pointer"
            />
            {/* Text and Cart Container */}
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="hover:text-[#029FAE] cursor-pointer text-md ">
                  Library Stool Chair
                </p>
                <p className="font-bold text-md ">$20</p>
              </div>
              <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-2 rounded-md cursor-pointer">
                <GrCart className="text-lg" />
              </div>
            </div>
          </div>
          <div className="w-full max-w-[300px] mx-auto">
            <Image
              src={require("@/public/product/image6@2x.png")}
              alt="chair"
              height={300}
              width={300}
              className="hover:cursor-pointer"
            />
            {/* Text and Cart Container */}
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="hover:text-[#029FAE] cursor-pointer text-md ">
                  Library Stool Chair
                </p>
                <p className="font-bold text-md ">$20</p>
              </div>
              <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-2 rounded-md cursor-pointer">
                <GrCart className="text-lg" />
              </div>
            </div>
          </div>
          

          {/* Repeat for other products */}
        </div>
      </div>
    </section>
  );
};

export default Product;
{
  /* <section>
<div className='w-full'>
  <h2 className='w-[1250px] mx-auto font-bold text-3xl mb-10 text-[#272343] text-center md:text-left'>Featured Products</h2>
  <div className='w-[1250px] flex flex-col md:flex-row lg:flex-row justify-between mx-auto '>
    <div className='w-[300px]'>
      <Image src={require("@/public/product/image@2x.png")} alt='chair' height={300} width={300} className='hover:cursor-pointer'/>
      <div className='flex items-center justify-between mt-3'>
      <div>
        <p className='hover:text-[#029FAE] cursor-pointer'>Library Stool Chair </p>
        <p className='font-bold'>$20</p>
        </div>
        <div className='hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer'><GrCart className='text-xl'/></div>
      </div>
    </div>
    <div className='w-[300px]'>
      <Image src={require("@/public/product/image2@2x.png")} alt='chair' height={300} width={300} className='hover:cursor-pointer'/>
      <div className='flex items-center justify-between mt-3'>
      <div>
        <p className='hover:text-[#029FAE] cursor-pointer'>Library Stool Chair </p>
        <p className='font-bold'>$20</p>
      </div>
        <div className='hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer'><GrCart className='text-xl'/></div>
      </div>
    </div>
    <div className='w-[300px]'>
      <Image src={require("@/public/product/image4@2x.png")} alt='chair' height={300} width={300} className='hover:cursor-pointer'/>
      <div className='flex items-center justify-between mt-3'>
      <div>
        <p className='hover:text-[#029FAE] cursor-pointer'>Library Stool Chair </p>
        <p className='font-bold'>$20</p>
      </div>
        <div className='hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer'><GrCart className='text-xl'/></div>
      </div>
    </div>
    <div className='w-[300px]'>
      <Image src={require("@/public/product/image6@2x.png")} alt='chair' height={300} width={300} className='hover:cursor-pointer'/>
      <div className='flex items-center justify-between mt-3'>
      <div>
        <p className='hover:text-[#029FAE] cursor-pointer'>Library Stool Chair </p>
        <p className='font-bold'>$20</p>
      </div>
        <div className='hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer'><GrCart className='text-xl'/></div>
      </div>
    </div>
  </div>
</div>
</section> */
}
