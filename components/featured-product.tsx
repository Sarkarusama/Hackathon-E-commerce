"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GrCart } from "react-icons/gr";
import { urlFor } from "@/sanity/lib/image";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2"
import {  featuredProducts } from "@/sanity/lib/queries";
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
  }
  inventory:number,
};

const Product = () => {
  const [products, setProducts] = useState<Products[]>([]);
useEffect(()=>{
  async function fetchProduct(){
    const fetchedProduct :Products[]= await client.fetch(featuredProducts)
    setProducts(fetchedProduct)
    // `*[_type == "products" && "featured" in tags][0..3]`
    
  }
  fetchProduct()
},[])
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
      <div className="w-full px-4">
        <h2 className="max-w-screen-xl mx-auto font-bold text-3xl mb-10 text-[#272343] text-center lg:text-start">
          Featured Products
        </h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              className="w-full max-w-[300px] mx-auto shadow-md p-2 rounded-md hover:scale-105 active:scale-100 duration-500 relative"
              key={product._id}
            >
              <Link  href={`/dynamicRoute/${product.slug.current}`} >
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
      </div>
    </section>
  );
};

export default Product;
