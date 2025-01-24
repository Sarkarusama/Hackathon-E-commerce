// "use client";
// import { Products } from "@/components/featured-product";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { CiHeart } from "react-icons/ci";
// import { RiDeleteBin6Line } from "react-icons/ri";
// // import {remove} from "../redux/CartSlice"
// import { useDispatch, UseDispatch,useSelector } from "react-redux";
// import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
// import Swal from "sweetalert2";
// // import { RootState } from "../redux/store";

// const Cart = () => {
//   const [cartItems,setCartItems] = useState<Products[]>([])
//   useEffect(()=>{
//     setCartItems(getCartItems())
//   },[])

//   const handleRemove = (id:string)=>{
//     Swal.fire({
//       title: "Are You Sure!",
//       text:"You Will not be able to recover this item!",
//       icon:"warning",
//       showCancelButton:true,
//       confirmButtonColor:'red',
//       cancelButtonColor:"#d33",
//       confirmButtonText:"Yes, Remove it!",

//     }).then((result)=>{
//       if(result.isConfirmed){
//         removeFromCart(id)
//         setCartItems(getCartItems())
//         Swal.fire("Removed!","Item has been removed.","success" )
//       }
//     })
//   }
//   const handleQuantityChange = (id:string ,quantity:number)=>{
//     updateCartQuantity(id,quantity)
//     setCartItems(getCartItems())
//   } 
 
//   const handleIncrement =(id:string)=>{
//     const product =cartItems.find((item) =>item._id === id)
//     if(product)
//       handleQuantityChange(id,product.inventory + 1)
//   }
//   const handleDecrement =(id:string)=>{
//     const product =cartItems.find((item) =>item._id === id)
//     if(product && product.inventory > 1)
//       handleQuantityChange(id,product.inventory - 1)
//   }
//   const calculatedTotal = ()=>{
//     return cartItems.reduce((total,item)=>total + item.price * item.inventory , 0)
//   }

//   const handleProceed =()=>{
//     Swal.fire({
//       title: "Processed To Checkout.",
//       text:"Please review your cart before checkout",
//       icon:"question",
//       showCancelButton:true,
//       confirmButtonColor:'#3085d5',
//       cancelButtonColor:"#d33",
//       confirmButtonText:"Yes, processed!",
//     }).then((result)=>{
//       if(result.isConfirmed){
//         Swal.fire("Success","Your Order Has been Successfully processed.","success")
//         setCartItems([])
        
//       }
//     })
//   }
//   return (
   
