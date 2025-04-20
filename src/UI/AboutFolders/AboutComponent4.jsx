import React from 'react'
import { FiPhoneCall } from "react-icons/fi";

function AboutComponent4() {
  return (
    <div>
         <section className='min-h-[100px] w-full flex justify-center bg-mybg py-6'>
            <div className='h-[150px] w-[80%] bg-[#80808053] rounded-[2%] flex flex-col justify-center lg:flex-row px-2 lg:justify-around items-center'>
                <h1 className='lg:text-[2rem] font-semibold text-white capitalize'>if you have any question call</h1>
                <h1 className='lg:text-[1.4rem] font-semibold text-white capitalize flex items-center gap-2'> <span className='text-text '><FiPhoneCall /></span>+234 8400 3884 987</h1>
                
               

            </div>

        </section>
    </div>
  )
}

export default AboutComponent4