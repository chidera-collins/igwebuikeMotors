import React from 'react'
import logo from '../HeaderComponent/logo/logo.svg'

function Footer() {
  return (
    <div>
        <div className='min-h-[400px] w-full bg-mybg flex justify-center items-center   '>
            <div className=' bg-[#80808053] w-full min-h-[360px] flex justify-center items-center'>
                <div className=' min-h-[250px] lg:h-[250px] w-[90%] bg-[#] px-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2'>
                    <div>
                        <img src={logo} alt="logo" className='h-20 w-20' />
                        <h2 className='text-start text-white'>
                            Welcome to Igwebuike Motors where innovation drives every journey. Discover a range of designed to elevate.
                        </h2>
                    </div>
                    <div className='  flex flex-col text-white px-2'>
                        <div className='h-20 flex items-center '>
                            <h1 className='font-medium text-text lg:text-[1.4rem]'>Contact & Legal</h1>
                        </div>
                            <a href="#">Legal</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Cookies Policy</a>
                            <a href="#">Disclaimer</a>
                    </div>
                    <div className='flex flex-col w-full text-white px-2'>
                        <div className='h-20 flex  items-center'>
                            <h1 className='font-medium text-text lg:text-[1.4rem]'>Quick Links</h1>
                        </div>
                        <a href="#">Get In Touch</a>
                        <a href="#">Get In Touch</a>
                        <a href="#">Car Reviews</a>
                        <a href="#">Miantainance Tips</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div className=' w-full flex flex-col text-white'>
                        <div className='h-20 flex items-center'>
                            <h1 className='text-text font-medium lg:text-[1.4rem]'>Contact Us</h1>
                        </div>
                        <a href="#">+234 90 1699 0551</a>
                        <a href="#">chideracollins@gmail.com</a>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Footer