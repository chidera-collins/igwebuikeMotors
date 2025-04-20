import React, { useEffect, useRef, useState } from 'react'
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineStarRate } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

function ContactComponent4() {
    const targetCountCars =320;
    const targetReview =5500;
    const targetVerifiedUsers=300;
    const targetVisitors = 10;
    const duration = 2000;
    const steps = 100;
    const intervalTime = duration/steps;

    const startCount = useRef()
    const [countCars, setCountCars]= useState(0);
    const [review, setReview]=useState(0);
    const [verifiedUsers, setVerifiedUsers]=useState(0);
    const[visitors,setVisitors] = useState(0)


    const stepCountCars =targetCountCars/steps;
    const stepreveiew = targetReview/steps;
    const stepVerifiedUsers = targetVerifiedUsers/steps;
    const stepVisitors = targetVisitors/steps;

   useEffect(()=>{
    // console.log(startCount.current)
    const observer = new IntersectionObserver((entries)=>{
        const entry = entries[0]
        let num = 0;
        if (entry.isIntersecting) {
            setInterval(() => {
                num +1
             setCountCars(prev=>Math.min(prev + stepCountCars, targetCountCars))
             setReview(prev => Math.min(prev +stepreveiew, targetReview))
             setVerifiedUsers(prev=>Math.min(prev + stepVerifiedUsers,targetVerifiedUsers))
             setVisitors(prev=>Math.min(prev+ stepVisitors ,targetVisitors))

                
            }, intervalTime);
            
        }
    
    })
        observer.observe(startCount.current);
        return ()=>{
          observer.disconnect()
        }
    
   },[])

  return (
       <div className='min-h-[100px] w-full p-4 bg-mybg landingp'>
            <section ref={startCount} className='min-h-[200px] bg-[] w-full mt-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className='flex items-center justify-center gap-3'>
                    <div>
                        <h1 className='text-text text-[2rem]'>
                            <IoCarSportOutline />
                        </h1>
                    </div>
                    <div>
                        <h1 className='text-white text-[2rem] font-semibold'>{Math.round(countCars)}M</h1>
                        <p className='text-[#b4b0b0e8] capitalize'>cars for sale</p>
                    </div>
                    
                </div>
                <div className='flex items-center justify-center gap-3'>
                    <div>
                        <h1 className='text-text text-[2rem]'>
                            <MdOutlineStarRate/>
                        </h1>
                    </div>
                    <div>
                     <h1 className='text-white text-[2rem] font-semibold'>{review}+</h1>
                     <p className='text-[#808080a3] capitalize'>dealers review</p>
    
                    </div>
                </div>
                <div  className='flex items-center justify-center gap-3'>
                    <div>
                        <h1 className='text-text text-[2rem]'>
                        <MdOutlineVerified/>
                        </h1>
                    </div>
                    <div>
                        <h1 className='text-white text-[2rem] font-semibold'>{verifiedUsers}M</h1>
                      <p className='text-[#808080a3] capitalize'>verified user</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-3'>
                    <div>
                        <h1 className='text-text text-[2rem]'>
                             <FaRegUser/>
                        </h1>
                    </div>
                    <div>
                        <h1 className='text-white text-[2rem] font-semibold'>{Math.round(visitors)}M</h1>
                        <p className='text-[#808080a3] capitalize'>Visit per day</p>
                    </div>
                 
                </div>
    
            </section>
        </div>
  )
}

export default ContactComponent4