import React from 'react'
import { CiShoppingBasket } from "react-icons/ci";

function HomeBanner() {
  return (
    <div className='bg-green-900 h-fit-content flex justify-around items-center md:flex-row  flex-col '>
    <div className=' '>
    <h1 className='text-white font-bold text-[45px]'>Your Prescription For <br/>Affordable Health <br/>Solutions! </h1>
    <p className='text-white font-mono mt-5'>Elevate your health journey with exclusive discounts and unparalleled<br/> convenience.Your to well-being starts here,where every purchase<br/> is a prescription for savings.</p>
    <button className=' glow-on-hover  bg-white flex gap-2 text-green-400 border-[2px] border-black-100 p-2 rounded font-bold mt-5 font-mono mb-6'>start shoppin <CiShoppingBasket /></button>
    </div>
    <div>
    <img  src="/src/img/doctor.png" alt="" />
    </div>

</div>
  )
}

export default HomeBanner