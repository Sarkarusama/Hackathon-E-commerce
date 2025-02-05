'use client'

import { useState } from 'react'
import { addToCart } from '@/app/actions/actions'
import toast from 'react-hot-toast'
import { Products } from '@/components/featured-product'
import { GrCart } from 'react-icons/gr'
import Swal from 'sweetalert2'

interface AddToCartButtonProps {
  product: Products
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false)

  // const handleAddToCart = async () => {
  //   setIsAdding(true)
  //   await addToCart(product)
  //   setIsAdding(false)
  //   toast.success(`${product._id} added to cart!`)
  // }
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
    // <button
    //   onClick={handleAddToCart}
    //   disabled={isAdding}
    //   className="w-full bg-black text-white hover:bg-black/90 text-xl py-6 flex items-center justify-center gap-3"
    // >
    //    <IoCartOutline className="text-lg sm:text-xl lg:text-2xl" />
    //   {isAdding ? 'Adding to Cart...' : 'Add to Cart'}
    // </button>
      <button 
      onClick={(e)=>handleAddToCart(e,product)}
          className=" w-full justify-center text-[14px] lg:text-[18px] md:text-[14px] bg-[#029FAE] px-5 py-2 text-white rounded-md lg:mt-6 mt-3 md:mt-3 flex gap-2 items-center font-bold hover:bg-[#02a0aece]">
                <GrCart className="text-md" />
                {isAdding ? 'Adding to Cart...' : 'Add to Cart'}
        </button> 
  )
}