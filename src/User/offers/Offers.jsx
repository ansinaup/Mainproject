import React from 'react'

function Offers() {
  return (
    <div className='mx-7 flex gap-8 justify-center flex-col lg:flex-row mt-16 mb-16'>
        <div className='flex bg-orange-200 w-[500px] rounded-md pt-8' >
            <div className='mx-7 mb-7 mt-28 '>
            <button className='bg-teal-500 px-5 py-2 text-white rounded-lg'>25% OFF</button>
            <h1 className='font-bold mt-3 text-xl'>BLACK GARLIC OIL</h1>
             <p className=' mt-3 font-semibold text-lg'>Stronger and Thicker hair with black Garlic <br/> Oil.</p>
             <p>$48</p>
             <p className='font-bold mt-3 text-xl'>$37 <span className='text-sm font-normal'>Including Tax</span></p>
            </div>

            <div>
                <img src="/src/img/oil.png" alt="" srcset="" className='w-[500px]' />
            </div>

        </div>

 <div className=''>
    <div className='flex bg-green-200 w-[500px] rounded-md pt-8 ' >
            <div className='mx-7'>
            <button className='bg-teal-500 px-3 py-1 text-white rounded-lg'>25% OFF</button>
            <h1 className='font-bold mt-3 text-xl'>Dental care set for Vivid <br/>and Bright Smiles</h1>
             <p>$48</p>
             <p className='font-bold '>$22.09 <span className='text-sm font-normal'>Including Tax</span></p>
            </div>

            <div>
                <img src="/src/img/paste.png" alt="" srcset="" className='w-[180px]' />
            </div>

        </div>

        <div className='flex bg-lime-300  w-[500px] rounded-md pt-8 mt-4' >
            <div className='mx-7'>
            <button className='bg-teal-500 px-3 py-1 text-white rounded-lg'>25% OFF</button>
            <h1 className='font-bold mt-3  text-xl'>BANANA FLAVOURED <br/>TOUTHPASTE </h1>
             <p>$48</p>
             <p className='font-bold'>$22.09 <span className='text-sm font-normal'>Including Tax</span></p>
            </div>

            <div>
                <img src="/src/img/bein.png" alt="" srcset="" className='w-[180px]' />
            </div>

        </div>


       
 </div>



    </div>


  )
}

export default Offers