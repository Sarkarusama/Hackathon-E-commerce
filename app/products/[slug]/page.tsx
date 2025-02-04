// "use client"

import { Products } from "@/components/featured-product";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";


import { FaMinus, FaPlus } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Products> {
  return client.fetch(
    `*[_type == "products" && slug.current == $slug][0]{
         _id,
       title,
       price,
       image,
       description,
       priceWithoutDiscount,
       badge,
       "slug":slug.current
        } `,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);
  
  
  return (
    <section>
      <div className="w-full lg:my-5 mt-3 md:my-10 px-4 ">
        <div className="flex max-w-screen-xl flex-col md:flex-row lg:flex-row justify-between mx-auto lg:mb-20 md:mb-16 mb-10 gap-0 md:gap-3">
          <div className="flex flex-col lg:flex-row md:flex-row items-center gap-8">
            {/* Product Image */}
            <div>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.title}
                  height={500}
                  width={500}
                  className="cursor-pointer  sm:w-[300px] lg:w-[500px]  md:w-[300px]"
                />
              )}
            </div>
            <div className="lg:w-[500px] sm:w-[300px] md:w-[300px] ">
              <h1 className="lg:text-[50px] w-full text-[30px] md:w-full md:text-[30px] font-bold lg:mb-6 md:mb-3 mb-3 mt-0 lg:mt-0 md:mt-0">
                {product.title}
              </h1>
              <span className="bg-[#029FAE] mb-2 w-fit px-4 text-white text-[14px] lg:text-[20px] md:text-[16px]  py-2 rounded-full  hover:bg-[#02a0aece]">
                ${product.price}.00
              </span>
              {product.priceWithoutDiscount && (
                <span className="text-xl text-gray-500 line-through ml-4">
                  ${product.priceWithoutDiscount}
                </span>
              )}
              {product.badge && (
                <div className="w-fit mt-4 bg-yellow-400 text-yellow-900 font-semibold px-3 py-1 rounded-full">
                  {product.badge}
                </div>
              )}
              <div className="h-[2px] w-full bg-[#F0F2F3] lg:my-6 md:my-3 my-3"></div>
              <p className="lg:text-[22px] text-[16px] md:text-[16px] font-extralight text-[#636270]">
                {product.description}
              </p>

              <div className="flex gap-5 items-center border w-fit py-1 px-3 mt-3 cursor-pointer">
                <p>Quantity</p>
                <span className="text-md hover:text-[#029FAE] " >
                  <FaMinus />
                </span>
                <span className="text-lg">1</span>
                <span className="text-md hover:text-[#029FAE]" >
                  <FaPlus />
                </span>
              </div>
              <button className="text-[14px] lg:text-[18px] md:text-[14px] bg-[#029FAE] px-5 py-2 text-white rounded-md lg:mt-6 mt-3 md:mt-3 flex gap-2 items-center font-bold hover:bg-[#02a0aece]">
                <GrCart className="text-md" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
