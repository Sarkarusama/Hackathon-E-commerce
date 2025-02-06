"use client";
import { Products } from "@/components/featured-product";
import React, { useEffect, useState } from "react";
import { getCartItems } from "../actions/actions";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";

const CheckOut = () => {
  const [cartItems, setCartItems] = useState<Products[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  });
  const [formError, setFormError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });
  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.id]: e.target.value,
    });
  };
  const validateForm = () => {
    const errors = {
      firstName: !formValue.firstName,
      lastName: !formValue.lastName,
      email: !formValue.email,
      phone: !formValue.phone,
      address: !formValue.address,
      zipCode: !formValue.zipCode,
      city: !formValue.city,
    };
    setFormError(errors);
    return Object.values(errors).every((error) => !error);
  };
  
  const handlePlaceOrder = async () => {
    Swal.fire({
      title: "Processing your Order",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (validateForm()) {
          // Clear cart in localStorage
          localStorage.removeItem("cartItems");
          localStorage.removeItem("appliedDiscount");
  
          // Clear the cartItems state (force re-render)
          setCartItems([]); // This will remove items from the cart
  
          // Reset form state
          setFormValue({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            zipCode: "",
            city: "",
          });
  
          // Show success alert
          Swal.fire(
            "Success!",
            "Your order has been successfully processed!",
            "success"
          );
        } else {
          Swal.fire(
            "Error",
            "Please fill in all the fields before processing.",
            "error"
          );
        }
      }
    });
  
    // Create order data
    const orderData = {
      _type: "order",
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      email: formValue.email,
      phone: formValue.phone,
      address: formValue.address,
      zipCode: formValue.zipCode,
      city: formValue.city,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
      })),
      total: subTotal,
      discount: discount,
      orderData: new Date().toISOString(),
    };
  
    try {
      // Save order to Sanity
      await client.create(orderData);
  
      // Remove discount after order is placed
      localStorage.removeItem("appliedDiscount");
    } catch (error) {
      console.error("Error Creating Order", error);
    }
  };
  
  
  return (
    <div className="bg-white ">
      <div className=" bg-[#F0F2F3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href={"/cart"}
              className="text-gray-500 hover:text-black transition text-sm"
            >
              Cart
            </Link>
            <CgChevronRight />
            <span>Check Out</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="bg-white border rounded-lg mb-4 p-4 shadow-md">
            <h2>Order Summery</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt="image"
                        width={50}
                        height={50}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-base text-gray-500">
                      Quantity : {item.inventory}
                    </p>
                  </div>
                  <p>{item.price * item.inventory}</p>
                </div>
              ))
            ) : (
              <p className="text-sm font-medium">No item in Cart!</p>
            )}
            <div className="text-right pt-4 ">
              <p className="text-sm ">
                Subtotal: <span className="font-medium">${subTotal}</span>{" "}
              </p>
              <p className="text-sm mb-1">
                Discount: <span className="font-medium">${discount}</span>
              </p>
              <p className="text-lg ">
                Total:{" "}
                <span className="font-semibold">${subTotal.toFixed(2)}</span>
              </p>
            </div>
          </div>
          <div className="bg-white border rounded-lg p-6 space-y-6 h-fit shadow-md">
            <h2 className="text-xl font-semibold ">Billing Information</h2>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  value={formValue.firstName}
                  onChange={handleInputChange}
                  className="border grid grid-cols-1 lg:grid-cols-2 mt-1 p-2 w-full hover:border-[#02a0aece] "
                />
                {formError.firstName && (
                  <p className="text-sm text-red-700">
                    First Name is Required!
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  value={formValue.lastName}
                  onChange={handleInputChange}
                  className="border grid grid-cols-1 lg:grid-cols-2 mt-1 p-2 w-full hover:border-[#02a0aece] "
                />
                {formError.lastName && (
                  <p className="text-sm text-red-700">Last Name is Required!</p>
                )}
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="236 5th SE Avenue, New York, United States"
                  value={formValue.address}
                  onChange={handleInputChange}
                  className="border grid grid-cols-1 lg:grid-cols-2 mt-1 p-2 w-full hover:border-[#02a0aece] "
                />
                {formError.address && (
                  <p className="text-sm text-red-700">Address is Required!</p>
                )}
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  value={formValue.email}
                  onChange={handleInputChange}
                  className="border grid grid-cols-1 lg:grid-cols-2 mt-1 p-2 w-full hover:border-[#02a0aece] "
                />
                {formError.email && (
                  <p className="text-sm text-red-700">Last Name is Required!</p>
                )}
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="92 32-546-6789"
                  value={formValue.phone}
                  onChange={handleInputChange}
                  className="border grid grid-cols-1 lg:grid-cols-2 mt-1 p-2 w-full hover:border-[#02a0aece] "
                />
                {formError.phone && (
                  <p className="text-sm text-red-700">
                    Phone Number is Required!
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  type="text"
                  id="zipCode"
                  placeholder="Zip Code"
                  value={formValue.zipCode}
                  onChange={handleInputChange}
                  className="border grid grid-cols-1 lg:grid-cols-2 mt-1 p-2 w-full hover:border-[#02a0aece] "
                />
                {formError.zipCode && (
                  <p className="text-sm text-red-700">Zip code is Required!</p>
                )}
              </div>
              <div>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="City Name"
                  value={formValue.city}
                  onChange={handleInputChange}
                  className="border grid grid-cols-1 lg:grid-cols-2 mt-1 p-2 w-full hover:border-[#02a0aece] "
                />
                {formError.city && (
                  <p className="text-sm text-red-700">City Name is Required!</p>
                )}
              </div>
               <button
                onClick={handlePlaceOrder}
                
                className="w-full h-12 bg-[#02a0aece] rounded-full text-white"
              >
                Place Order{}
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
