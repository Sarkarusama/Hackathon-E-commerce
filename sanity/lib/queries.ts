import { groq } from "next-sanity";

export const featuredProducts = groq`*[_type == "products" && "featured" in tags][0..3]`
export const ourProducts = groq`*[_type == "products"][0..7]`

export const topCategory = groq`*[_type == "categories"]{
    _id,
    title,
    'imageUrl': image.asset->url,
    products
    
  }`