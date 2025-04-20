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
                    <div className="h-[40px] w-full bg-text mt-4 relative cursor-pointer justify-center flex group text-center flex-col overflow-hidden">
                        <Button className="h-[20px] w-[100%] cursor-pointer absolute transition delay-150 duration-300 ease-in-out -translate-y-6 group-hover:-translate-y-0 bg-mybg top-0 gap-1 flex items-center justify-center" />
                        <h2 className="text-[white] z-20 hover:z-20 font-medium text-[1rem] text-center flex justify-center items-center gap-1">
                           
                            Submit Now
                        </h2>
                        <Button className="h-[20px] w-[100%] absolute text-[white] bg-mybg z-10 transition delay-150 duration-300 ease-in translate-y-5 group-hover:-translate-y-3 gap-1 font-medium cursor-pointer flex items-center justify-center" />
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default ContactComponent2