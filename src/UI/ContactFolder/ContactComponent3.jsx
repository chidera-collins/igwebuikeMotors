import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

function ContactComponent3() {
  return (
    <div>
        <div className='min-h-[500px] lg:min-h-[400px] w-full grid bg-mybg grid-cols-1 lg:grid-cols-3 lg:p-10 p-4'>
            <div className='bg-[#80808053] flex flex-col items-center justify-center border-1 border-[gray]'>
                <div className='h-[40px] w-[40px] bg-mybg grid place-items-center text-text lg:text-[2rem] font-bold'>
                    <IoLocationOutline />
                </div>
                <h1 className='text-white text-[1.5rem] font-medium'>Location</h1>
                <p className='text-white'>138,ojo igbede road office bustop, lagos,Nigeria</p>
            </div>
            <div className='bg-[#80808053] flex flex-col items-center justify-center border-1 border-[gray]'>
                <div className='h-[40px] w-[40px] bg-mybg grid place-items-center text-text lg:text-[2rem] font-bold'> 
                    <MdOutlineEmail />
                </div>
                <h1 className='text-white text-[1.5rem] font-mediu, '>Email</h1>
                <p className='text-white'>chideracollins24@gmail.com</p>
            </div>
            <div className=' bg-[#80808053] flex flex-col items-center justify-center border-1 border-[gray]'>
                <div className='h-[40px] w-[40px] bg-mybg text-text grid place-items-center lg:text-[2rem] font-bold'>
                 <MdOutlineLocalPhone />
                </div>
                <h1 className='text-white text-[1.5rem] font-mediu, '>Phone</h1>
                <p className='text-white'>+234 90 1699 0551</p>
            </div>

        </div>
    </div>
  )
}

export default ContactComponent3