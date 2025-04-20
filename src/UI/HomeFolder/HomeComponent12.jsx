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
                    <div className="h-[40px] w-[120px] bg-text  relative cursor-pointer justify-center flex group text-center flex-col overflow-hidden rounded-[5%]">
                        <Button className="h-[23px] w-[100%] cursor-pointer absolute transition delay-150 duration-300 ease-in-out -translate-y-6 group-hover:-translate-y-0 bg-mybg top-0 gap-1 flex items-center justify-center" />
                            <h2 className="text-[white] z-20 hover:z-20 font-medium text-[1rem] text-center flex justify-center items-center gap-1">
                                        Subscribe
                             </h2>
                        <Button className="h-[21px] w-[100%] absolute text-[white] bg-mybg z-10 transition delay-150 duration-300 ease-in translate-y-5 group-hover:-translate-y-3 gap-1 font-medium cursor-pointer flex items-center justify-center" />
                     </div>
                </form>

            </div>

        </section>
    </div>
  )
}

export default HomeComponent12