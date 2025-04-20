import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import faqWebp from './faqpictures/faq.webp'

function FAQ3() {
    const [height,setHeight] = useState('0');
    const add =(section)=>{
          setHeight(height === section ? '0':section)
    }
  return (
    <div className='min-h-[100px] w-full flex justify-center bg-mybg'>
        <div className='min-h-[300px] w-[90%] bg flex flex-col-reverse lg:grid lg:grid-cols-2'>
            <div className='min-h-[100px] w-full bg-[#808080a3] p-2 '>
                <div className='min-h-[30px] bg-[#808080a3] overflow-hidden mt-4 ' 
                style={{border:height==="first" ? '0px solid' :'2px solid grey'}} onClick={()=>add('first')}>
                    <div className='flex min-h-[50px] w-full items-center justify-between p-[8px]'>
                        <h1 className='text-white font-medium lg:text-[1.2rem]'>What financing options are available for purchasing a car? </h1>
                        <h1 className='text-text'> {height === 'first' ? <FaMinus/> : <FaPlus />}</h1>

                    </div>

                    <div className='bg transition-all ease-in' 
                    style={{height:height ==='first' ? '100px' : '0',
                         padding:height==='first' ? '8px':'0px',
                         opacity:height === 'first' ? 1 :0
                        }}
                    >
                      <p className='text-white'>
                      → We offer flexible financing options, including bank loans, leasing, and in-house financing. Contact our team to find the best option for you.
                      </p>

                     </div>

                </div>
                <div className='min-h-[20px] bg-[#808080a3] overflow-hidden mt-5'>
                    <div className='flex min-h-[50px] w-full items-center justify-between p-[8px]' style={{border:height==="second" ? '0px solid' :'2px solid grey'}} onClick={()=>add('second')}>
                        <h1 className='text-white font-medium lg:text-[1.2rem]'>Do you offer test drives before purchasing a car? </h1>
                        <h1 className='text-text'> {height === 'second' ? <FaMinus/> : <FaPlus />}</h1>
                    </div>
                    <div className='b transition-all ease-in'
                        style={{height:height === 'second' ? '100px' : '0', padding:height==='second' ? '8px' : '0',opacity:height === 'second' ? 1 :0}}
                    >
                        <p className='text-white'>
                        → Yes! You can schedule a test drive by booking online or visiting our showroom. Bring a valid driver’s license for the test drive.
                        </p>
                    </div>
                </div>

                <div className='min-h-[20px] bg-[#808080a3] overflow-hidden mt-4'>
                    <div className='flex min-h-[50px] w-full items-center justify-between p-[8px]'style={{border:height==="first" ? '0px solid' :'2px solid grey'}} onClick={()=>add('third')}>
                        <h1 className='text-white font-medium lg:text-[1.2rem]'>What warranty do you offer on your vehicles? </h1>
                        <h1 className='text-text'> {height === 'third' ? <FaMinus/> : <FaPlus />}</h1>
                    </div>
                    <div className='bg transition-all ease-in text-white'
                        style={{height:height === 'third' ? '100px' : '0', padding:height==='third' ? '8px' : '0',opacity:height === 'third' ? 1 :0}}
                    >
                        <p>
                        → Our new cars come with a manufacturer’s warranty, while certified pre-owned cars include a limited warranty. Contact us for specific coverage details.
                        </p>
                    </div>

                </div>

                <div className='min-h-[20px] overflow-hidden mt-4 bg-[#808080a3]'>
                    <div className='flex min-h-[50px] w-full items-center justify-between p-[8px]'style={{border:height==="first" ? '0px solid' :'2px solid grey'}} onClick={()=>add('fourth')}>
                        <h1 className='text-white font-medium lg:text-[1.2rem]'>Can I trade in my current vehicle? </h1>
                        <h1 className='text-text'> {height === 'fourth' ? <FaMinus/> : <FaPlus />}</h1>
                    </div>
                    <div className='text-white transition-all ease-in'
                        style={{height:height === 'fourth' ? '100px' : '0', padding:height==='fourth' ? '8px' : '0',opacity:height === 'fourth' ? 1 :0}}
                    >
                        <p>
                        → Yes! We accept trade-ins. Bring your vehicle for an appraisal, and we’ll offer you a competitive price that can be used towards your next purchase.
                        </p>
                    </div>

                </div>

                <div className='min-h-[20px] overflow-hidden mt-4 bg-[#808080a3]'>
                    <div className='flex min-h-[50px] w-full items-center justify-between p-[8px]'style={{border:height==="first" ? '0px solid' :'2px solid grey'}} onClick={()=>add('fifth')}>
                        <h1 className='text-white lg:text-[1.2rem] font-medium'>Do you provide after-sales services like maintenance and repairs? </h1>
                        <h1 className='text-text '> {height === 'fifth' ? <FaMinus/> : <FaPlus />}</h1>
                    </div>
                    <div className='bg transition-all ease-in text-white'
                        style={{height:height === 'fifth' ? '100px' : '0', padding:height==='fifth' ? '8px' : '0',opacity:height === 'fifth' ? 1 :0}}
                    >
                        <p>
                        → Yes, we have a professional service center for routine maintenance, repairs, and spare parts. Schedule an appointment online or visit our service center.
                        </p>
                    </div>

                </div>
               
              
            </div>
            <div className='bg- bg-cover bg-center '>
                <img src={faqWebp} alt="faq.webp" width='100%' height='100%' className='lg:hidden' />
                <img src={faqWebp} alt="faq.webp" width='80%' height='80%' className='hidden lg:inline-block' />

            </div>
        </div>
      
    </div>
  )
}

export default FAQ3