import React, { useRef, useState, useEffect } from 'react'
import aboutbg1 from './HomePictures/aboutbg1.webp'
import aboutbg2 from './HomePictures/aboutbg2.webp'
import Button from '../../Reusuable Folder/Button'
import { Link } from 'react-router-dom';

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
                            <img src={aboutbg1} className="w-full h-full object-cover" alt="aboutbg1" />
                        </div>
                        <div className='flex flex-col gap-5 justify-between '>
                            <div className='h-[40%] pr-4 pl-4 w-full '>
                                <img src={aboutbg2} alt="aboutbg2" />
                            </div>
                            <div className='h-[30%] w-full text-center px-4 py-2  '>
                                <div  className='flex h-[150px] bg-[#393E46] flex-col justify-center items-center rounded-sm'>
                                    <h1 className='text-[1.2rem] font-medium text-[white]'>{count}+</h1>
                                    <p className='text-[white] text-[1.2rem] font-medium capitalize'>cars sold already</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='min-h-[300px] lg:w-[50%] w-full bg-[] flex-col leading-7 px-2'>
                      <div className='h-[inherit] w-[100%] lg:w-[60%]'>
                            <h2 className='mt-[60px] text-[1rem]  md:text-[1.4rem] text-text'>About Us</h2>

                            <h1 className='mt-[50px] text:-[1.2rem] md:text-[1.4rem] lg:text-[2rem]'> Driven by Excellence: Your Trusted Partner for Premium <span className='text-text underline'> Vehicles</span> </h1>

                            <p className='mt-[40px] leading-5 md:text-[1.4rem]'>Welcome to Autovault where innovation drives every journey. Discover a range of designed to elevate your driving experience.</p>
                            <Link to='/about'>
                            <div className="h-[40px] w-[110px] bg-text mt-4 relative cursor-pointer justify-center flex group text-center flex-col overflow-hidden">
                                 <Button className="h-[23px] w-[100%] cursor-pointer absolute transition delay-150 duration-300 ease-in-out -translate-y-6 group-hover:-translate-y-0 bg-mybg top-0 gap-1 flex items-center justify-center" />
                                 <h2 className="text-[white] z-20 hover:z-20 font-medium text-[1rem] text-center flex justify-center items-center gap-1">
                                        Learn More
                                 </h2>
                                  <Button className="h-[21px] w-[100%] absolute text-[white] bg-mybg z-10 transition delay-150 duration-300 ease-in translate-y-5 group-hover:-translate-y-3 gap-1 font-medium cursor-pointer flex items-center justify-center" />
                             </div>
                            </Link>
                      </div>
                    </div>

                </div>

         </section>

        
    </div>
  )
}

export default HomeComponent2