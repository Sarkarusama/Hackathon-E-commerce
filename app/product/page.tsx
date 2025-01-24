"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GrCart } from "react-icons/gr";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";


export interface Products {
  _id: string;
  title: string;
  description: string;
  _type:"products";
  price: number;
  category: string;
  badge?: string;
  priceWithoutDiscount?: number;
  image?:{
    asset:{
      _ref:string,
      _type:string
    }
  };
  slug:{
    _type:"slug",
    current:string
  },
  inventory:number
};
const Product = () => {
    const [products, setProducts] = useState<Products[]>([]);
    useEffect(() => {
      async function fetchProduct() {
        const fetchedProduct: Products[] = await client.fetch(
          `*[_type == "products"]`
        );
        setProducts(fetchedProduct);
      }
      fetchProduct();
    }, []);
    const handleAddToCart =(e:React.MouseEvent,product:Products)=>{
      e.preventDefault()
      Swal.fire({
        position:"top",
        icon:"success",
        title:`${product.title} added to cart`,
        showConfirmButton:false,
        timer:1000
      })
      addToCart(product)
    }
  return (
    <section>
      {/* all-products */}
      <div className="w-full mt-[50px] ">
        <h2 className="max-w-screen-xl mx-auto font-bold text-3xl mb-10 text-center lg:text-left  text-[#272343]">
          All Products
        </h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
            <div
              className="w-full max-w-[300px] mx-auto shadow-md p-2 rounded-md hover:scale-105 active:scale-100 duration-500 relative"
              key={product._id}
            >
              <Link href={`/dynamicRoute/${product.slug.current}`}>
                <div className="relative">
                  {/* Product Image */}
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.title}
                      className="hover:cursor-pointer"
                      height={300}
                      width={300}
                    />
                  )}

                  {/* Badge - Sales and New */}
                  {product.badge && (
                    <span
                      className={`absolute top-2 left-2 text-xs font-bold py-1 px-2 rounded-full text-white ${
                        product.badge === "sale"
                          ? "bg-orange-500"
                          : product.badge === "new"
                            ? "bg-green-500"
                            : ""
                      }`}
                      style={{
                        backgroundColor:
                          product.badge === "sale" ? "#FF7F32" : "#28a745",
                        zIndex: 10,
                      }}
                    >
                      {product.badge === "sale" ? "Sale" : "New"}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div>
                    <p className="hover:text-[#029FAE] cursor-pointer text-md">
                      {product.title}
                    </p>
                    <p className="font-bold text-md">
                      ${product.price}{" "}
                      {product.priceWithoutDiscount && (
                        <span className="line-through ml-1 font-normal text-gray-400">
                          ${product.priceWithoutDiscount}
                        </span>
                      )}
                    </p>
                  </div>
                  <button onClick={(e)=>handleAddToCart(e,product)} className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-2 rounded-md cursor-pointer">
                    <GrCart className="text-lg" />
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* subscribe-newsletter */}
        <div className="w-full bg-[#F0F2F3] pt-5 lg:pt-10 md:pt-5 mt-10 lg:mt-20 md:mt-20">
          <div className="py-10 max-w-xl mx-auto">
            <p className="text-[28px] lg:text-[40px] md:text-[40px] font-bold text-[#272343] text-center pb-5">
              Or subscribe to the newsletter
            </p>
            <div className="w-full flex flex-col md:flex-row gap-4 justify-between items-center mx-auto">
              <input
                type="email"
                placeholder="Email Address..."
                className="bg-[#F0F2F3] border-b-2 w-full md:w-[70%] pb-1 border-black"
              />
              <input
                type="submit"
                value="Submit"
                className="bg-[#F0F2F3] border-b-2 pb-1 border-black w-full md:w-[20%] text-center cursor-pointer"
              />
            </div>
          </div>
          {/* follow-discount-img */}
          <div className="pb-20">
            <p className="text-[28px] lg:text-[40px] md:text-[40px] font-bold text-[#272343] text-center mb-5">
              Follow products and discounts on Instagram
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Image
                src={require("@/public/all-product/product_5.png")}
                alt="chair"
                height={170}
                width={170}
                className="hover:cursor-pointer"
              />
              <Image
                src={require("@/public/all-product/product_9.png")}
                alt="chair"
                height={170}
                width={170}
                className="hover:cursor-pointer"
              />
              <Image
                src={require("@/public/all-product/product_2.png")}
                alt="chair"
                height={170}
                width={170}
                className="hover:cursor-pointer"
              />
              <Image
                src={require("@/public/all-product/product_1.png")}
                alt="chair"
                height={170}
                width={170}
                className="hover:cursor-pointer"
              />
              <Image
                src={require("@/public/all-product/product_3.png")}
                alt="chair"
                height={170}
                width={170}
                className="hover:cursor-pointer"
              />
              <Image
                src={require("@/public/all-product/product_12.png")}
                alt="chair"
                height={170}
                width={170}
                className="hover:cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

// {/* <section>
//          {/* all-products */}
//          <div className="w-full mt-[50px]">
//            <h2 className="max-w-screen-xl mx-auto font-bold text-3xl mb-10 text-center lg:text-left  text-[#272343]">
//              All Products
//            </h2>
//            <div className="max-w-screen-xl flex-wrap flex justify-between mx-auto ">
//              <div className="w-[300px] mb-7">
//                <Image
//                  src={require("@/public/all-product/product_1.png")}
//                  alt="chair"
//                  height={300}
//                  width={300}
//                  className='hover:cursor-pointer'
//                />
//                <div className="flex items-center justify-between mt-3">
//                  <div>
//                    <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
//                    <p className="font-bold ">$20</p>
//                  </div>
//                  <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
//                    <GrCart className="text-xl" />
//                  </div>
//                </div>
//              </div>
//              <div className="w-[300px]">
//                <Image
//                  src={require("@/public/all-product/product_2.png")}
//                  alt="chair"
//                  height={300}
//                  width={300}
//                  className='hover:cursor-pointer'
//                />
//                <div className="flex items-center justify-between mt-3">
//                  <div>
//                  <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
//                    <p className="font-bold">$20</p>
//                  </div>
//                  <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
//                    <GrCart className="text-xl" />
//                  </div>
//                </div>
//              </div>
//              <div className="w-[300px]">
//                <Image
//                  src={require("@/public/all-product/product_3.png")}
//                  alt="chair"
//                  height={300}
//                  width={300}
//                  className='hover:cursor-pointer'
//                />
//                <div className="flex items-center justify-between mt-3">
//                  <div>
//                  <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
//                    <p className="font-bold">$20</p>
//                  </div>
//                  <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
//                    <GrCart className="text-xl" />
//                  </div>
//                </div>
//              </div>
//              <div className="w-[300px]">
//                <Image
//                  src={require("@/public/all-product/product_4.png")}
//                  alt="chair"
//                  height={300}
//                  width={300}
//                  className='hover:cursor-pointer'
//                />
//                <div className="flex items-center justify-between mt-3">
//                  <div>
//                  <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
//                    <p className="font-bold">$20</p>
//                  </div>
//                  <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
//                    <GrCart className="text-xl" />
//                  </div>
//                </div>
//              </div>
//              <div className="w-[300px] mb-7">
//                <Image
//                  src={require("@/public/all-product/product_5.png")}
//                  alt="chair"
//                  height={300}
//                  width={300}
//                  className='hover:cursor-pointer'
//                />
//                <div className="flex items-center justify-between mt-3">
//                  <div>
//                  <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
//                    <p className="font-bold">$20</p>
//                  </div>
//                  <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
//                    <GrCart className="text-xl" />
//                  </div>
//                </div>
//              </div>
//              <div className="w-[300px]">
//                <Image
//                  src={require("@/public/all-product/product_6.png")}
//                  alt="chair"
//                  height={300}
//                  width={300}
//                  className='hover:cursor-pointer'

//                />
//                <div className="flex items-center justify-between mt-3">
//                  <div>
//                  <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
//                    <p className="font-bold">$20</p>
//                  </div>
//                  <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
//                    <GrCart className="text-xl" />
//                  </div>
//                </div>
//              </div>
//              <div className="w-[300px]">
//                <Image
//                  src={require("@/public/all-product/product_7.png")}
//                  alt="chair"
//                  height={300}
//                  width={300}
//                  className='hover:cursor-pointer'
//                />
//                <div className="flex items-center justify-between mt-3">
//                  <div>
//                  <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
//                    <p className="font-bold">$20</p>
//                  </div>
//                  <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
//                    <GrCart className="text-xl" />
//                  </div>
//                </div>
//              </div>
//              <div className="w-[300px]">
//                <Image
//                  src={require("@/public/all-product/product_1.png")}
//                  alt="chair"
//                  height={300}
//                  width={300}
//                  className='hover:cursor-pointer'
//                />
//                <div className="flex items-center justify-between mt-3">
//                  <div>
//                  <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
//                    <p className="font-bold">$20</p>
//                  </div>
//                  <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
//                    <GrCart className="text-xl" />
//                  </div>
//                </div>
//              </div>
//              <div className="w-[300px] mb-7">
//                <Image
//                  src={require("@/public/all-product/product_9.png")}
//                  alt="chair"
//                  height={300}
//                  width={300}
//                  className='hover:cursor-pointer'
//                />
//                <div className="flex items-center justify-between mt-3">
//                  <div>
//                    <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
//                    <p className="font-bold ">$20</p>
//                  </div>
//                  <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
//                    <GrCart className="text-xl" />
//                  </div>
//                </div>
//              </div>
//              <div className="w-[300px]">
//                <Image
//                  src={require("@/public/all-product/product_2.png")}
//                  alt="chair"
//                  height={300}
//                  width={300}
//                  className='hover:cursor-pointer'
//                />
//                <div className="flex items-center justify-between mt-3">
//                  <div>
//                  <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
//                    <p className="font-bold">$20</p>
//                  </div>
//                  <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
//                    <GrCart className="text-xl" />
//                  </div>
//                </div>
//              </div>
//              <div className="w-[300px]">
//                <Image
//                  src={require("@/public/all-product/product_3.png")}
//                  alt="chair"
//                  height={300}
//                  width={300}
//                  className='hover:cursor-pointer'
//                />
//                <div className="flex items-center justify-between mt-3">
//                  <div>
//                  <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
//                    <p className="font-bold">$20</p>
//                  </div>
//                  <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
//                    <GrCart className="text-xl" />
//                  </div>
//                </div>
//              </div>
//              <div className="w-[300px]">
//                <Image
//                  src={require("@/public/all-product/product_12.png")}
//                  alt="chair"
//                  height={300}
//                  width={300}
//                  className='hover:cursor-pointer'
//                />
//                <div className="flex items-center justify-between mt-3">
//                  <div>
//                  <p className="hover:text-[#029FAE] cursor-pointer">Library Stool Chair </p>
//                    <p className="font-bold">$20</p>
//                  </div>
//                  <div className="hover:bg-[#029FAE] hover:text-white bg-[#F0F2F3] p-3 text-black rounded-md cursor-pointer">
//                    <GrCart className="text-xl" />
//                  </div>
//                </div>
//              </div>
//            </div>
//          </div>
//          {/* subscribe-newsletter */}
//          <div className="w-full bg-[#F0F2F3] pt-10 mt-20">
//           <div className=" py-10 w-[650px] mx-auto ">
//             <p className="text-[40px] font-bold text-[#272343] text-center pb-5">Or subscribe to the newsletter</p>
//             <div className="w-[600px] justify-between flex mx-auto">
//               <input type="email" placeholder="Email Address..." className="bg-[#F0F2F3] border-b-2 w-[90%] pb-1  border-black"/>
//               <input type="submit" placeholder="Submit" className="bg-[#F0F2F3] border-b-2 pb-1 border-black "/>
//             </div>
//           </div>
//           {/* follow-discount-img */}
//           <div className="pb-20">
//             <p className="text-[40px] font-bold text-[#272343] text-center mb-5">Follow products and discounts on Instagram</p>
//             <div className="flex gap-2 justify-center">
//               <Image src={require("@/public/all-product/product_5.png")} alt="chair" height={170} width={170}/>
//               <Image src={require("@/public/all-product/product_9.png")} alt="chair" height={170} width={170}/>
//               <Image src={require("@/public/all-product/product_2.png")} alt="chair" height={170} width={170}/>
//               <Image src={require("@/public/all-product/product_1.png")} alt="chair" height={170} width={170}/>
//               <Image src={require("@/public/all-product/product_3.png")} alt="chair" height={170} width={170}/>
//               <Image src={require("@/public/all-product/product_12.png")} alt="chair" height={170} width={170}/>
//             </div>
//           </div>
//          </div>
//        </section> */}
