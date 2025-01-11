"use client"

import Image from 'next/image'
import React from 'react'

const NewStyle = () => {
  return (
   
    <section className='px-4'>
  <div className="flex flex-col lg:flex-row gap-4 max-w-screen-xl mx-auto my-[50px] md:my-[150px] ">
    {/* Large Image Section */}
    <div className="w-full lg:w-[620px]">
      <Image
        src={require("@/public/new-style/new-1.png")}
        alt="chair"
        height={620}
        width={620}
        className="hover:cursor-pointer w-full object-cover"
      />
    </div>

    {/* Grid for Smaller Images */}
    <div className="grid grid-cols-2 gap-4 w-full lg:w-[620px]">
      <div>
        <Image
          src={require("@/public/new-style/new-2.png")}
          alt="chair"
          height={300}
          width={300}
          className="hover:cursor-pointer w-full object-cover"
        />
      </div>
      <div>
        <Image
          src={require("@/public/new-style/new-3.png")}
          alt="chair"
          height={300}
          width={300}
          className="hover:cursor-pointer w-full object-cover"
        />
      </div>
      <div>
        <Image
          src={require("@/public/new-style/new-4.png")}
          alt="chair"
          height={300}
          width={300}
          className="hover:cursor-pointer w-full object-cover"
        />
      </div>
      <div>
        <Image
          src={require("@/public/new-style/new-2.png")}
          alt="chair"
          height={300}
          width={300}
          className="hover:cursor-pointer w-full object-cover"
        />
      </div>
    </div>
  </div>
</section>


  )
}

export default NewStyle
{/* <section>
      <div className='flex gap-4 w-[1250px] mx-auto justify-between my-[150px]'>
        <div>
          <Image src={require("@/public/new-style/new-1.png")} alt='chair' height={620} width={620}className='hover:cursor-pointer'/>
        </div>
        <div className='flex w-[620px] flex-wrap gap-4'>
          <div>
          <Image src={require("@/public/new-style/new-2.png")} alt='chair' height={300} width={300} className='hover:cursor-pointer'/>
          </div>
          <div>
          <Image src={require("@/public/new-style/new-3.png")} alt='chair' height={300} width={300}className='hover:cursor-pointer'/>
          </div>
          <div>
          <Image src={require("@/public/new-style/new-4.png")} alt='chair' height={300} width={300}className='hover:cursor-pointer'/>
          </div>
          <div>
          <Image src={require("@/public/new-style/new-2.png")} alt='chair' height={300} width={300}className='hover:cursor-pointer'/>
          </div>
        </div>
      </div>
    </section> */}