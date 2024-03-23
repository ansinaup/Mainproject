import { Link } from "react-router-dom"

// function CardProduct({img,name,para}) {
    
//   return (
//     <>
//     <div className="px-6 py-5  rounded-lg shadow-xl mt-16 mb-5 w-60 hover:scale-105">
//         <div className=" h-fit">
//             <img className="w-32  mx-6" src={img} alt="" />
//         </div>
//         <div className=" items-center text-center">
//             <h2 className="text-xl font-mono font-bold">{name}</h2>
//             <p className=" font-bold text-lg">{para}</p>
//             <div className="text-center">
//             <Link to ="/View">
//                 <button className="bg-teal-400  w-full  text-white rounded-sm mt-4 text-lg">Add To Cart
               
//                 </button>
//                 </Link>
//             </div>
//         </div>
//     </div>


   

//    </>
//   )
// }



function CardProduct({ img, name, para }) {
  return (
    <div className="px-6 py-4 rounded-lg shadow-xl mt-8 mb-4 max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl hover:scale-105 ">
      <div className="h-fit">
        <img className="w-24 mx-auto sm:w-32 md:w-36 lg:w-40 xl:w-48" src={img} alt="" />
      </div>
      <div className="text-center mt-2">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm">{para}</p>
        <div className="mt-2">
          <Link to="/View">
            <button className="bg-teal-400 w-full text-white rounded-sm text-sm py-1">Add To Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;



