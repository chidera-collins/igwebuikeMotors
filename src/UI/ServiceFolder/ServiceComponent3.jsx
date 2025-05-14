import React from 'react'
import service9 from './ServicesPicture/service09.webp'
import icon13 from './ServicesPicture/icon-13.svg'
import icon14 from './ServicesPicture/icon-14.svg'
import icon15 from './ServicesPicture/icon-15.svg'
import icon16 from './ServicesPicture/icon-16.svg'
function ServiceComponent3() {
  return (
    <div className='min-h-[100px] w-full bg-mybg flex flex-col items-center'>
        <section className='min-h-[100px] bg- w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-5 text-white mt-[80px]'>
            <div>
                <div>
                    <h4 className='text-white lg:text-[1.2rem]'>Why Choose Us</h4>
                    <h1 className='lg:text-[1.4rem] text-white font-semibold'>Why We're The Right <span className='text-text'>Choice</span> For You</h1>
                </div>
                <div className='flex justify-end mt-9'>
                    <img src={service9} alt="" width='50%' height={100} />
                </div>
            </div>
            <div className='grid grid-cols-1 p-4 lg:grid-cols-2 text-start gap-4'>
             <div className='leading-10'>
                 <img src={icon13} alt="icon.svg13" />
            <div>
            <h1 className='text-[#808080a3] font-semibold lg:text-[1.4rem] text-[1.2rem]'>24/7 Support</h1>
      <p className='leading-7 font-[400] text-[14px]'>
        Our dedicated team is available around the clock to assist you with any questions or concerns during your car-buying journey.
      </p>
    </div>
  </div>

  <div className='leading-10'>
    <img src={icon14} alt="icon.svg14" />
    <h1 className='text-[#808080a3] font-semibold lg:text-[1.4rem] text-[1.2rem]'>Competitive Pricing</h1>
    <p className='leading-7 font-[400] text-[14px]'>
      Get the best deals on a wide range of vehicles, with transparent pricing and no hidden fees.
    </p>
  </div>

  <div className='leading-10'>
    <img src={icon15} alt="icon.svg15" />
    <h1 className='text-[#808080a3] font-semibold lg:text-[1.4rem] text-[1.2rem]'>Eco-Friendly Service</h1>
    <p className='leading-7 font-[400] text-[14px]'>
      We promote sustainable practices by offering eco-conscious vehicles and green service options.
    </p>
  </div>

  <div className='leading-10'>
    <img src={icon16} alt="icon.svg16" />
    <h1 className='text-[#808080a3] font-[500] lg:text-[1.4rem] text-[1.2rem]'>Cleaning Technology</h1>
    <p className='leading-7 font-[400] text-[14px]'>
      Our vehicles are maintained with advanced cleaning technology for a fresh and safe experience.
    </p>
  </div>
</div>


        </section>
    </div>
  )
}

export default ServiceComponent3