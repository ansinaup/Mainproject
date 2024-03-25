import React from 'react'

function Offers() {
  return (
    <div className='mx-7 flex gap-3 justify-center flex-col lg:flex-row mt-16 mb-16 p-10'>
        <div className='flex bg-orange-200  rounded-md pt-8' >
            <div className='px-14 '>
            <button className='bg-teal-500 px-5 py-2 text-white rounded-lg'>25% OFF</button>
            <h1 className='font-bold mt-5 text-xl max-[449px]:text-lg'>BLACK GARLIC OIL</h1>
             <p className=' mt-4 font-semibold text-lg max-[449px]:text-sm'>Stronger and Thicker hair with black Garlic <br/> Oil.</p>
             <p className='text-md'>$48</p>
             <p className='font-bold mt-3 text-xl'>$37 <span className='text-sm font-normal'>Including Tax</span></p>
            </div>

            <div>
                <img src="/src/img/oil.png" alt="" srcset="" className='w-64 max-[600px]:hidden' />
            </div>

        </div>

 <div className='flex-row'>
    <div className='flex bg-green-200  rounded-md p-8 pb-4 mt-4' >
            <div className=''>
            <button className='bg-teal-500 px-3 py-1 text-white rounded-lg'>25% OFF</button>
            <h1 className='font-bold mt-3 text-xl  max-[409px]:text-sm'>Dental care set for Vivid <br/>and Bright Smiles</h1>
             <p>$48</p>
             <p className='font-bold '>$22.09 <span className='text-sm font-normal'>Including Tax</span></p>
            </div>

            <div>
                <img src="/src/img/paste.png" alt="" srcset="" className='w-36 max-[409]:hidden' />
            </div>

        </div>

        <div className='flex bg-lime-300 rounded-md p-8 pb-4 mt-4' >
            <div className=''>
            <button className='bg-teal-500 px-3 py-1 text-white rounded-lg'>25% OFF</button>
            <h1 className='font-bold mt-3 text-xl max-[409px]:text-sm'>BANANA FLAVOURED <br/>TOUTHPASTE </h1>
             <p>$48</p>
             <p className='font-bold'>$22.09 <span className='text-sm font-normal'>Including Tax</span></p>
            </div>

            <div>
                <img src="/src/img/bein.png" alt="" srcset="" className='w-36 max-[409]:hidden' />
            </div>

        </div>


       
 </div>



    </div>


  )
}

export default Offers