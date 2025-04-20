import React from 'react'
import { IoStarOutline } from "react-icons/io5";
import { FaCommentAlt } from "react-icons/fa";
import {Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

import './swiper.css';
import '../../index.css'

import {  Pagination } from 'swiper/modules';

function HomeComponent11() {
    const testimonial = [
        {
            id:1,
             rating:<IoStarOutline />,
             comment:<FaCommentAlt />,
             testimony:'Welcome to igwebuike motors where innovation drives our journey.Discover a range of designed to elevate your driving experience.',
             testifier:'Igwebuike Motors',
             position:'CEO of Igwebuike Motors',
             
        },
        {
            id:2,
             rating:<IoStarOutline />,
             comment:<FaCommentAlt />,
             testimony:'I enjoy doing business with igwebuike he is trustworthy and i enjoy his customer service.',
             testifier:'Emmanuel',
             position:'Businness man'
        },
        {
            id:3,
             rating:<IoStarOutline />,
             comment:<FaCommentAlt />,
             testimony:'I was referred to igwebuike by a friend and after doing businness with him i must say, i dont regret it one bit.',
             testifier:'Chidindu',
             position:'Businness man'
        },
        {
            id:4,
             rating:<IoStarOutline />,
             comment:<FaCommentAlt />,
             testimony:'Getting my first car from your company was a good decision,the way you advised me on what to do and how to manage my car.i hope to continue doing business with you.',
             testifier:'glory',
             position:'Businness woman'
        },
        {
            id:5,
             rating:<IoStarOutline />,
             comment:<FaCommentAlt />,
             testimony:'Getting my first car from your company was a good decision,the way you advised me on what to do and how to manage my car.i hope to continue doing business with you.',
             testifier:'Joy',
             position:'Teacher'
        },
    ]
  return (
    <div>
        {/* testimonial for small screen  */}
        <div className='min-h-[100px] w-full md:hidden bg-mybg px-4'>
            <section className='min-h-[140px] bg-mybg w-full'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={true}
                    // autoplay={{
                    // delay: 2500,
                    // disableOnInteraction: false,
                    //  }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={false}
                    modules={[ Pagination]}
                //    className="mySwiper w-full h-full"
                >
                   {
                        testimonial.map((value, index)=>(
                            <SwiperSlide key={index}>
                                   <div className='min-h-[300px] w-full mt-3 bg-[#80808053] mb-7 p-3 grid grid-rows-1 gap-5  rounded-[2%]'>
                                        <div className='h-[30px] bg-[] w-[100%] text-[1.4rem] flex justify-between p-2  font-bold text-text'>
                                           <div className='flex gap-1'>
                                                {Array.from({length:5},(_,i)=>(
                                                 <span key={i}>{value.rating}</span>
                                                ))}
                                           </div>
                                           <div className='flex gap-1'>
                                            {Array.from({length:2},(_,i)=>(
                                                <span key={i}>{value.comment}</span>
                                            ))}
                                           </div>
                                        </div>
                                        <div className='mt-4 '>
                                            <h4 className=' md:text-[1.2rem] text-[#808080c3] font-medium'>{value.testimony}</h4>
                                        </div>
                                        <div className='flex'>
                                           <aside>
                                             <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                           </aside>
                                           <aside>
                                            <h1 className='text-white capitalize font-semibold'>{value.testifier}</h1>
                                            <h4 className='text-[#808080c3] capitalize font-medium'>{value.position}</h4>
                                           </aside>

                                        </div>


                                    </div>
        
                            </SwiperSlide>
                        ))
                         
                   }


                </Swiper>

            </section>

        </div>

        
        {/* TESTIMONIAL FOR MEDIUM SCREEN  */}
        <div className='min-h-[100px] hidden md:block lg:hidden w-full bg-mybg px-4 '>
            <section className='min-h-[140px] bg-mybg w-full'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={2}
                    loop={true}
                    centeredSlides={true}
                    // autoplay={{
                    // delay: 2500,
                    // disableOnInteraction: false,
                    //  }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={false}
                    modules={[ Pagination]}
                //    className="mySwiper w-full h-full"
                >
                   {
                        testimonial.map((value, index)=>(
                            <SwiperSlide key={index}>
                                   <div className='min-h-[300px] w-[400px] mt-3 bg-[#80808053] mb-7 p-3 grid grid-rows-1 gap-5  rounded-[2%]'>
                                        <div className='h-[30px] bg-[] w-[100%] text-[1.4rem] flex justify-between p-2  font-bold text-text'>
                                           <div className='flex gap-1'>
                                                {Array.from({length:5},(_,i)=>(
                                                 <span key={i}>{value.rating}</span>
                                                ))}
                                           </div>
                                           <div className='flex gap-1'>
                                            {Array.from({length:2},(_,i)=>(
                                                <span key={i}>{value.comment}</span>
                                            ))}
                                           </div>
                                        </div>
                                        <div className='mt-4  px-2'>
                                            <h4 className=' md:text-[1.2rem] text-[#808080c3] font-medium break-normal'>{value.testimony}</h4>
                                        </div>
                                        <div className='flex'>
                                           <aside>
                                             <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                           </aside>
                                           <aside>
                                            <h1 className='text-white capitalize font-semibold'>{value.testifier}</h1>
                                            <h4 className='text-[#808080c3] capitalize font-medium'>{value.position}</h4>
                                           </aside>

                                        </div>


                                    </div>
        
                            </SwiperSlide>
                        ))      
                   }


                </Swiper>

            </section>

        </div>


        <div className='min-h-[100px] hidden md:hidden lg:inline-block w-full bg-mybg px-4 lg:px-8'>
            <section className='min-h-[140px] bg-mybg w-full px-7'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    centeredSlides={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={false}
                    modules={[ Pagination]}
                >
                   {
                        testimonial.map((value, index)=>(
                            <SwiperSlide key={index}>
                                   <div className='min-h-[300px] w-full mt-3 bg-[#80808053] mb-7 p-3 grid grid-rows-1 gap-5  rounded-[2%]'>
                                        <div className='h-[30px] bg-[] w-[100%] text-[1.4rem] flex justify-between p-2  font-bold text-text'>
                                           <div className='flex gap-1'>
                                                {Array.from({length:5},(_,i)=>(
                                                 <span key={i}>{value.rating}</span>
                                                ))}
                                           </div>
                                           <div className='flex gap-1'>
                                            {Array.from({length:2},(_,i)=>(
                                                <span key={i}>{value.comment}</span>
                                            ))}
                                           </div>
                                        </div>
                                        <div className='mt-4  px-2'>
                                            <h4 className=' md:text-[1.2rem] text-[#808080c3] font-medium break-normal'>{value.testimony}</h4>
                                        </div>
                                        <div className='flex'>
                                           <aside>
                                             <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                           </aside>
                                           <aside>
                                            <h1 className='text-white capitalize font-semibold'>{value.testifier}</h1>
                                            <h4 className='text-[#808080c3] capitalize font-medium'>{value.position}</h4>
                                           </aside>

                                        </div>


                                    </div>
        
                            </SwiperSlide>
                        ))      
                   }


                </Swiper>

            </section>

        </div>


    </div>
  )
}

export default HomeComponent11