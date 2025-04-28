import React from 'react'
import { GrStatusGood } from "react-icons/gr";
import { motion } from 'framer-motion';

function HomeComponent8() {
  return (
    <div>
        <section className='min-h-[100px] bg-mybg w-full flex flex-col-reverse lg:flex-row p-4 lg:p-6 gap-1 mt-3.5'>
            <div className='lg:w-[50%] p-3'>
                <h3>Why choose us</h3>
                <h1 className='lg:text-[2rem] text-[1.4rem] md:text-[1.5rem]  text-white font-semibold'>Why Choose <span className='underline text-text'>Us</span></h1>

                <div className='min-h-[200px] bg-[] flex flex-wrap gap-3.5 text-[1.2rem] md:text-[1.4rem] lg:text-[1.5rem] text-white'>
                    <h1 className='flex items-center  gap-3'><span><GrStatusGood /></span>exceptional selection</h1>
                    <h1 className='flex items-center gap-3'><span><GrStatusGood /></span>trusted by the community</h1>
                    <h1 className='flex items-center gap-3'><span><GrStatusGood /></span>outstanding car service</h1>
                    <h1 className='flex items-center gap-3'><span><GrStatusGood /></span>unbeatable prices</h1>
                    <h1 className='flex items-center gap-3'><span><GrStatusGood /></span>comprhensive service</h1>
                    <h1 className='flex items-center gap-3'><span><GrStatusGood /></span>trade-in and upgrade</h1>

                </div>
            </div>
            <div className='bg lg:w-[50%] grid grid-cols-1 md:grid-cols-2 gap-3 min-h-[500px] lg:p-8  p-4 '>
                <motion.div 
                 initial={{ opacity: 0, y:10,scale:1.2 }}
                 whileInView={{ opacity: 1, y:0  ,scale:1}}
                 transition={{delay:0.5, duration:2}}
                 viewport={{ once: true }}
                className='bg-[url(/src/UI/HomeFolder/HomePictures/choose1.webp)] bg-no-repeat bg-center bg-cover'>
                    
                </motion.div>
                <motion.div
                 initial={{ opacity: 0, x:10,scaleX:1.3 }}
                 whileInView={{ opacity: 1, x:0  ,scaleX:1}}
                 transition={{delay:0.5, duration:2}}
                 viewport={{ once: true }} 
                className='bg-[url(/src/UI/HomeFolder/HomePictures/choose2.webp)] bg-no-repeat bg-cover bg-center '>e</motion.div>
            </div>

        </section>
    </div>
  )
}

export default HomeComponent8