import React, { useEffect, useState } from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { MdEmail } from 'react-icons/md';
import { IoCarSportSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";

import CustomInput from '../../Reusuable Folder/CustomInput';
import Button from '../../Reusuable Folder/Button';

function ContactComponent2() {
    const [loading, setLoading] = useState(true);
    let [mapurl , setMapurl] = useState('');

    
    useEffect(()=>{
        
        const mapp = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
    
        setMapurl(mapp);
        setLoading(false);
    
        },[]);
  return (
    <div>
        <div className='min-h-[400px] bg-mybg w-full flex flex-col lg:flex-row p-4 justify-center items-center'>
            <div className='w-full lg:w-[60%] min-h-[429px] bg'>
                {loading?(
                    <p className='text-2xl font-bold text-text '>Loading Map</p>
                ):(
                    <iframe src={mapurl}  style={{ width: "100%", height: "429px" }} frameborder="0"></iframe>

                )}
            </div>
            <div className='min-h-[300px] w-full lg:w-[30%] bg-[#808080a3]'>
                <h1 className='text-center text-[1.4rem] font-medium mt-4 text-text'>Get In Touch</h1>
                <form action="" onSubmit={(e)=>e.preventDefault()} className='flex flex-col gap-2.5 p-4'>
                    <CustomInput Icon={IoPersonOutline} className='w-full' type="text" placeholder="Enter your name" />    
                    <CustomInput Icon={MdEmail} type="text" className='w-full' placeholder="Email Address" />    
                    <CustomInput Icon={FiPhoneCall} type="text" className='w-full' placeholder="Phone Number" />    
                    <CustomInput Icon={IoCarSportSharp} type="text" className='w-full' placeholder="Car Type" />    
                    <CustomInput Icon={MdOutlineMessage} type="text" placeholder="Message" textarea={true}/>  
                    <div className="relative h-[40px] w-[190px] mt-4 overflow-hidden bg-text rounded group cursor-pointer">
                        <div className="absolute inset-0 z-30 flex items-center gap-1 justify-center pointer-events-none">
                            <span className="text-white font-semibold text-[1rem]"> Submit Now</span>
                        </div>
                        <Button
                        className="absolute top-[-100%] w-full h-full bg-mybg z-20 transition-all duration-1000 ease-in-out group-hover:top-0"
                        type='submit'
                        />
                        <Button
                        className="absolute top-[100%] w-full h-full bg-mybg z-10 transition-all duration-1000 ease-in-out group-hover:top-0"
                        type='submit'
                        />
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default ContactComponent2