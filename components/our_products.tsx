"use client";
import Image from "next/image";
import React from "react";
import { GrCart } from "react-icons/gr";

const Our_Product = () => {
  return (
    <section>
  <div className="w-full mb-20 px-4">
    <h2 className="max-w-screen-xl mx-auto font-bold text-3xl mb-10 text-center text-[#272343]">
      Our Products
    </h2>
    <div className="max-w-screen-xl flex flex-wrap justify-center md:justify-between gap-6 mx-auto">
      {/* Product Cards */}
      <div className="w-[300px]">
        <Image
          src="/our_product/product_1.png"
          alt="chair"
          height={300}
          width={300}
          className="hover:cursor-pointer w-full object-cover"
        />
        <div className="flex items-center justify-between mt-3">
          <div>
            <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair</p>
            <p className="font-bold">$20</p>
          </div>
          <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
            <GrCart className="text-xl" />
          </div>
        </div>
      </div>

      <div className="w-[300px]">
        <Image
          src="/our_product/product_2.png"
          alt="chair"
          height={300}
          width={300}
          className="hover:cursor-pointer w-full object-cover"
        />
        <div className="flex items-center justify-between mt-3">
          <div>
            <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair</p>
            <p className="font-bold">$20</p>
          </div>
          <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
            <GrCart className="text-xl" />
          </div>
        </div>
      </div>

      <div className="w-[300px]">
        <Image
          src="/our_product/product_3.png"
          alt="chair"
          height={300}
          width={300}
          className="hover:cursor-pointer w-full object-cover"
        />
        <div className="flex items-center justify-between mt-3">
          <div>
            <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair</p>
            <p className="font-bold">$20</p>
          </div>
          <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
            <GrCart className="text-xl" />
          </div>
        </div>
      </div>

      {/* More Products */}
      <div className="w-[300px]">
        <Image
          src="/our_product/product_4.png"
          alt="chair"
          height={300}
          width={300}
          className="hover:cursor-pointer w-full object-cover"
        />
        <div className="flex items-center justify-between mt-3">
          <div>
            <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair</p>
            <p className="font-bold">$20</p>
          </div>
          <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
            <GrCart className="text-xl" />
          </div>
        </div>
      </div>

      <div className="w-[300px]">
        <Image
          src="/our_product/product_5.png"
          alt="chair"
          height={300}
          width={300}
          className="hover:cursor-pointer w-full object-cover"
        />
        <div className="flex items-center justify-between mt-3">
          <div>
            <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair</p>
            <p className="font-bold">$20</p>
          </div>
          <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
            <GrCart className="text-xl" />
          </div>
        </div>
      </div>

      <div className="w-[300px]">
        <Image
          src="/our_product/product_6.png"
          alt="chair"
          height={300}
          width={300}
          className="hover:cursor-pointer w-full object-cover"
        />
        <div className="flex items-center justify-between mt-3">
          <div>
            <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair</p>
            <p className="font-bold">$20</p>
          </div>
          <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
            <GrCart className="text-xl" />
          </div>
        </div>
      </div>

      <div className="w-[300px]">
        <Image
          src="/our_product/product_7.png"
          alt="chair"
          height={300}
          width={300}
          className="hover:cursor-pointer w-full object-cover"
        />
        <div className="flex items-center justify-between mt-3">
          <div>
            <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair</p>
            <p className="font-bold">$20</p>
          </div>
          <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
            <GrCart className="text-xl" />
          </div>
        </div>
      </div>

      <div className="w-[300px]">
        <Image
          src="/product/image6@2x.png"
          alt="chair"
          height={300}
          width={300}
          className="hover:cursor-pointer w-full object-cover"
        />
        <div className="flex items-center justify-between mt-3">
          <div>
            <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair</p>
            <p className="font-bold">$20</p>
          </div>
          <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
            <GrCart className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  
  );
};

export default Our_Product;
{/* <section>
      <div className="w-full mb-20">
        <h2 className="w-[1250px] mx-auto font-bold text-3xl mb-10 text-center text-[#272343]">
          Our Products
        </h2>
        <div className="w-[1250px] flex-wrap flex justify-between mx-auto ">
          <div className="w-[300px] mb-7">
            <Image
              src={require("@/public/our_product/product_1.png")}
              alt="chair"
              height={300}
              width={300}
              className='hover:cursor-pointer'
            />
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
                <p className="font-bold ">$20</p>
              </div>
              <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
                <GrCart className="text-xl" />
              </div>
            </div>
          </div>
          <div className="w-[300px]">
            <Image
              src={require("@/public/our_product/product_2.png")}
              alt="chair"
              height={300}
              width={300}
              className='hover:cursor-pointer'
            />
            <div className="flex items-center justify-between mt-3">
              <div>
              <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
                <p className="font-bold">$20</p>
              </div>
              <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
                <GrCart className="text-xl" />
              </div>
            </div>
          </div>
          <div className="w-[300px]">
            <Image
              src={require("@/public/our_product/product_3.png")}
              alt="chair"
              height={300}
              width={300}
              className='hover:cursor-pointer'
            />
            <div className="flex items-center justify-between mt-3">
              <div>
              <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
                <p className="font-bold">$20</p>
              </div>
              <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
                <GrCart className="text-xl" />
              </div>
            </div>
          </div>
          <div className="w-[300px]">
            <Image
              src={require("@/public/our_product/product_4.png")}
              alt="chair"
              height={300}
              width={300}
              className='hover:cursor-pointer'
            />
            <div className="flex items-center justify-between mt-3">
              <div>
              <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
                <p className="font-bold">$20</p>
              </div>
              <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
                <GrCart className="text-xl" />
              </div>
            </div>
          </div>
          <div className="w-[300px]">
            <Image
              src={require("@/public/our_product/product_5.png")}
              alt="chair"
              height={300}
              width={300}
              className='hover:cursor-pointer'
            />
            <div className="flex items-center justify-between mt-3">
              <div>
              <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
                <p className="font-bold">$20</p>
              </div>
              <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
                <GrCart className="text-xl" />
              </div>
            </div>
          </div>
          <div className="w-[300px]">
            <Image
              src={require("@/public/our_product/product_6.png")}
              alt="chair"
              height={300}
              width={300}
              className='hover:cursor-pointer'
              
            />
            <div className="flex items-center justify-between mt-3">
              <div>
              <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
                <p className="font-bold">$20</p>
              </div>
              <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
                <GrCart className="text-xl" />
              </div>
            </div>
          </div>
          <div className="w-[300px]">
            <Image
              src={require("@/public/our_product/product_7.png")}
              alt="chair"
              height={300}
              width={300}
              className='hover:cursor-pointer'
            />
            <div className="flex items-center justify-between mt-3">
              <div>
              <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
                <p className="font-bold">$20</p>
              </div>
              <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
                <GrCart className="text-xl" />
              </div>
            </div>
          </div>
          <div className="w-[300px]">
            <Image
              src={require("@/public/product/image6@2x.png")}
              alt="chair"
              height={300}
              width={300}
              className='hover:cursor-pointer'
            />
            <div className="flex items-center justify-between mt-3">
              <div>
              <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
                <p className="font-bold">$20</p>
              </div>
              <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
                <GrCart className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}