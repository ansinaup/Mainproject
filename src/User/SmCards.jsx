import React from 'react'
import { IoPeopleSharp } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiUserStarFill } from "react-icons/ri";

function SmCards() {
  return (
    <div>
        <div className='flex gap-20 justify-center  items-center mt-10 flex-col grid-cols-3 sm:flex-row md:flex-row lg:flex-row'>
        <div className='bg-teal-200 w-40  ps-5 pb-4 rounded-md '>
        <IoPeopleSharp  className='mt-4 size-6'/>
        <span className='font-bold'>14K+</span>
        <p className='font-semibold '>Orders<br/>Completed</p>
        </div>

        <div className='bg-orange-200 w-40 ps-5 pb-4 rounded-md'>
        <FaAward  className='mt-4 size-6'/> 
        <span className='font-bold'>250+</span>
        <p className='font-semibold'> Won<br/> Awards</p>
        </div>

        <div className='bg-lime-200 w-40 ps-5 pb-4 rounded-md '>
        <FaPeopleGroup className='mt-4 size-6' /> 
        <span className='font-bold'>8K+</span>
        <p className='font-semibold'>Happy <br/>Customers</p>
        </div>

        <div className='bg-purple-200 w-40 ps-5 pb-4 rounded-md '>
        < RiUserStarFill className='mt-4 size-6' /> 
        <span className='font-bold'>12K+</span>
        <p className='font-semibold'>Positive<br/> Reviews</p>
        </div>

        </div>
    </div>
  )
}



// function SmCards() {
//   return (
//     <div className="flex flex-wrap justify-center items-center mt-16 space-y-5 sm:space-y-0 sm:space-x-5 mb-16">
//       <div className="bg-teal-200 w-full sm:w-auto sm:max-w-xs p-4 rounded-md flex items-center mb-4 sm:mb-0 sm:mr-0 sm:ml-4">
//         <IoPeopleSharp className="mt-2 mr-2 size-6" />
//         <div>
//           <span className="font-bold block">14K+</span>
//           <p className="font-semibold">Orders Completed</p>
//         </div>
//       </div>

//       <div className="bg-orange-200 w-full sm:w-auto sm:max-w-xs p-4 rounded-md flex items-center mb-4 sm:mb-0 sm:mr-0 sm:ml-4">
//         <FaAward className="mt-2 mr-2 size-6" />
//         <div>
//           <span className="font-bold block">250+</span>
//           <p className="font-semibold">Won Awards</p>
//         </div>
//       </div>

//       <div className="bg-lime-200 w-full sm:w-auto sm:max-w-xs p-4 rounded-md flex items-center mb-4 sm:mb-0 sm:mr-0 sm:ml-4">
//         <FaPeopleGroup className="mt-2 mr-2 size-6" />
//         <div>
//           <span className="font-bold block">8K+</span>
//           <p className="font-semibold">Happy Customers</p>
//         </div>
//       </div>

//       <div className="bg-purple-200 w-full sm:w-auto sm:max-w-xs p-4 rounded-md flex items-center mb-4 sm:mb-0 sm:mr-0 sm:ml-4">
//         <RiUserStarFill className="mt-2 mr-2 size-6" />
//         <div>
//           <span className="font-bold block">12K+</span>
//           <p className="font-semibold">Positive  Reviews</p>
//         </div>
//       </div>
//     </div>
//   );
// }

export default SmCards;
