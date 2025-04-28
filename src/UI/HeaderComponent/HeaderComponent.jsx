import React, { useContext, useEffect, useState } from 'react'
import logo from './logo/logo.svg'
import { Link } from 'react-router-dom'
import Button from '../../Reusuable Folder/Button'
import { FaBasketShopping } from 'react-icons/fa6';
import { CartContext } from '../../Reusuable Folder/CartContext';

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

    const {cart} = useContext(CartContext);
    console.log(cart);
    const totalItems = cart.reduce((sum , item)=> sum + item.quantity ,0);
    console.log(totalItems);
    
  
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
                    <li className='hover:text-text'><Link to={'/cart'}>Cart</Link>  </li>
                    <li className='hover:text-text'><Link to={'/contact'}>Contact</Link></li>
                </ul>

            </div>
            <div className='h-[inherit] bg-[] w-[30%] flex items-center justify-evenly'>
                <div>
                    <Link to='/cart'>
                        <FaBasketShopping className='text-text'/>
                        {totalItems > 0 &&
                            <span className='absolute top-3 text-white'>{totalItems}</span>
                        }
                    </Link>
                </div>
                <Link to='/login'>
                <div className="relative h-[30px] w-[110px] overflow-hidden bg-text rounded group cursor-pointer">
                    <div className="absolute inset-0 z-30 flex items-center gap-1 justify-center pointer-events-none">
                        <span className="text-white font-semibold text-[1rem]"> Sign In</span>
                    </div>
                    <Button
                    className="absolute top-[-100%] w-full h-full bg-mybg z-20 transition-all duration-1000 ease-in-out group-hover:top-0"
                    />
                    <Button
                    className="absolute top-[100%] w-full h-full bg-mybg z-10 transition-all duration-1000 ease-in-out group-hover:top-0"
                    />
                </div>
                </Link>

                <Link to='/login'>
                <div className="relative h-[30px] w-[110px] overflow-hidden bg-text rounded group cursor-pointer">
                    <div className="absolute inset-0 z-30 flex items-center gap-1 justify-center pointer-events-none">
                        <span className="text-white font-semibold text-[1rem]"> Sign Up</span>
                    </div>
                    <Button
                    className="absolute top-[-100%] w-full h-full bg-mybg z-20 transition-all duration-1000 ease-in-out group-hover:top-0"
                    />
                    <Button
                    className="absolute top-[100%] w-full h-full bg-mybg z-10 transition-all duration-1000 ease-in-out group-hover:top-0"
                    />
                </div>
                </Link>
                

            </div>

        </div>


        {/*Header for small and medium screen */}
        <div className={` w-full bg-mybg text-white lg:hidden flex justify-between z-50 ${isSticky ? 'fixed top-0 h-[80px]':'relative h-[100px]'}`}>
            <div className='h-[inherit] flex-col w-[25%] bg-[] flex items-center justify-center'>
                <img src={logo} alt="" className='h-10 w-20' />
                <h2 className='font-semibold text-text'>IGB Motors</h2>         
            </div>
            <div className='h-[inherit] w-[25%]  flex justify-around items-center text-[1.3rem]'>

                    <Link to='/cart'>
                        <FaBasketShopping className='text-text'/>
                        {totalItems > 0 &&
                            <span className='absolute top-3 text-white'>{totalItems}</span>
                        }
                    </Link>
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
                                    <li className=' w-full text-center hover:text-text' onClick={navWidth}><Link to={'/cart'}>Cart</Link></li>
                                    <li className=' w-full text-center hover:text-text' onClick={navWidth}><Link to={'/checkout'}>Checkout</Link></li>
                                    <li className=' w-full text-center hover:text-text' onClick={navWidth}><Link to={'/services'}>Services</Link></li>
                                    <li className=' w-full text-center hover:text-text'onClick={navWidth}><Link to={'/faq'}>Faq</Link></li>


                        <li className='hover:text-text' onClick={navWidth}><Link to={'/contact'}>Contact</Link></li>


                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HeaderComponent