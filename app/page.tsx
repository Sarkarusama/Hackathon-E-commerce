import Company_logo from "@/components/company_logo";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import NewStyle from "@/components/new-style";
import Our_Product from "@/components/our_products";
import Product from "@/components/featured-product";
import Top_categories from "@/components/top_categories";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Company_logo/>
      <Product/>
      <Top_categories/>
      <NewStyle/>
      <Our_Product/>
    </div>
  );
}
