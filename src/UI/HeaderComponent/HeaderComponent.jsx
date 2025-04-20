import React, { useEffect, useState } from 'react'
import logo from './logo/logo.svg'
import { Link } from 'react-router-dom'
import Button from '../../Reusuable Folder/Button'

function HeaderComponent() {
    const [subnav, setSubnav] = useState(100); //translating the subnav
    const [isSticky, setIsSticky] =useState(false)
    const handleKeyPress =(e)=>{
        console.log(e.key)
        if (['ArrowUp','ArrowDown','Spacebar','PageUp','PageDown'].includes(e.key)) {
             e.preventDefault()    //to handle the keys being pressed
        }
    };
    const navWidth =()=>(
        setSubnav(prevNav => prevNav === 100 ? 0 :100) //set the subnav on click
    );

    useEffect(()=>{
        if (subnav === 0) {
            document.body.style.overflow= 'hidden'  //handle overflow once the subnav is open  
            window.addEventListener('keydown',handleKeyPress) 
        }else{
            document.body.style.overflow ='auto' //set it back to default so you can scroll
            window.removeEventListener('keydown',handleKeyPress)
        }
        return ()=>{
            document.body.style.overflow ='auto'
            window.removeEventListener('keydown',handleKeyPress)
        }
    },[subnav]);

    useEffect(()=>{
        const handleStickyHeader=()=>{
            // const triggerHeight = window.innerHeight;
        
            if (window.scrollY > 300) {
                setIsSticky(true)
                
            }else{
                setIsSticky(false)
            }
        }
            window.addEventListener('scroll',handleStickyHeader)
        return ()=>{
            window.removeEventListener('scroll',handleStickyHeader)
        }
    });
    
  
  return (
    <div>
        {/* This the Header for large screeens  */}
        <div className={` w-full bg-mybg hidden text-white lg:flex justify-between gap-1 transition-all duration-300 z-40 ${isSticky ? 'fixed top-0 h-[60px] shadow-md' :'relative h-[70px]'}`}>
            <div className='h-[inherit] flex-col w-[20%] bg-[] flex items-center justify-center'>
                <img src={logo} alt="" className='h-10 w-20' />
                <h2 className='font-semibold text-text'>IGB Motors</h2>
                
            </div>
            <div className='h-[inherit] bg-[] w-[60%]'>
                <ul className='flex justify-evenly font-semibold lg:text-[1.2rem] items-center h-[inherit] w-full'>
                    <li className='hover:text-text'><Link to={'/'}>Home</Link></li>
                    <li className='hover:text-text'><Link to={'/about'}>About</Link></li>
                    <li className='hover:text-text'><Link to={'/shop'}>Shop</Link></li>
                    <li className='pages cursor-pointer'>Pages  </li>
                    <div className='absolute subnav bg-[#808080a3] w-[150px] opacity-0 right-[40%] h-[140px]'style={{transition:'1s'}}>
                        <ul className='grid grid-cols-1 h-[inherit]'>
                            <li className='border-b-2 border-b-mybg w-full text-center hover:text-text'><Link to={'/cart'}>Cart</Link></li>
                            <li className='border-b-2 border-b-mybg w-full text-center hover:text-text'><Link to={'/checkout'}>Checkout</Link></li>
                            <li className='border-b-2 border-b-mybg w-full text-center hover:text-text'><Link to={'/services'}>Services</Link></li>
                            <li className=' w-full text-center hover:text-text'><Link to={'/faq'}>Faq</Link></li>
                        </ul>

                    </div>
                    <li className='hover:text-text'><Link to={'/contact'}>Contact</Link></li>
                </ul>

            </div>
            <div className='h-[inherit] bg-[] w-[30%] flex items-center justify-evenly'>
                 <div className="h-[30px] w-[110px] bg-text mt-4 relative cursor-pointer justify-center flex group text-center flex-col overflow-hidden">
                    <Button className="h-[23px] w-[100%] cursor-pointer absolute transition delay-150 duration-300 ease-in-out -translate-y-6 group-hover:-translate-y-0 bg-mybg top-0 gap-1 flex items-center justify-center" />
                        <h2 className="text-[white] z-40 hover:z-40 font-medium text-[1rem] text-center flex justify-center items-center gap-1">
                            Sign in
                        </h2>
                    <Button className="h-[21px] w-[100%] absolute text-[white] bg-mybg z-10 transition delay-150 duration-300 ease-in translate-y-5 group-hover:-translate-y-3 gap-1 font-medium cursor-pointer flex items-center justify-center" />
                </div>

                <div className="h-[30px] w-[110px] bg-text mt-4 relative cursor-pointer justify-center flex group text-center flex-col overflow-hidden">
                    <Button className="h-[23px] w-[100%] cursor-pointer absolute transition delay-150 duration-300 ease-in-out -translate-y-6 group-hover:-translate-y-0 bg-mybg top-0 gap-1 flex items-center justify-center" />
                        <h2 className="text-[white] z-40 hover:z-40 font-medium text-[1rem] text-center flex justify-center items-center gap-1">
                            Sign up
                        </h2>
                    <Button className="h-[21px] w-[100%] absolute text-[white] bg-mybg z-10 transition delay-150 duration-300 ease-in translate-y-5 group-hover:-translate-y-3 gap-1 font-medium cursor-pointer flex items-center justify-center" />
                </div>
                

            </div>

        </div>


        {/*Header for small and medium screen */}
        <div className={` w-full bg-mybg text-white lg:hidden flex justify-between z-50 ${isSticky ? 'fixed top-0 h-[80px]':'relative h-[100px]'}`}>
            <div className='h-[inherit] flex-col w-[25%] bg-[] flex items-center justify-center'>
                <img src={logo} alt="" className='h-10 w-20' />
                <h2 className='font-semibold text-text'>IGB Motors</h2>         
            </div>
            <div className='h-[inherit] w-[20%]  flex justify-center items-center text-[1.3rem]'>
                <Button
                    label='Ξ'
                    className='bg-text text-mybg font-medium p-3'
                    onClick={navWidth}
                />

            </div>

        </div>

        <div className='h-screen w-[100%] bg-[#8080802f] flex flex-col items-end z-[60] top-0 fixed transition-transform duration-300 ease-in-out' style={{transform:`translateX(${subnav}%)`}}>
            <div className='h-[inherit] w-[90%] bg-[#808080f6]'>
                <Button
                label ='X'
                className='p-3 bg-black text-white font-semibold'
                onClick={navWidth}
                />
                <div className='bg- text-white  h-[400px] mt-7 font-medium' >
                    <ul className='grid grid-cols-1   h-[inherit] w-full text-center'>
                        <li className='hover:text-text'><Link to={'/'} onClick={navWidth}>Home</Link></li>
                        <li className='hover:text-text'><Link to={'/about'} onClick={navWidth}>About</Link></li>
                        <li className='hover:text-text'><Link to={'/shop'} onClick={navWidth}>Shop</Link></li>
                        <li className='group'>Pages
                            <div className=' hidden group-hover:grid bg-[#808080a3] w-[full] mt-5  h-[140px]'>
                                <ul className='grid grid-cols-1 h-[inherit]'>
                                    <li className='border-b-2 border-b-mybg w-full text-center hover:text-text' onClick={navWidth}><Link to={'/cart'}>Cart</Link></li>
                                    <li className='border-b-2 border-b-mybg w-full text-center hover:text-text' onClick={navWidth}><Link to={'/checkout'}>Checkout</Link></li>
                                    <li className='border-b-2 border-b-mybg w-full text-center hover:text-text' onClick={navWidth}><Link to={'/services'}>Services</Link></li>
                                    <li className=' w-full text-center hover:text-text'onClick={navWidth}><Link to={'/faq'}>Faq</Link></li>
                                </ul>

                            </div>

                        </li>
                        <li className='hover:text-text' onClick={navWidth}><Link to={'/contact'}>Contact</Link></li>


                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HeaderComponent