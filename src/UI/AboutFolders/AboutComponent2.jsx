import React, { useEffect, useRef, useState } from 'react';
import aboutbg from './AboutPictures/aboutbg1.webp';
import aboutbg2 from './AboutPictures/aboutbg2.webp';
import {motion} from 'framer-motion'


function AboutComponent2() {
    const [count, setCount] = useState(0);
    const counterRef = useRef();

    useEffect(()=>{
        console.log(counterRef.current)
        const observer = new IntersectionObserver((entries)=>{
            const entry =  entries[0];
            let number = 0;
            if (entry.isIntersecting) {
                const time= setInterval(() => {
                    number+=20
                    console.log(number)
                    setCount(number);

                    if (number >= 1000) {
                        setCount(number)   
                    clearInterval(time)                      
                    }
                },50);            
            }
        })
        observer.observe(counterRef.current);

        return()=>{
            observer.disconnect()
        }

    },[]);
  return (
    <div>
          <section ref={counterRef} className='min-h-[200px] w-full bg-mybg p-[20px] lg:p-[40px] text-[white]'>
                       <div className='min-h-[300px] w-full bg-[] flex flex-col lg:flex-row gap-4'>
                           <div  className='min-h-[300px] bg-[]  w-[100%] lg:w-[50%] gap-5 flex flex-col  md:grid grid-cols-2'>
                               <div className='w-full h-full pr-4 pl-4 '>
                                   <motion.img
                                    initial={{ opacity: 0, y:10,scale:1.3 }}
                                    whileInView={{ opacity: 1, y:0  ,scale:1}}
                                    transition={{delay:0.5, duration:2}}
                                    viewport={{ once: true }} 
                                   src={aboutbg} className="w-full h-full object-cover" alt="aboutbg1" />
                               </div>
                               <div className='flex flex-col gap-5 justify-between '>
                                   <div className='h-[40%] pr-4 pl-4 w-full '>
                                       <motion.img
                                        initial={{ opacity: 0, x:-10,scale:1.3 }}
                                        whileInView={{ opacity: 1, x:0  ,scale:1}}
                                        transition={{delay:1, duration:2}}
                                        viewport={{ once: true }} 
                                       src={aboutbg2} alt="aboutbg2" />
                                   </div>
                                   <div className='h-[30%] w-full text-center px-4 py-2  '>
                                       <motion.div
                                         initial={{ opacity: 0, x:10 }}
                                         whileInView={{ opacity: 1, x:0  }}
                                         transition={{delay:1, duration:2}}
                                         viewport={{ once: true }}
                                         className='flex h-[150px] bg-[#393E46] flex-col justify-center items-center rounded-sm'>
                                           <h1 className='text-[1.2rem] font-medium text-[white]'>{count}+</h1>
                                           <p className='text-[white] text-[1.2rem] font-medium capitalize'>cars sold already</p>
                                       </motion.div>
       
                                   </div>
       
                               </div>
                           </div>
                           <div className='min-h-[300px] lg:w-[54%] w-full bg-[] flex-col leading-7 px-2'>
                             <div className='h-[inherit] w-[100%] lg:w-[70%]'>
                                   <h2 className='mt-[60px] font-[500]  text-[24px] text-text'>About Us</h2>
       
                                   <h1 className='mt-[20px] text:-[1.2rem] font-[500] md:text-[20px] lg:text-[20px]'> Driven by Excellence: Your Trusted Partner for Premium <span className='text-text underline'> Vehicles</span> </h1>
       
                                   <p className='mt-[5px] leading-7 text-textColor text-[12px] md:text-[16px] font-[400]'>Welcome to igwebuike where innovation drives every journey. Discover a range of designed to elevate your driving experience.</p>
       
                                  
                             </div>
                           </div>
       
                       </div>
       
        </section>
    </div>
  )
}

export default AboutComponent2