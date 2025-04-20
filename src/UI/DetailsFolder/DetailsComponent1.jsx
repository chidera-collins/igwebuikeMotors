import React from 'react'

function DetailsComponent1() {
  return (
    <div>
        <div className='md:h-[40vh] w-full lg:h-[50vh] h-[40vh] bg-[url(/src/UI/AboutFolders/AboutPictures/about.webp)] bg-no-repeat bg-center bg-mybg bg-blend-screen text-white bg-cover flex flex-col justify-center md:flex-row items-center lg:justify-between '>
            <div className='w-[20%] bg- text-center text-white lg:text-[2rem] text-[1.4rem] font-semibold'>
                <h1>Details</h1>
            </div>
            <div className='w-[50%] justify-end hidden md:flex'>
              <div className='w-[300px] h-[300px] lg:text-[1.3rem] font-semibold  hidden md:grid rounded-[50%] text-center  place-items-center  translate-x-10 bg-[#ff66008a]'> 
                  <h1>Home . Shop</h1>
              </div>
            </div>
            <div>
              <h1 className='capitalize font-medium md:hidden '>Home . Details</h1>
            </div>

        </div>
    </div>
  )
}

export default DetailsComponent1