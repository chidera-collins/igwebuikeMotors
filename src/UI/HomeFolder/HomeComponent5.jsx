import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { FaShuttleVan } from "react-icons/fa";
import { IoCarSportOutline } from "react-icons/io5";
import { IoCarSportSharp } from "react-icons/io5";
import { IoCarSport } from "react-icons/io5";
import { FaVanShuttle } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import './swiper.css';
import '../../index.css'

import { Autoplay, Pagination } from 'swiper/modules';

function HomeComponent5() {

    const products=[
        {id:1,name:'Sadans', make:'car' , availableCars:25, icon:<FaShuttleVan />},
        {id:2,name:'luxury cars', make:'car' , availableCars:15, icon:<IoCarSportOutline />},
        {id:3,name:'convertible', make:'car' , availableCars:10, icon:<IoCarSportSharp />},
        {id:4,name:'sports car', make:'car' , availableCars:35, icon:<IoCarSport />},
        {id:5,name:'mini vans', make:'car' , availableCars:20, icon:<FaVanShuttle />},
         {id:6,name:'hatch back', make:'car' , availableCars:30, icon:<FaVanShuttle />},

    ]
  return (
    <div  className='p-4 min-h-[100px] w-full bg-mybg'>
        <section className='h-[140px] bg-[] w-full  md:hidden'>
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination]}
            className="mySwiper w-full h-full"
            >

            {
                products.map((product)=>(
                    <SwiperSlide key={product.id}>
                        <div className='min-h-[100px] w-[full] bg-[#222831] mb-4 flex cursor-pointer rounded-[10%]'>
                            <div className='h-[100px] bg-[] w-[40%] text-[1.8rem] flex justify-center items-center font-bold text-text'>
                                {product.icon}
                            </div>
                            <div className=' flex justify-center items-center flex-col'>
                                <h4 className='capitalize md:text-[1.4rem] text-[white] hover:text-text font-medium'>{product.name}</h4>
                                <h3 className='md:text-[1.4rem] text-[grey] font-medium'>{product.availableCars}+ {product.make}</h3>
                            </div>


                        </div>
                    </SwiperSlide>
                ))

            }
            
            </Swiper>


        </section>
    </div>
  )
}

export default HomeComponent5