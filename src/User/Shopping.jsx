import React from 'react'
import { data1 } from '../api/data1'
import CardProduct from './components/card/CardProduct'

function Shopping() {
  return (
    <div className=''>
         <div className='ms-28 mt-8'>
      

    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center'>
            {data1.map((item,index)=><CardProduct img={item.img}  name={item.para} para={item.para1} key={index} />)}

    </div>

    </div>
    </div>
  )
}

export default Shopping