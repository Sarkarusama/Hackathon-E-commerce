import React from "react";
import { FaPhone } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { ImLocation } from "react-icons/im";
import { IoIosTime } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri";

const Contact = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
        {/* heading */}
        <div className="text-center mt-10 lg:mt-20">
          <h1 className="text-xl lg:text-4xl md:text-3xl font-bold">Get In Touch With Us</h1>
          <div className="lg:w-[500px] sm:w-full  mx-auto">
            <p className="lg:mt-5 mt-2 text-[12px] lg:text-sm md:text-sm text-[#9F9F9F] font-light  ">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>
        </div>
        {/* address-form */}
        <div className="lg:w-[800px] sm:w-full mx-auto flex flex-col lg:flex-row justify-between lg:gap-40 gap-10 lg:my-20 my-5">
          <div className="flex mx-auto justify-between ">
            <div>
              <div className="mb-5 lg:mb-10">
                <h3 className="text-xl gap-2 font-bold flex items-center">
                  <ImLocation className="" />
                  Address
                </h3>
                <div className="indent-7 mt-1">
                  <p className="text-sm ">236 5th SE Avenue, New</p>
                  <p className="text-sm ">York NY10000, United</p>
                  <p className="text-sm ">States</p>
                </div>
              </div>
              <div className="mb-5 lg:mb-10">
                <h3 className="text-xl gap-2 font-bold flex items-center">
                  <FaPhone className="" />
                  Phone
                </h3>
                <div className="indent-7 mt-1">
                  <p className="text-sm ">Mobile: +(84) 546-6789</p>
                  <p className="text-sm ">Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className="mb-5 lg:mb-10">
                <h3 className="text-xl gap-2 font-bold flex items-center ">
                  <IoIosTime className="" />
                  Working Time
                </h3>
                <div className="indent-7 mt-1">
                  <p className="text-sm ">Monday-Friday: 9:00 -</p>
                  <p className="text-sm ">22:00</p>
                  <p className="text-sm ">Saturday-Sunday: 9:00 -</p>
                  <p className="text-sm ">21:00</p>
                </div>
              </div>
            </div>
          </div>
          {/* form */}
          <div className="lg:w-[400px] sm:w-full lg:mb-0 mb-5">
            <p className=" font-bold">Your name</p>
            <input
              type="text"
              placeholder="abc"
              className="border border-black p-3 px-5 rounded-md w-full mt-4"
            />
            <p className="mt-10 font-bold">Email address</p>
            <input
              type="email"
              placeholder="example@.com"
              className="border border-black p-3 px-5 rounded-md w-full mt-4"
            />
            <p className="mt-10 font-bold">Subject</p>
            <input
              type="text"
              placeholder="This is an optional"
              className="border border-black p-3 px-5 rounded-md w-full mt-4"
            />
            <p className="mt-10 font-bold">Message</p>
            <input
              type="text"
              placeholder="Hi! i’d like to ask about"
              className="border border-black px-5 pt-3 pb-10  rounded-md w-full mt-4"
            />
            <div>
              <button className="bg-[#029FAE] px-20 py-3  text-sm rounded-md text-white font-extralight mt-10 hover:bg-[#02a0aece]">
                submit
              </button>
            </div>
          </div>
        </div>
        {/* brand-speclity */}
        <div className="flex bg-[#F4F4F4] max-w-screen-xl mx-auto py-10 lg:py-20 md:py-14 justify-center items-center ">
          <div className="flex flex-col lg:flex-row  lg:w-[1100px] sm:w-full justify-between gap-20 lg:gap-0">
          <div className="flex items-center">
            <div>
              <GiTrophyCup className="text-6xl mr-2" />
            </div>
            <div>
              <h4 className="text-2xl font-bold tracking-wide">High Quality</h4>
              <p>Crafted from top material</p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <HiOutlineCheckBadge className="text-6xl mr-2" />
            </div>
            <div>
              <h4 className="text-2xl font-bold tracking-wide">
                Warranty Protection
              </h4>
              <p>Over 2 Year</p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <RiCustomerService2Line className="text-6xl mr-2" />{" "}
            </div>
            <div>
              <h4 className="text-2xl font-bold tracking-wide">24/7 Support</h4>
              <p>Dedicated Support</p>
            </div>
          </div>
          </div>
          {/*
           */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
// [#636270] text
// [#029FAE] button
// [#272343] heading
// [#F0F2F3] bg


