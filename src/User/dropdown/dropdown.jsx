// import { useState } from "react";
// import {IoPersonSharp } from "react-icons/io5";
// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleDropdownToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (

//     <div className="relative inline-block text-left">
//     <a href="#"  onClick={handleDropdownToggle} className=""><IoPersonSharp  className="w-8 hover:text-black text-teal-600" /></a>
//       <div
//         id="dropdownDelay"
//         className={`absolute z-10 ${isOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dropdown`} >
//         <ul className="py-2 text-sm dark:text-gray-200 text-teal-600" aria-labelledby="dropdownDelayButton">
//           <li>
//             <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-teal-800 dark:hover:text-white">
//              My Account
//             </a>
//           </li>
//           <li>
//             <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-teal-800 dark:hover:text-white ">
//             Home
//             </a>
//           </li>
//           <li>
//             <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-teal-800 dark:hover:text-white ">
//            My Orders
//             </a>
//           </li>

//           <li>
//             <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-teal-800 dark:hover:text-white">
//             Cart
//             </a>
//           </li>
//           <li>
//             <a href="#" className="flex gap-2  px-4 py-2 hover:bg-gray-100 dark:hover:bg-teal-800 dark:hover:text-white">
//             Wishlist
//             </a>
//           </li>
//           <li>
//             <a href="#" className="flex gap-2  px-4 py-2 hover:bg-gray-100 dark:hover:bg-teal-800 dark:hover:text-white">
//             Logout
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default Dropdown
import { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={handleDropdownToggle} className="focus:outline-none">
        <IoPersonSharp className="w-8 hover:text-black text-teal-600" />
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dropdown right-0`}
      >
        <ul className="py-2 text-sm text-teal-600 w-28">
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={handleDropdownToggle}
            >
              My Account
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={handleDropdownToggle}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={handleDropdownToggle}
            >
              My Orders
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={handleDropdownToggle}
            >
              Cart
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={handleDropdownToggle}
            >
              Wishlist
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={handleDropdownToggle}
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
