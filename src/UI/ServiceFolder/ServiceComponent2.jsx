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
                 <h1 className='text-white lg:text-[2rem] text-[28px] font-[600]'>Igwebuike <span className='text-text underline'>Service</span> Center</h1>
                </div>
                
                <div className='leading-7 flex flex-col justify-center text-start'> 
                     <p className='text-textColor font-[400] text-[14px]'>
                     At Igwebuike motors ltd, we make car buying simple and hassle-free. Browse a wide selection of new and used vehicles from trusted dealers and private sellers. Compare prices, check detailed specifications, and connect with sellers all in one place. Whether you're looking for a budget-friendly ride or a luxury car, we’ve got you covered. Start your journey today and drive away with confidence!

                    </p>

                    <div className='flex gap-2.5 items-center '>
                    <div className="relative h-[40px] w-[110px] mt-4 overflow-hidden bg-text rounded group cursor-pointer">
                        <div className="absolute inset-0 z-30 flex items-center gap-1 justify-center pointer-events-none">
                            <span className="text-white font-semibold text-[1rem]"> Contact us</span>
                        </div>
                        <Button
                        className="absolute top-[-100%] w-full h-full bg-mybg z-20 transition-all duration-1000 ease-in-out group-hover:top-0"
                        />
                        <Button
                        className="absolute top-[100%] w-full h-full bg-mybg z-10 transition-all duration-1000 ease-in-out group-hover:top-0"
                        />
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