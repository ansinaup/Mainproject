
import { IoIosArrowForward } from "react-icons/io";

function Minicard  ({style,icon,para,para1})  {

// const data=[
// {

//     icon:<CiBadgeDollar />,
//     para:"Get 25%",
//     para1:"OFF",
//     style:"bg-green-200"
// },
// {

//     icon:<CiDeliveryTruck />,
//     para:"Free home",
//     para1:"Delivery",
//     style:"bg-amber-200"
// },
// {

//     icon:<FaUserDoctor />,
//     para:"Doctor's ",
//     para1:"Appointment",
//     style:"bg-lime-200"
// },
// {

//     icon:<LuStethoscope />,
//     para:"Health",
//     para1:"Advice",
//     style:"bg-violet-200"
// }
    

// ]


  return (
   
                <>
                <div className = {` flex justify-evenly items-center  py-5 w-full rounded-lg max-[612px]:mb-3  ${style}`}>
                <div>
                    <i className='text-2xl'>{icon}</i>
                </div>
                <div>
                    <p className='font-bold'> {para}<span><br/>{para1}</span></p>
                </div>
                <IoIosArrowForward />

                </div>
                
         
                </>
  )
}

export default Minicard