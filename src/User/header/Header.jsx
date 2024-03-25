import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
// import { IoPersonSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import Dropdown from "../dropdown/dropdown";
import { Link } from "react-router-dom";
import Dropdown2 from "../dropdown/dropdown2";
function Header() {
    return (
      <>
        <div className="bg-gray-100 py-3">
          <div className="container mx-auto flex justify-between items-center">

            <div className="text-black mx-7">
              <img className="w-[200px]" src="/src/img/image.png" alt="" />
            </div>


            <div className="border py-0  rounded-lg max-[1000px]:hidden items-center ">
        <div className=" flex justify-center items-center">
            <div className="ms-4 text-teal-600"> <Dropdown2/></div>
            <span className=" bg-teal-600 w-[3px] h-[20px] ms-3"></span>
            <input placeholder="search medicines,medical products" className="ps-3 bg-transparent outline-none " type="text" />

            <div className="ms-[300px] bg-teal-600 px-5 py-5 rounded">
            <FaSearch className="text-white" />
            </div>
        </div>
       </div>


            <div className="flex">
              <Link to={'wishlist'}>

              <a href="#" className="anger"><FaHeart className="w-8 text-teal-600 hover:text-black" /></a>
              </Link>
              <span className="mx-2 text-teal-600">|</span>
              <Link to={'cart'}>
              <a href="#" className="anger"><FaCartShopping className="w-8 text-teal-600 hover:text-black"/></a>
              </Link>
              <span className="mx-2 text-teal-600">|</span>
        <Dropdown/>
        <span className="span"></span>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Header;
