import React from 'react'
import CustomInput from '../../Reusuable Folder/CustomInput'
import Button from '../../Reusuable Folder/Button'

function Login2() {
  return (
    <div>
        <div className='min-h-[200px] bg-mybg w-full flex justify-center'>
            <div className='min-h-[180px] bg w-[80%] grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-6 mb-4'>
                <div className='bg-[#808080a3] p-4 h-[400px]  '>
                    <h1 className='font-medium text-[1.2rem] mb-2 text-white'>Login</h1>
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <CustomInput className='w-full' required placeholder='Email Address or Username'/>
                        <CustomInput className='w-full mt-2' placeholder='password' type='password' required/>
                        <div className='flex items-center h-[40px] gap-2'>
                        <CustomInput className=' mt-2' placeholder='password' type='checkbox'/> <label htmlFor="remember me" className='mt-4 text-white'>Remember me</label>
                        </div>
                        <div className="relative h-[40px] w-[110px] mt-4 overflow-hidden bg-text rounded group cursor-pointer">
                            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                                <span className="text-white font-semibold text-[1rem]">Log In</span>
                            </div>

                            <Button
                                type="submit"
                                className="absolute top-[-100%] w-full h-full bg-mybg z-20 transition-all duration-1000 ease-in-out group-hover:top-0"
                            />

                            <Button
                                type="submit"
                                className="absolute top-[100%] w-full h-full bg-mybg z-10 transition-all duration-1000 ease-in-out group-hover:top-0"
                            />
                        </div>
                        <a href="#" className='text-white'>Forgot Your Password</a>
                        
                    </form>
                </div>
                <div className='bg-[#808080a3] p-4 h-[400px]'>
                    <h1 className='font-medium text-[1.2rem] mb-2 text-white'>Registeration</h1>
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <CustomInput className='w-full' required placeholder='Your Name'/>
                        <CustomInput className='w-full mt-2' required placeholder='Email Address or Username'/>
                        <CustomInput className='w-full mt-2' required placeholder='password' type='password'/>
                        <CustomInput className='w-full mt-2' required placeholder='confirm password' type='password'/>
                        <div className="relative h-[40px] w-[110px] mt-4 overflow-hidden bg-text rounded group cursor-pointer">
                            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                                <span className="text-white font-semibold text-[1rem]">Sign Up </span>
                            </div>

                            <Button
                                type="submit"
                                className="absolute top-[-100%] w-full h-full bg-mybg z-20 transition-all duration-1000 ease-in-out group-hover:top-0"
                            />

                            <Button
                                type="submit"
                                className="absolute top-[100%] w-full h-full bg-mybg z-10 transition-all duration-1000 ease-in-out group-hover:top-0"
                            />
                        </div>
                        
                    </form>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Login2