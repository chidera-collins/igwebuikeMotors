import React from 'react'
import Button from '../../Reusuable Folder/Button'
import { FaPhone } from 'react-icons/fa6'
import service7 from './ServicesPicture/service07.webp'
import service8 from './ServicesPicture/service08.webp'

function ServiceComponent2() {
  return (
    <div className='min-h-[100px] w-full flex justify-center bg-mybg'>
        <div className='min-h-[400px] w-[90%] bg- grid grid-cols-1 lg:grid-cols-2 text-white mt-[90px]'>
            <div className='grid grid-cols-1 gap-7'>
                <div>
                    <img src={service7} alt={service7} />
                </div>
                <div>
                <img src={service8} alt={service8} />
                </div>
            </div>
            <div className='grid grid-cols-1 p-3'>
                <div className='flex flex-col justify-end'>
                 <h3 className='text-text'>Car Dealer Service</h3>
                 <h1 className='text-white lg:text-[2rem] text-[1.4rem] font-semibold'>Igwebuike <span className='text-text underline'>Service</span> Center</h1>
                </div>
                
                <div className='leading-8 flex flex-col justify-center text-start'> 
                     <p>
                     At Igwebuike motors ltd, we make car buying simple and hassle-free. Browse a wide selection of new and used vehicles from trusted dealers and private sellers. Compare prices, check detailed specifications, and connect with sellers—all in one place. Whether you're looking for a budget-friendly ride or a luxury car, we’ve got you covered. Start your journey today and drive away with confidence!

                    </p>

                    <div className='flex gap-2.5 items-center '>
                    <div className="h-[40px] w-[110px] bg-text mt-4 relative cursor-pointer justify-center flex group text-center flex-col overflow-hidden">
                                 <Button className="h-[23px] w-[100%] cursor-pointer absolute transition delay-150 duration-300 ease-in-out -translate-y-6 group-hover:-translate-y-1 bg-mybg top-0 gap-1 flex items-center justify-center" />
                                 <h2 className="text-[white] z-20 hover:z-20 font-medium text-[1rem] text-center flex justify-center items-center gap-1">
                                        contact us
                                 </h2>
                                  <Button className="h-[24px] w-[100%] absolute text-[white] bg-mybg z-10 transition delay-150 duration-300 ease-in translate-y-5 group-hover:-translate-y-5 gap-1 font-medium cursor-pointer flex items-center justify-center" />
                    </div>
                    <div className='h-[40px] w-[40px] bg-[grey] flex items-center justify-center mt-4'>
                        <FaPhone/>
                    </div>
                    <div className=''>
                        <h1>Call Us Now</h1>
                        <h1>+234 80 3348 0990</h1>
                    </div>
                    </div>

                </div>
               
               
            </div>

        </div>
    </div>
  )
}

export default ServiceComponent2