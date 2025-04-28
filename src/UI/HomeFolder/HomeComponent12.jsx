import React from 'react'
import Button from '../../Reusuable Folder/Button'

function HomeComponent12() {
  return (
    <div>
        <section className='min-h-[100px] w-full flex justify-center bg-mybg py-6'>
            <div className='h-[150px] w-[80%] bg-[#80808053] rounded-[2%] flex flex-col justify-center px-2 lg:justify-around items-center'>
                <h1 className='lg:text-[2rem] font-semibold text-white'>Join Our NewsLetter</h1>
                <form action="subscribe" className='flex justify-center items-center  min-h-[10px] w-full md:w-[400px] lg:min-w-[300px] bg-mybg gap-1 px-2 py-2 rounded-md border-2 border-text'>
                     <input type="text" className='w-[350px] text-white h-[40px] bg-mybg placeholder:text-white 'placeholder=' Enter Your email' />
                     <div className="relative h-[40px] w-[110px]  overflow-hidden bg-text rounded group">
                        <div className="absolute inset-0 z-30 flex items-center gap-1 justify-center pointer-events-none">
                          <span className="text-white font-semibold text-[1rem]"> Subsscribe</span>
                        </div>
                        <Button
                          className="absolute top-[-100%] w-full h-full bg-mybg z-20 transition-all duration-1000 ease-in-out group-hover:top-0"
                        />
                        <Button
                         className="absolute top-[100%] w-full h-full bg-mybg z-10 transition-all duration-1000 ease-in-out group-hover:top-0"
                        />
                      </div>
                </form>

            </div>

        </section>
    </div>
  )
}

export default HomeComponent12