import Company_logo from "@/components/company_logo";
import Hero from "@/components/hero";
import NewStyle from "@/components/new-style";
import Our_Product from "@/components/our_products";
import Product from "@/components/featured-product";
import CategoryPage from "@/components/top_categories";

export default function Home() {
  return (
    <div >
      <Hero />
      <Company_logo/>
      <Product/>
      <CategoryPage/>
      <NewStyle/>
      <Our_Product/>
    </div>
  );
}
