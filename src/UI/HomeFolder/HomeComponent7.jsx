import React, { useEffect, useRef, useState } from 'react'
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineStarRate } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

function HomeComponent7() {
    let targetCountCars =320;
    let targetReview =5500;
    let targetVerifiedUsers=300;
    let targetVisitors = 10;
    let duration = 2000;
    let steps = 100;

    let intervalTime = duration/steps;
    // console.log(intervalTime)
    const [countCars , setCountCars]= useState(0);
    const [review, setReview]= useState(0);
    const [verifiedUsers, setVerifiedUsers]= useState(0);
    const [visitors, setVisitors] = useState(0)

    const startCount = useRef();

    useEffect(()=>{
        // console.log(startCount.current)
        const observer = new IntersectionObserver((entries)=>{
            //destructure the entry
            const entry = entries[0];
            //to make all the counters in the setter function start and end at the same time 
            const targetSteps =[
                targetCountCars/steps,
                targetReview/steps,
                targetVerifiedUsers/steps,
                targetVisitors/steps
            ]
            let count = 0
            if (entry.isIntersecting) {
               const startAllCount = setInterval(() => {
                    setCountCars((prevCountCars)=>Math.min( prevCountCars +targetSteps[0] ,targetCountCars));
                    setReview((prevReview)=> Math.min(prevReview + targetSteps[1],targetReview));
                    setVerifiedUsers((prevVerifiedUsers)=>Math.min(prevVerifiedUsers + targetSteps[2],targetVerifiedUsers));
                    setVisitors((prevVisitors)=>Math.min(prevVisitors +targetSteps[3] ,targetVisitors))
                    count++
                    console.log(targetCountCars)

                    if (count>=steps) {
                        clearInterval(startAllCount)    
                    }
                    
                }, intervalTime);          
            }

            
        })
        observer.observe(startCount.current);

        return()=>{
            if(startCount.current){
                observer.unobserve(startCount.current);
            }
          
        }
    });

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
                    <p className='text-textColor capitalize'>cars for sale</p>
                </div>
                
            </div>
            <div className='flex items-center justify-center gap-3'>
                <div>
                    <h1 className='text-text text-[2rem]'>
                        <MdOutlineStarRate/>
                    </h1>
                </div>
                <div>
                 <h1 className='text-white text-[2rem] font-semibold'>{Math.round(review)}+</h1>
                 <p className='text-textColor capitalize'>dealers review</p>

                </div>
            </div>
            <div  className='flex items-center justify-center gap-3'>
                <div>
                    <h1 className='text-text text-[2rem]'>
                    <MdOutlineVerified/>
                    </h1>
                </div>
                <div>
                    <h1 className='text-white text-[2rem] font-semibold'>{Math.round(verifiedUsers)}M</h1>
                  <p className='text-textColor capitalize'>verified user</p>
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
                    <p className='text-textColor capitalize'>Visit per day</p>
                </div>
             
            </div>

        </section>
    </div>
  )
}

export default HomeComponent7