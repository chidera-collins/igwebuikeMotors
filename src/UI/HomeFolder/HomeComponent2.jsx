import React, { useRef, useState, useEffect } from 'react'
import aboutbg1 from './HomePictures/aboutbg1.webp'
import aboutbg2 from './HomePictures/aboutbg2.webp'
import Button from '../../Reusuable Folder/Button'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function HomeComponent2() {
    const [count, setCount] =useState(0);
    const counterRef = useRef(); //Refrence to the element im observing
    useEffect(() => {
        // console.log('my ref' , counterRef.current)
      const observer = new IntersectionObserver((entries)=>{
        const entry = entries[0];
        let num =0
        // console.log(num, 'begin')
        if (entry.isIntersecting) {
            setInterval(() => {
                num+=50
            // console.log(num) checking if num is counting
            setCount(num)  
            
            if (num >= 1000) {
                setCount(1000)   
            }
            }, 60);           
            }
      })
      observer.observe(counterRef.current);


      return () => {
        observer.disconnect()
        
      }
    }, [])
    
  return (
    <div>
      <section className='min-h-[200px] w-full bg-mybg p-[20px] lg:p-[40px] text-[white]'>
                <div className='min-h-[300px] w-full bg-[] flex flex-col lg:flex-row gap-4'>
                    <div ref={counterRef} className='min-h-[300px] bg-[]  w-[100%] lg:w-[50%] gap-5 flex flex-col  md:grid grid-cols-2'>
                        <div className='w-full h-full pr-4 pl-4 '>
                            <motion.img
                            initial={{ opacity: 0, y:10,scale:1.3 }}
                            whileInView={{ opacity: 1, y:0  ,scale:1}}
                            transition={{delay:0.5, duration:2}}
                            viewport={{ once: true }} 
                            src={aboutbg1} className="w-full h-full object-cover" alt="aboutbg1" />
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
                            <motion.div
                              initial={{ opacity: 0, x:10 }}
                                whileInView={{ opacity: 1, x:0  }}
                                transition={{delay:1, duration:2}}
                                viewport={{ once: true }} 
                            className='h-[30%] w-full text-center px-4 py-2  '>
                                <div  className='flex h-[150px] bg-[#393E46] flex-col justify-center items-center rounded-sm'>
                                    <h1 className='text-[1.2rem] font-medium text-[white]'>{count}+</h1>
                                    <p className='text-[white] text-[1.2rem] font-medium capitalize'>cars sold already</p>
                                </div>

                            </motion.div>

                        </div>
                    </div>
                    <div className='min-h-[300px] lg:w-[50%] w-full bg-[] flex-col leading-7 px-2'>
                      <motion.div 
                      initial={{ opacity: 0, y:10 }}
                      whileInView={{ opacity: 1, y:0 }}
                    transition={{delay:0.5, duration:2}}
                    viewport={{ once: true }}
                      
                      className='h-[inherit] w-[100%] lg:w-[60%]'>
                            <h2 className='mt-[60px] text-[1rem]  md:text-[1.4rem] text-text'>About Us</h2>

                            <h1 className='mt-[50px] text:-[1.2rem] md:text-[1.4rem] lg:text-[2rem]'> Driven by Excellence: Your Trusted Partner for Premium <span className='text-text underline'> Vehicles</span> </h1>

                            <p className='mt-[40px] leading-5 md:text-[1.4rem]'>Welcome to Autovault where innovation drives every journey. Discover a range of designed to elevate your driving experience.</p>
                            <Link to='/about'>
                              <div className="relative h-[40px] w-[110px] mt-4 overflow-hidden bg-text rounded group">
                                <div className="absolute inset-0 z-30 flex items-center gap-1 justify-center pointer-events-none">
                                  <span className="text-white font-semibold text-[1rem]">  Learn More</span>
                                </div>
                                <Button
                                  className="absolute top-[-100%] w-full h-full bg-mybg z-20 transition-all duration-1000 ease-in-out group-hover:top-0"
                                />
                                <Button
                                  className="absolute top-[100%] w-full h-full bg-mybg z-10 transition-all duration-1000 ease-in-out group-hover:top-0"
                                />
                              </div>
                            </Link>
                      </motion.div>
                    </div>

                </div>

         </section>

        
    </div>
  )
}

export default HomeComponent2