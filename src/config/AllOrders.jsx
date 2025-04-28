import React from 'react'
import { IoIosCart } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
function AllOrders() {
  return (
    <div>
        <div  className='min-h-screen bg-  w-full flex flex-col items-center text-white capitalize pb-[100px] lg:pb-0'>
            <h1 className='  font-bold text-md '>Recent Orders</h1>
            <div className='min-h-[200px] bg-[#808080a3] w-[90%] lg:w-[70%] p-4 mt-5 grid grid-cols-1 border-l-4 border-l-text  rounded-2xl'>
                <div>
                    <h2 className='flex items-center font-bold text-md gap-2'> <span><IoIosCart /></span> Order #Orde-001</h2>
                    <h3 className='flex  gap-2 items-center'> <span><FaRegCalendarCheck/></span> 2025-08-10</h3>
                    <h1  className='flex  gap-2 items-center'><span><IoPersonOutline /></span>Parker jones</h1>
                </div>
                <div className='bg border-t-[black] border-t-2'>
                    <h2 className='font-bold text-md'>Ordered Items</h2>
                    <section className='b  w-full  flex justify-between'>
                        <h3>Mazda</h3>
                        <h1>$400000</h1>
                    </section>
                </div>
                <div className='flex justify-between border-t-[black] border-t-2'>
                    <h1  className='font-bold text-md'>total</h1>
                    <h2 className='font-bold text-md'>$40000</h2>
                </div>
        
            </div>
        
            <div className='min-h-[200px] bg-[#808080a3]  w-[90%] lg:w-[70%] p-4 mt-5 grid grid-cols-1 border-l-4 border-l-text  rounded-2xl'>
                <div>
                    <h2 className='flex items-center font-bold text-md gap-2'> <span><IoIosCart /></span> Order #Orde-001</h2>
                    <h3 className='flex  gap-2 items-center'> <span><FaRegCalendarCheck/></span> 2025-08-10</h3>
                    <h1  className='flex  gap-2 items-center'><span><IoPersonOutline /></span>Parker jones</h1>
                </div>
                <div className='bg border-t-[black] border-t-2'>
                    <h2 className='font-bold text-md'>Ordered Items</h2>
                    <section className='b  w-full  flex justify-between'>
                        <h3>Benz</h3>
                        <h1>$400000</h1>
                    </section>
                </div>
                <div className='flex justify-between border-t-[black] border-t-2'>
                    <h1  className='font-bold text-md'>total</h1>
                    <h2 className='font-bold text-md'>$40000</h2>
                </div>
            </div>
        
            <div className='min-h-[200px] bg-[#808080a3] w-[90%] border-l-text border-l-4 lg:w-[70%] p-4 mt-5 grid grid-cols-1  rounded-2xl'>
                <div>
                    <h2 className='flex items-center font-bold text-md gap-2'> <span><IoIosCart /></span> Order #Orde-001</h2>
                    <h3 className='flex  gap-2 items-center'> <span><FaRegCalendarCheck/></span> 2025-08-10</h3>
                    <h1  className='flex  gap-2 items-center'><span><IoPersonOutline /></span>Parker jones</h1>
                </div>
                <div className='bg border-t-[black] border-t-2'>
                    <h2 className='font-bold text-md'>Ordered Items</h2>
                    <section className='b  w-full  flex justify-between'>
                    <h3>Benz</h3>
                    <h1>$400000</h1>
                    </section>
                </div>
                <div className='flex justify-between border-t-[black] border-t-2'>
                    <h1  className='font-bold text-md'>total</h1>
                    <h2 className='font-bold text-md'>$40000</h2>
                </div>
        
            </div>
     
            <div className='min-h-[200px] bg-[#808080a3] w-[90%] border-l-text border-l-4 lg:w-[70%] p-4 mt-5 grid grid-cols-1  rounded-2xl'>
                <div>
                    <h2 className='flex items-center font-bold text-md gap-2'> <span><IoIosCart /></span> Order #Orde-001</h2>
                    <h3 className='flex  gap-2 items-center'> <span><FaRegCalendarCheck/></span> 2025-08-10</h3>
                    <h1  className='flex  gap-2 items-center'><span><IoPersonOutline /></span>Parker jones</h1>
                </div>
                <div className='bg border-t-[black] border-t-2'>
                    <h2 className='font-bold text-md'>Ordered Items</h2>
                    <section className='b  w-full  flex justify-between'>
                        <h3>Benz</h3>
                        <h1>$400000</h1>
                    </section>
                </div>
                <div className='flex justify-between border-t-[black] border-t-2'>
                    <h1  className='font-bold text-md'>total</h1>
                    <h2 className='font-bold text-md'>$40000</h2>
                </div>
        
            </div>
        
        </div>
    </div>
  )
}

export default AllOrders