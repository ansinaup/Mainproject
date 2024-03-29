import { SlCalender } from "react-icons/sl";
function Latest() {
  return (
    <>
    <div className="flex justify-center items-center mt-6">
            <h1 className="text-3xl font-semibold ">Our Latest News & Blogs</h1>
        </div>
    <div className="p-10 m-10 flex gap-3 flex-col lg:flex-row justify-center">
      <div className="border rounded-md">
     <div>
        <img className="w-[460px] h-64 max-[405px]:w-[300px] max-[405px]:h-40" src="https://assets-global.website-files.com/606ac6e3ee6c2713890937ef/608c717ada7dbf797c4279a8_Header%20image%205%20things%20good%20prescription%20plan.png" alt="" />
     </div>
     <div className="flex gap-6 mt-2 p-3">
        <p className="text-teal-600 bg-gray-200 rounded-lg px-1">Doctor</p>
        <div className="flex gap-2">
            <SlCalender className="mt-1"/>
            <p className="text-gray-500">24 Dec,2024</p>
        </div>
     </div>
     <div className="p-3">
        <h1 className="text-3xl font-normal leading-snug">In this Section,we devel into <br /> various aspects of health</h1>
        <p className="mt-5 text-sm text-gray-500">Explore the worldof medical specialities through our blogs spotlight <br />
        feature.from cardiology to padiatrics,we share-in depth articles written 
        by our expert physicians.
        </p> 
       {/* <button className="mt-3 px-5 py-1 bg-teal-600 text-white rounded-lg hover:scale-105">Read More</button> */}
      
       <div className="button-container-1">
      <span className="mas"></span>
    <button className=" hover:scale-105 mt-3 px-2 text-sm bg-teal-600 text-white rounded-lg">Read more</button>
  </div>
     </div>
      </div>
    
    <div className="flex-row">

    {/* fristrow */}
    <div className="border rounded-md ">

      <div className="flex flex-col lg:flex-row">
        <div>
          <img className=" h-48" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQfvV5XqxSPPboJTcFG9nN_1KMqiLtkOmpmkvxMBk3P3f_SCeCX" alt="" />
        </div>
        <div className="flex">
     <div className="p-3">
      <div className="flex gap-4">
      <p className="text-teal-600 bg-gray-200 rounded-lg px-1">Doctor</p>
      <SlCalender className="mt-1"/>
            <p className="text-gray-500">24 Dec,2024</p>
      </div>
        <h1 className="text-md font-normal leading-snug mt-2">In this Section,we devel into <br /> various aspects of health</h1>
        <p className="mt-1 text-sm text-gray-500">Healthy eating emphasizes fruits, vegetables, whole grains, dairy, and protein. Dairy recommendations.
        </p>
        <button className="hover:scale-105 mt-3 px-2 text-sm bg-teal-600 text-white rounded-lg">Read More</button>
     </div>
        </div>
      </div>

    </div>

    {/* secondrow */}
    <div className="border rounded-md mt-2">

<div className="flex flex-col lg:flex-row">
  <div>
    <img className=" h-48" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQfvV5XqxSPPboJTcFG9nN_1KMqiLtkOmpmkvxMBk3P3f_SCeCX" alt="" />
  </div>
  <div className="flex">
<div className="p-3">
<div className="flex gap-4">
<p className="text-green-600 bg-gray-200 rounded-lg px-1">Doctor</p>
<SlCalender className="mt-1"/>
      <p className="text-gray-500">24 Dec,2024</p>
</div>
  <h1 className="text-md font-normal leading-snug mt-2">In this Section,we devel into <br /> various aspects of health</h1>
  <p className="mt-1 text-sm text-gray-500">Healthy eating emphasizes fruits, vegetables, whole grains, dairy, and protein. Dairy recommendations.
  </p>
  <button className="hover:scale-105 mt-3 px-2 text-sm bg-teal-600 text-white rounded-lg">Read More</button>
</div>
  </div>
</div>
</div>

{/* third row */}
<div className="border rounded-md mt-2">

<div className="flex flex-col lg:flex-row">
  <div>
    <img className="w-50 h-48" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQfvV5XqxSPPboJTcFG9nN_1KMqiLtkOmpmkvxMBk3P3f_SCeCX" alt="" />
  </div>
  <div className="flex">
<div className="p-3">
<div className="flex gap-4">
<p className="text-teal-600 bg-gray-200 rounded-lg px-1">Doctor</p>
<SlCalender className="mt-1"/>
      <p className="text-gray-500">24 Dec,2024</p>
</div>
  <h1 className="text-md font-normal leading-snug mt-2">In this Section,we devel into <br /> various aspects of health</h1>
  <p className="mt-1 text-sm text-gray-500">Healthy eating emphasizes fruits, vegetables, whole grains, dairy,and protein. Dairy recommendations.
  </p>
  <button className="hover:scale-105 mt-3 px-2  text-sm bg-teal-600 text-white rounded-lg">Read More</button>
</div>
  </div>
</div>
</div>


</div>
   </div>
   </>
  )
}

export default Latest

