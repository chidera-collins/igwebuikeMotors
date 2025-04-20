import React from 'react'
import CustomInput from '../../Reusuable Folder/CustomInput'
import Button from '../../Reusuable Folder/Button'

function Login2() {
  return (
    <div>
        <div className='min-h-[200px] bg-mybg w-full flex justify-center'>
            <div className='min-h-[180px] bg w-[80%] grid grid-cols-2 gap-2.5 mt-6'>
                <div className='bg-[#808080a3] p-4 h-[400px]  '>
                    <h1 className='font-medium text-[1.2rem] mb-2 text-white'>Login</h1>
                    <form>
                        <CustomInput className='w-full' placeholder='Email Address or Username'/>
                        <CustomInput className='w-full mt-2' placeholder='password' type='password'/>
                        <div className='flex items-center h-[40px] gap-2'>
                        <CustomInput className=' mt-2' placeholder='password' type='checkbox'/> <label htmlFor="remember me" className='mt-4 text-white'>Remember me</label>
                        </div>
                        <div className="h-[40px] w-[110px] bg-text mt-4 relative cursor-pointer justify-center flex group text-center flex-col overflow-hidden">
                            <Button className="h-[23px] w-[100%] cursor-pointer absolute transition delay-150 duration-300 ease-in-out -translate-y-6 group-hover:-translate-y-0 bg-mybg top-0 gap-1 flex items-center justify-center" />
                                <h2 className="text-[white] z-40 hover:z-40 font-medium text-[1rem] text-center flex justify-center items-center gap-1">
                                    Login In
                                </h2>
                            <Button className="h-[21px] w-[100%] absolute text-[white] bg-mybg z-10 transition delay-150 duration-300 ease-in translate-y-5 group-hover:-translate-y-3 gap-1 font-medium cursor-pointer flex items-center justify-center" />
                        </div>
                        <a href="#" className='text-white'>Forgot Your Password</a>
                        
                    </form>
                </div>
                <div className='bg-red-600 p-4 h-[400px]'>
                    <h1></h1>
                    <form>
                        <CustomInput className='w-full' placeholder='Your Name'/>
                        <CustomInput className='w-full mt-2' placeholder='Email Address or Username'/>
                        <CustomInput className='w-full mt-2' placeholder='password' type='password'/>
                        <CustomInput className='w-full mt-2' placeholder='confirm password' type='password'/>
                        <div className="h-[40px] w-[110px] bg-text mt-4 relative cursor-pointer justify-center flex group text-center flex-col overflow-hidden">
                            <Button className="h-[23px] w-[100%] cursor-pointer absolute transition delay-150 duration-300 ease-in-out -translate-y-6 group-hover:-translate-y-0 bg-mybg top-0 gap-1 flex items-center justify-center" />
                                <h2 className="text-[white] z-40 hover:z-40 font-medium text-[1rem] text-center flex justify-center items-center gap-1">
                                    Register
                                </h2>
                            <Button className="h-[21px] w-[100%] absolute text-[white] bg-mybg z-10 transition delay-150 duration-300 ease-in translate-y-5 group-hover:-translate-y-3 gap-1 font-medium cursor-pointer flex items-center justify-center" />
                        </div>
                        
                    </form>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Login2