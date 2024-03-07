import React from 'react'
import { data1 } from '../../api/data1';
import CardProduct from '../components/card/CardProduct';
import HomeBanner from '../components/homebanner/HomeBanner';
import { data2 } from '../../api/data2';
import Minicard from '../minicards/Minicard';
import { FaArrowRight } from "react-icons/fa";
import Offers from '../offers/Offers';
import { IoIosArrowRoundForward } from "react-icons/io";
import HotOffers from '../hotoffers/HotOffers';
import Latest from '../latest/Latest';





function Home() {
    

  return (
    <>

   <div>
    <HomeBanner/>
   </div>
   
   <div className="flex justify-evenly p-14 flex-col sm:flex-row md:flex-row">
      {
        data2.map((item,index)=><Minicard  icon={item.icon} para={item.para} para1={item.para1} style={item.style} key={index} /> )}
          </div>

    {/* <div className='flex flex-wrap gap-5 justify-center'>
            {data1.map((item,index)=><CardProduct img={item.img}  name={item.para} para={item.para1} key={index} />)}

    </div> */}

    <div>

<div className="flex  justify-between  flex-col sm:flex-row  mx-5">
          <h2 className="text-2xl font-medium">New  Products</h2>
          <div className="flex ">
            <button className="text-green-500 text-m font-bold font-mono">View All</button>
            <IoIosArrowRoundForward className="text-green-500 text-3xl mt-1 cursor-pointer" />
          </div>
        </div>
      

    <div className='flex flex-wrap gap-5 justify-center'>
            {data1.map((item,index)=><CardProduct img={item.img}  name={item.para} para={item.para1} key={index} />)}

    </div>

    </div>


    <div>

<div className="flex  justify-between  flex-col sm:flex-row mx-5">
          <h2 className="text-2xl font-medium">Popular Products</h2>
          <div className="flex ">
            <button className="text-green-500 text-m font-bold font-mono">View All</button>
            <IoIosArrowRoundForward className="text-green-500 text-3xl mt-1 cursor-pointer" />
          </div>
        </div>
      

    <div className='flex flex-wrap gap-5 justify-center'>
            {data1.map((item,index)=><CardProduct img={item.img}  name={item.para} para={item.para1} key={index} />)}

    </div>

    </div>

    <Offers/>


    <div>

<div className="flex  justify-between  flex-col sm:flex-row  mx-5">
          <h2 className="text-2xl font-medium">Top Products</h2>
          <div className="flex ">
            <button className="text-green-500 text-m font-bold font-mono">View All</button>
            <IoIosArrowRoundForward className="text-green-500 text-3xl mt-1 cursor-pointer" />
          </div>
        </div>

        
      

    <div className='flex flex-wrap gap-5 justify-center'>
            {data1.map((item,index)=><CardProduct img={item.img}  name={item.para} para={item.para1} key={index} />)}

    </div>


    <div className="flex justify-evenly p-14 flex-col sm:flex-row md:flex-row">
      {
        data2.map((item,index)=><Minicard  icon={item.icon} para={item.para} para1={item.para1} style={item.style} key={index} /> )}
          </div>

    </div>


    <div>

<div className="flex  justify-between  flex-col sm:flex-row mx-5 ">
          <h2 className="text-2xl font-medium">Medical Products</h2>
          <div className="flex ">
            <button className="text-green-500 text-m font-bold font-mono">View All</button>
            <IoIosArrowRoundForward className="text-green-500 text-3xl mt-1 cursor-pointer" />
          </div>
        </div>
      

    <div className='flex flex-wrap gap-5 justify-center '>
            {data1.map((item,index)=><CardProduct img={item.img}  name={item.para} para={item.para1} key={index} />)}

    </div>

    </div>


    <div>

<div className="flex  justify-between  flex-col sm:flex-row mx-5">
          <h2 className="text-2xl font-medium">Upcoming Products</h2>
          <div className="flex ">
            <button className="text-green-500 text-m font-bold font-mono">View All</button>
            <IoIosArrowRoundForward className="text-green-500 text-3xl mt-1 cursor-pointer" />
          </div>
        </div>
      

    <div className='flex flex-wrap gap-5 justify-center'>
            {data1.map((item,index)=><CardProduct img={item.img}  name={item.para} para={item.para1} key={index} />)}

    </div>

    </div>

    <HotOffers/>
    <Latest/>

    

   
    
    </>
  )
}

export default Home