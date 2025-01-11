import React from "react";
import { GoPlus } from "react-icons/go";

const Faq = () => {
  return (
    <section>
      <div className="my-10 lg:my-20 md:my-20">
        <div className="max-w-screen-xl  mx-auto px-4 lg:px-0">
          <div className="text-center">
            <p className=" text-xl lg:text-3xl md:text-3xl font-bold mb-5 ">Questions Looks Here</p>
            <p className="text-[#636270] text-[12px] lg:text-[16px] md:text-[16px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
          </div>
          <div className="flex gap-[10px] justify-between lg:gap-[20px] flex-col lg:flex-wrap lg:flex-row md:flex-wrap md:flex-row mt-10 lg:mt-14 md:mt-14">
          <div className="lg:w-[630px] sm:w-full  md:w-[360px]   bg-[#F0F2F3] p-5">
            <p className="flex justify-between text-md  items-center font-bold mb-5">What types of chairs do you offer? <span className="text-2xl"><GoPlus/></span></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
          </div>
          <div className="lg:w-[630px] sm:w-full  md:w-[360px]  bg-[#F0F2F3] p-5">
            <p className="flex justify-between text-md items-center font-bold mb-5">How can we get in touch with you? <span className="text-2xl"><GoPlus/></span></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
          </div>
          <div className="lg:w-[630px] sm:w-full  md:w-[360px]  bg-[#F0F2F3] p-5">
            <p className="flex justify-between text-md items-center font-bold mb-5">Do your chairs come with a warranty? <span className="text-2xl"><GoPlus/></span></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
          </div>
          <div className="lg:w-[630px] sm:w-full  md:w-[360px]  bg-[#F0F2F3] p-5">
            <p className="flex justify-between text-md items-center font-bold mb-5">What will be delivered? And When? <span className="text-2xl"><GoPlus/></span></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
          </div>
          <div className="lg:w-[630px] sm:w-full  md:w-[360px]  bg-[#F0F2F3] p-5">
            <p className="flex justify-between text-md items-center font-bold mb-5">Can I try a chair before purchasing? <span className="text-2xl"><GoPlus/></span></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
          </div>
          <div className="lg:w-[630px] sm:w-full  md:w-[360px]  bg-[#F0F2F3] p-5">
            <p className="flex justify-between text-md items-center font-bold mb-5">How do I clean and maintain my Comforty chair? <span className="text-2xl"><GoPlus/></span></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
          </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Faq;
// [#636270] text
// [#029FAE] button
// [#272343] heading
// [#F0F2F3] bg
{/* <section>
<div className="my-5 md:my-10 lg:my-20">
  <div className="max-w-screen-xl  mx-auto px-4 lg:px-0">
    <div className="text-center">
      <p className="text-xl lg:text-3xl md:text-3xl font-bold mb-5 ">Questions Looks Here</p>
      <p className="text-[#636270] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
    </div>
    <div className="flex gap-[10px] lg:gap-[20px] flex-col lg:flex-wrap md:flex-wrap mt-14">
    <div className="lg:w-[615px] md:w-full sm:w-full bg-[#F0F2F3] p-5">
      <p className="flex justify-between text-xl items-center font-bold mb-5">What types of chairs do you offer? <span className="text-xl lg:text-2xl md:text-2xl"><GoPlus/></span></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
    </div>
    <div className="lg:w-[615px] sm:w-full bg-[#F0F2F3] p-5">
      <p className="flex justify-between text-md lg:text-xl md:text-xl items-center font-bold mb-5">How can we get in touch with you? <span className="text-xl lg:text-2xl md:text-2xl"><GoPlus/></span></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
    </div>
    <div className="lg:w-[615px] sm:w-full bg-[#F0F2F3] p-5">
      <p className="flex justify-between text-md lg:text-xl md:text-xl items-center font-bold mb-5">Do your chairs come with a warranty? <span className="text-xl lg:text-2xl md:text-2xl"><GoPlus/></span></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
    </div>
    <div className="lg:w-[615px] sm:w-full bg-[#F0F2F3] p-5">
      <p className="flex justify-between text-md lg:text-xl md:text-xl items-center font-bold mb-5">What will be delivered? And When? <span className="text-xl lg:text-2xl md:text-2xl"><GoPlus/></span></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
    </div>
    <div className="lg:w-[615px] sm:w-full bg-[#F0F2F3] p-5">
      <p className="flex justify-between text-md lg:text-xl md:text-xl items-center font-bold mb-5">Can I try a chair before purchasing? <span className="text-xl lg:text-2xl md:text-2xl"><GoPlus/></span></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
    </div>
    <div className="lg:w-[615px] sm:w-full bg-[#F0F2F3] p-5">
      <p className="flex justify-between text-md lg:text-xl md:text-xl items-center font-bold mb-5">How do I clean and maintain my Comforty chair? <span className="text-xl lg:text-2xl md:text-2xl"><GoPlus/></span></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
    </div>
    </div>
  </div>
</div>
</section> */}