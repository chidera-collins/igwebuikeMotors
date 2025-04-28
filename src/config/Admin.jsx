import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { BsCashCoin } from "react-icons/bs";
import { FaUserCog } from "react-icons/fa";
import { RiHomeLine } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";
import { IoMdLogOut } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import {FaUsers} from "react-icons/fa";
import Button from "../Reusuable Folder/Button";

function Admin() {
    // let [showMe, setShowMe] = useState(false);
    const { pathname } = useLocation();

   
  return (
    <div>        
        <div className="h-[100vh] relative flex bg-gray-100 lg:p-5 text-[14px] gap-[20px]">

            
            <nav className="phone-navigation lg:hidden  h-[80px] w-full bg-mybg text-white absolute z-50 bottom-0 grid grid-cols-5  ">
                <Link to='/' className="   flex flex-col items-center justify-center ">
                    <span className=" text-[1.8rem]"><RiHomeLine /></span>
                    <span>Home</span>
                </Link>
                <Link to='/admin/orders' className="  flex flex-col items-center justify-center ">
                    <span className=" text-[1.8rem] "><GiPayMoney /></span>
                    <span>All Orders</span>
                </Link>


                <Link to='/admin/addproduct' className="    flex flex-col items-center justify-center ">
                    <span className=" text-[1.8rem] "><BsCashCoin /></span>
                    <span>Add Cars</span>
                </Link>

                
                <Link to='/admin/viewproduct' className="    flex flex-col items-center justify-center ">
                    <span className=" text-[1.8rem] "><FaUserCog /></span>
                    <span>All Product</span>
                </Link>
               

                <Link to='/admin'  className="   flex flex-col items-center justify-center ">
                    <span className=" text-[1.8rem] "><FaRegUserCircle /></span>
                    <span>Profile</span>
                </Link>
           </nav>

            <div className=";LARGE SCREEN  hidden lg:inline-block">
                <nav className="absolute  md:relative  bg-black h-[600px] top-0 bottom-0 overflow-y-hidden group transition-all duration-700  rounded-[15px] text-white flex flex-col gap-3 p-[20px] overflow-x-hidden">
                    <Link to='/'> <h1 className=" font-bold flex gap-2 pl-[10px]">
                    <span className=" i">IGM</span>ADMIN Dashboard
                    </h1></Link>
                    <hr className=" h-[1px] bg-custom-gradient w-[100%] border-t-0 opacity-[.25]" />
                    <ul className=" leading-[47px]">
                        <li
                        className={
                        (pathname ==='/admin' ? "  text-text font-semibold" : "") +
                        " rounded-[5px] pl-[25px]"
                        }
                        >
                        <Link to='/admin' className=" flex gap-[6px] items-center">
                        <FaUsers /> Dashboard
                        </Link>
                        </li>

                        <li
                        className={
                        (pathname ==='/admin/addproduct' ? "  text-text font-semibold" : "") +
                        " rounded-[5px] pl-[25px]"
                        }
                        >
                        <Link
                        to='/admin/addproduct'
                        className=" flex gap-[6px] items-center"
                        >
                        <BsCashCoin /> Add Cars
                        </Link>
                        </li>

                        <li
                        className={
                        (pathname === '/admin/orders' ? "  text-text font-semibold" : "") +
                        " rounded-[5px] pl-[25px]"
                        }
                        >
                        <Link to='/admin/orders' className=" flex gap-[6px] items-center">
                        <FaUserCog /> View All Order
                        </Link>
                        </li>


                        <li
                        className={
                        (pathname === '/admin/viewproduct' ? " bg text-text font-semibold" : "") +
                        " rounded-[5px] pl-[25px]"
                        }
                        >
                        <Link to='/admin/viewproduct' className=" flex gap-[6px] items-center">
                        <FaUserCog /> View All Product
                        </Link>
                        </li>
                
                    </ul>

                    <div>
                        <Link>
                            <Button className="  p-[10px] w-[100%] text-white bg-text rounded-[10px] bg font-bold flex gap-2 justify-center items-center mt-[50px] cursor-pointer"
                            label={
                                <>
                                <BiLogOut/>
                                Logout
                                </>
                            }
                            />
                        </Link>     
                    </div>
                </nav>
            </div>
            <div className=" flex-1 bg-black rounded-2xl shadow-xl overflow-y-scroll scrollbar-thumb-text scrollbar-thin scrollbar-corner-black scrollbar-track-slate-200">
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Admin