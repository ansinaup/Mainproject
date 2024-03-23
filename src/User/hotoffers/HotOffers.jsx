import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function HotOffers() {
  return (
    // <div className='flex justify-center bg-blue-100 '>
    <div className='  bg-blue-100 flex items-center  rounded-lg   justify-around  mt-16 mb-16  ' >
        <div className='font-mono '>
            <p className=''>Todays Hot Offer</p>
            <h1 className='font-bold  text-4xl mt-2'>UnLock 50% Off on <br/>Essential Medicines!</h1>
            <p className='mt-5'>Embrace Wellness without breaking the bank!Enjoy a generous<br/>25% discount on a wide range of vital medicines at our online<br/>pharmacy.Your health matters, and so does your budget.</p>
            <div className="flex mt-5">
            <button className="text-white text-m font-bold font-mono bg-teal-600 flex rounded-sm mb-11 px-5 py-3 " >Place An Order Now
            <IoIosArrowRoundForward className="text-white text-3xl  cursor-pointer "  /></button>
          </div>
        </div>

        <div>
            <img src="/src/img/herbs.png" alt="" srcset="" className=' w-[290px] mt-7' />
        </div>
    </div>
    // </div>
  )
}

export default HotOffers