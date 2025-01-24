
"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { topCategory } from "@/sanity/lib/queries";

type Category = {
  _id: string;
  title: string;
  imageUrl: string;
  products:number
};

const CategoryListPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const result = await client.fetch(topCategory);

      setCategories(result);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section>
      <div className="px-4 my-10">
        <h2 className="max-w-screen-xl mx-auto text-3xl font-bold mt-20 mb-10 text-[#272343] text-center lg:text-start">
          Top Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-screen-xl">
          {categories.map((category) => (
          
              <div key={category._id}
                className="relative shadow-md rounded-md hover:scale-105 active:scale-100 duration-500"
              >
                <Image
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-full object-cover"
                  height={400}
                  width={400}
                />
                <div className="h-[80px] w-full bg-black opacity-70 absolute bottom-0 rounded-b-md shadow-md">
                  <div className="text-white my-[18px] ml-4">
                    <p className="font-bold">{category.title}</p>
                    <p>{category.products}</p>
                  </div>
                </div>
              </div>
           
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryListPage;


