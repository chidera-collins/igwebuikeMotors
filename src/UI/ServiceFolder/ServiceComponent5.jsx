import React from 'react'
import icon1 from './ServicesPicture/icon-01.svg'
import icon2 from './ServicesPicture/icon-02.svg'
import icon3 from './ServicesPicture/icon-03.svg'

function ServiceComponent5() {
  return (
    <div className='min-h-[100px] w-full  bg-mybg flex flex-col items-center'>
        <section className='min-h-[100px] w-[90%] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
            <div className='grid place-items-center text-center'>
                <img src={icon1} alt="" />
                <div>
                    <h1 className='text-[#808080a3] font-semibold lg:text-[1.4rem] text-[1.2rem]'>Issue Identification</h1>
                    <p className='text-white font-[400] text-[14px] leading-7'>
                        The mechanic or service advisor talks to the customer to understand the problem noises, performance issues, warning lights
                    </p>
                </div>
            </div>
            <div className='grid place-items-center text-center'>
                <img src={icon2} alt="" />
                <div>
                    <h1 className='text-[#808080a3] font-semibold lg:text-[1.4rem] text-[1.2rem]'>Quality Control and Testing</h1>
                    <p className='text-white font-[400] text-[14px] leading-7'>
                    The mechanic or service advisor talks to the customer to understand the problem noises, performance issues, warning lights

                    </p>
                </div>
            </div>
            <div className='grid place-items-center text-center'>
                <img src={icon3} alt="" />
                <div>
                    <h1 className='text-[#808080a3] font-semibold lg:text-[1.4rem] text-[1.2rem]'>Customer And Notification</h1>
                    <p className='text-white font-[400] text-[14px] leading-7'>
                    The mechanic or service advisor talks to the customer to understand the problem noises, performance issues, warning lights
                        
                    </p>
                </div>
            </div>

        </section>
    </div>
  )
}

export default ServiceComponent5