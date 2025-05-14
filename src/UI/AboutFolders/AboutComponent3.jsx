import React from 'react'
import { FaCommentAlt } from 'react-icons/fa'
import { IoStarOutline } from 'react-icons/io5'
import { Swiper , SwiperSlide } from 'swiper/react'
import {  Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

// import './swiper.css';
import '../HomeFolder/swiper.css'
import '../../index.css'

function AboutComponent3() {
        const testimonial = [
        {
            id:1,
             testimony:'Welcome to igwebuike motors where innovation drives our journey.Discover a range of designed to elevate your driving experience.',
             testifier:'Igwebuike Motors',
             position:'CEO of Igwebuike Motors',
             
        },
        {
            id:2,
             testimony:'I enjoy doing business with igwebuike he is trustworthy and i enjoy his customer service.',
             testifier:'Emmanuel',
             position:'Businness man'
        },
        {
            id:3,
            
             testimony:'I was referred to igwebuike by a friend and after doing businness with him i must say, i dont regret it one bit.',
             testifier:'Chidindu',
             position:'Businness man'
        },
        {
            id:4,
             testimony:'Getting my first car from your company was a good decision,the way you advised me on what to do and how to manage my car.i hope to continue doing business with you.',
             testifier:'glory',
             position:'Businness woman'
        },
        {
            id:5,
             testimony:'Getting my first car from your company was a good decision,the way you advised me on what to do and how to manage my car.i hope to continue doing business with you.',
             testifier:'Joy',
             position:'Teacher'
        },
    ]
  return (
    <div>
        <div className='min-h-[100px]  lg:min-h-[300px] w-full bg-mybg grid grid-cols-1 lg:grid-cols-[900px_minmax(400px,_1fr)_2px] p-4'>
            <div className='bg-[url(/src/UI/AboutFolders/AboutPictures/testimony.webp)] bg-no-repeat bg-center bg-cover h-[200px] md:h-[400px] lg:min-h-0.5'>
            
            </div>
            <div className='bg-[#80808070] lg:grid lg:grid-cols-1 lg:mt-2.5'>
               <div>
               <h2 className='text-white text-[1.3rem]'>Testimonial</h2>
               <h1 className='text-white text-[1.5rem] font-semibold'>What Our <span className='text-text  underline'>Clients</span> say</h1>
               </div>

                <div className=' bg-'>
                    <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={false}
                    modules={[ Pagination]}
                    >
                        {testimonial.map((value,id)=>(
                            <SwiperSlide key={id}>
                                <div className='min-h-[200px] w-full lg:mt-3 bg-[] mb-7 p-3 rounded-[2%] grid grid-cols-1'>
                                    <h1 className='text-textColor font-[300] text-[14px]'>{value.testimony}</h1>

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
                        ))}

                    </Swiper>

                </div>

            </div>

        </div>
    </div>
  )
}

export default AboutComponent3