//     <section>
//       <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
//         <h2 className="font-bold text-3xl lg:text-3xl md:text-3xl mb-7 lg:mb-5 md:mb-5 mt-10 mx-auto text-center lg:text-left ">Bag</h2>
//         <div className="flex flex-col lg:flex-row items-center lg:items-start">
//           <div className="mb-20 items-center">
//             <div className="lg:w-[900px] md:w-[700px] w-full flex ">
//               <div>
//                 <Image
//                   src={require("@/public/our_product/product_3.png")}
//                   alt="chair"
//                   height={150}
//                   width={150}
//                 />
//               </div>
//               {/* price & detail */}
//               <div className="lg:w-[600px] md:w-[500px] ml-5 lg:ml-10 md:ml-10">
//                 <p className="font-bold  mb-2 md:mb-6 lg:mb-6 flex flex-col lg:flex-row justify-between text-sm lg:text-[16px] md:flex-row">
//                   Library Stool Chair{" "}
//                   <span className="font-normal text-sm lg:text-[16px] mt-2 lg:mt-0">MRP:$99:00</span>
//                 </p>
//                 <p className="text-gray-400 mb-1 text-sm lg:text-[16px]">Ashen Slate/Cobalt Bliss</p>
//                 <span className="mr-10 lg:mr-14">Size L</span>
//                 <span>Quantity 1</span>
//                 {/* icons */}
//                 <div className="flex mt-6 lg:mt-8 hover:cursor-pointer items-center">
//                   <CiHeart className="text-3xl mr-5 hover:text-[#02a0aece]" />
//                   <RiDeleteBin6Line className="text-2xl hover:text-[#02a0aece]" />
//                 </div>
//               </div>
//             </div>
//             <div className="h-[1px] sm:w-full lg:w-[800px] md:w-full bg-gray-300 mt-10"></div>
//             <div className="lg:w-[900px] flex mt-10 mb-10">
//               {/* image */}
//               <div>
//                 <Image
//                   src={require("@/public/our_product/product_5.png")}
//                   alt="chair"
//                   height={150}
//                   width={150}
//                 />
//               </div>
//               {/* price-detail */}
//               <div className="lg:w-[600px] md:w-[500px] ml-5 lg:ml-10 md:ml-10">
//                 <h3 className="font-bold  mb-2 md:mb-6 lg:mb-6 flex flex-col lg:flex-row justify-between text-sm lg:text-[16px] md:flex-row">
//                   Library Stool Chair{" "}
//                   <span className="font-normal text-sm lg:text-[16px] mt-2 lg:mt-0">MRP:$99:00</span>
//                 </h3>
//                 <p className="font-normal text-sm lg:text-[16px] mt-2 lg:mt-0 text-gray-400">Ashen Slate/Cobalt Bliss</p>
//                 <span className="mr-10 lg:mr-14">Size L</span>
//                 <span>Quantity 1</span>
//                 {/* icons */}
//                 <div className="flex mt-6 lg:mt-8 hover:cursor-pointer items-center">
//                   <CiHeart className="text-3xl mr-5 hover:text-[#02a0aece] hover:cursor-pointer" />
//                   <RiDeleteBin6Line className="text-2xl hover:text-[#02a0aece] hover:cursor-pointer" />
//                 </div>
//               </div>
//             </div>
//             <div className="h-[1px] sm:w-full md:w-full lg:w-[800px] bg-gray-300 mt-10"></div>
//           </div>
//           <div className="lg:w-[350px] md:w-[400px]">
//             <p className="font-bold mb-5">Summary</p>
//             <p className="flex justify-between mb-1">
//               Subtotal <span>$198.00</span>
//             </p>
//             <p className="flex justify-between mb-1">
//               Estimated Delivery & Handling<span>Free</span>
//             </p>
//             <div className="w-full h-[1px] bg-gray-300 my-4"></div>
//             <p className="flex justify-between">
//               Total <span>$198.00</span>
//             </p>
//             <div className="w-full h-[1px] bg-gray-300 my-4"></div>
//             <button className="bg-[#029FAE] px-20 py-3 rounded-full w-full hover:bg-[#02a0aece] text-white">
//               Member CheckOut
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Cart;

"use client";
import { Products } from "@/components/featured-product";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";

const Cart = () => {
  const [cartItems, setCartItems] = useState<Products[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are You Sure!",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed.", "success");
        setCartItems([]);
      }
    });
  };

  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
        <h2 className="font-bold text-3xl mb-7 mt-10 text-center">Bag</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="mb-20 items-center">
            {cartItems.map((item) => (
              <div key={item._id} className="lg:w-[900px] flex mb-10">
                {
                  item.image &&(

                    <Image
                      src={urlFor(item.image).url()} // Replace with the actual image property from your product schema
                      alt={item.title}
                      height={150}
                      width={150}
                    />
                  )
                }
                <div className="lg:w-[600px] ml-5">
                  <p className="font-bold flex justify-between text-sm mb-2">
                    {item.title}
                    <span className="font-normal">${item.price}</span>
                  </p>
                  <p className="text-gray-400 text-sm mb-1">{item.description}</p>
                  {/* <span className="mr-10">Size: {item.size}</span> */}
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.inventory}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex mt-6 items-center">
                    
                    <RiDeleteBin6Line
                      onClick={() => handleRemove(item._id)}
                      className="text-2xl hover:text-[#02a0aece] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="h-[1px] w-full bg-gray-300 mt-10"></div>
          </div>

          <div className="lg:w-[350px] md:w-[400px] ">
            <p className="font-bold mb-5">Summary</p>
            <p className="flex justify-between mb-1">
              Subtotal <span>${calculatedTotal().toFixed(2)}</span>
            </p>
            <p className="flex justify-between mb-1">
              Estimated Delivery & Handling<span>Free</span>
            </p>
            <div className="w-full h-[1px] bg-gray-300 my-4"></div>
            <p className="flex justify-between">
              Total <span>${calculatedTotal().toFixed(2)}</span>
            </p>
            <div className="w-full h-[1px] bg-gray-300 my-4"></div>
            <button
              onClick={handleProceed}
              className="bg-[#029FAE] px-20 py-3 rounded-full w-full hover:bg-[#02a0aece] text-white mb-5 lg:mb-20 "
            >
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

