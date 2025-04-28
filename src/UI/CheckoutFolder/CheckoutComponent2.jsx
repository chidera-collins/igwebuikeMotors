import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../../Reusuable Folder/Button';
import CustomInput from '../../Reusuable Folder/CustomInput';

function CheckoutComponent2() {
    const location = useLocation();
    const {cart=[] ,total=0} = location.state || [];
    console.log(cart,total)
    // const [couponHeight ,setCouponHeight] = useState('0');
    // const height=()=>{
    //     setCouponHeight(prevHeight => prevHeight === '0'? '100px' : '0')
    // }
  return (
    <div>
        <div className='min-h-[100px] bg-mybg flex flex-col items-center'>
            <div className='min-h-[300px] bg- w-[90%] mt-10'>
                 {/* <div className='min-h-[50px] bg-[#808080a3] overflow-hidden '>
                    <h1 className='text-white font-medium text-[1.3rem] lg:text-[1.7rem]'>Checkout</h1>
                    <section className='border-t-2 border-t-text'>
                        <h4 onClick={height} className='text-white'>Have a coupon ? <span className='text-text'>Click here to enter your code</span></h4>
                    </section>
                    <section className='bg-[#808080a3] mt-5 ' style={{height:couponHeight, 
                        padding:couponHeight ==='100px'? '5px':'0px',
                        border:couponHeight ==='100px'? '2px solid grey':'0'
                        }}>
                        <h1 className='text-white'>If you have a coupon code , please apply it below</h1>

                    <form action="coupon" className='flex  items-center  min-h-[10px] w-full md:w-[400px] lg:min-w-[100%] py-2 rounded-md '>
                        <input type="text"  className='w-[50%] h-[40px] bg-white  active:outline-2 outline-text' placeholder=' Coupon code'/>
                        <div className="h-[40px] w-[120px] bg-text  relative cursor-pointer justify-center flex group text-center flex-col overflow-hidden rounded-[5%]">
                            <Button className="h-[23px] w-[100%] cursor-pointer absolute transition delay-150 duration-300 ease-in-out -translate-y-6 group-hover:-translate-y-0 bg-mybg top-0 gap-1 flex items-center justify-center" />
                                <h2 className="text-[white] z-20 hover:z-20 font-medium text-[1rem] text-center flex justify-center items-center gap-1">
                                            Coupon code
                                </h2>
                            <Button className="h-[21px] w-[100%] absolute text-[white] bg-mybg z-10 transition delay-150 duration-300 ease-in translate-y-5 group-hover:-translate-y-3 gap-1 font-medium cursor-pointer flex items-center justify-center" />
                        </div>
                    </form>
                    </section>
                </div> */}
                <div className='grid grid-cols-1 lg:grid-cols-3 w-full bg lg:gap-1'>
                    <div className='bg-[#808080a3] col-span-2 flex flex-col'>
                        <h1 className='mt-6 text-white font-medium text-[1.2rem] lg:text-[1.4rem]'>Billing Details</h1>
                        <form action="billing details" onSubmit={(e)=>e.preventDefault()} className='p-2' >
                            <div className='lg:flex justify-between gap-2'>
                               <div className='flex flex-col'>
                                    <label htmlFor="first name " className='capitalize text-white'>first name</label>
                                     <input type="text" className='lg:min-w-[430px] w-full bg-white h-[30px] rounded-sm ' required />
                               </div>
                               <div className='flex flex-col'>
                                    <label htmlFor="first name " className='capitalize text-white'>last name</label>
                                    <input type="text" className='lg:min-w-[430px] w-full bg-white h-[30px] rounded-sm ' required/>
                               </div>
                            </div>
                            <div className='mt-4' >
                                <label htmlFor="company name" className='capitalize text-white'>Company Name (optional)</label>
                                <input type="text" className='w-[100%] bg-white h-[30px] rounded-sm ' />   
                            </div>
                            <div className='mt-4 flex flex-col'>
                                <label htmlFor="district" className='capitalize text-white' required>district</label>
                                <select name="" id="" className='bg-white w-[100%] h-[30px]'>
                                    <option value="">Nigeria</option>
                                    <option value="">Lagos</option>
                                    <option value="">Abuja</option>
                                    <option value="">Benin</option>
                                    <option value="">Port-Harcourt</option>
                                    <option value="">Delta</option>
                                    <option value="">Anambra</option>
                                    <option value="">Imo</option>
                                    <option value="">Enugu</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-2 mt-4'>
                                <label htmlFor="street adress" className='text-white capitalize'>Street address</label>
                                <input type="text" className=' bg-white h-[30px] rounded-sm w-[100%]'/>
                                <input type="text"className='w-[100%] bg-white h-[30px] rounded-sm ' />
                            </div>
                            <div className='flex flex-col gap-2 mt-4'>
                                <label htmlFor="street adress" className='text-white capitalize'>Town/City</label>
                                <input type="text" className=' bg-white h-[30px] rounded-sm w-[100%]'/>
                            </div>
                            <div className='flex flex-col gap-2 mt-4'>
                                <label htmlFor="street adress" className='text-white capitalize' required>Phone</label>
                                <input type="text" className=' bg-white h-[30px] rounded-sm w-[100%]'/>
                            </div>
                            <div className='flex flex-col gap-2 mt-4'>
                                <label htmlFor="street adress" className='text-white capitalize' required>Email Address</label>
                                <input type="text" className=' bg-white h-[30px] rounded-sm w-[100%]'/>
                            </div>

                            <div>
                                <h1 className='text-white mt-4 capitalize font-medium'>Additional information (optional)</h1>
                                    <label htmlFor=" " className='text-white'>order notes</label>
                                    <CustomInput textarea={true} placeholder=' Notes about your order, e.g special delivery'/>
                            </div>
                            <div className='mt-5'>
                                <h1 className='text-white font-medium text-[1.3rem] lg:text-[1.4rem]'>Your order</h1>
                                <table className='table-auto w-full lg:w-[70%] min-h-[100px] bg-mybg text-white'>
                                    <thead >
                                        <tr className='text-left border-2 border-[grey] text-text'>
                                            <th className='border-[grey] border-2'>product</th>
                                            <th>total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { cart && cart.length >0  ?
                                            (cart.map((item,key)=>(
                                            <tr key={key} className='px-10'>
                                                <td className='border-2 border-[grey]'>{item.name } x {item.quantity}</td>
                                                <td className='border-2 border-[grey]'>${(item.price * item.quantity).toFixed(2)}</td>
                                            </tr>
                                            
                                        ))):(
                                            <tr>
                                                <td colSpan={2}>
                                                    <h1 className="text-center py-2">None</h1>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                    <tbody>
                                    <tr>
                                        <td className='border-[grey] border-2'>subtotal</td>
                                        <td className='border-[grey] border-2'>${(total).toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td className='border-2 border-[grey]'>total</td>
                                            <td className='border-2 border-[grey]'>${(total).toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="relative h-[40px] w-[190px] mt-4 overflow-hidden bg-text rounded group cursor-pointer">
                                <div className="absolute inset-0 z-30 flex items-center gap-1 justify-center pointer-events-none">
                                    <span className="text-white font-semibold text-[1rem]"> Proceed</span>
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

                    <div className='bg-[#808080a3] p-3'>
                        <div>
                            <h1 className='mt-6 text-white font-medium text-[1.2rem] lg:text-[1.4rem]'>Your order</h1>

                            <div className='bg- w-full min-h-[100px] '>
                                {
                                    cart && cart.length > 0?
                                    (cart.map((item, key)=>(
                                        <div key={key} className='bg-mybg w-full min-h-[40px] mt-2 p-3 flex gap-3'>
                                            <div>
                                                <img src={item.photo} alt="" className="h-10 w-20 object-cover" />
                                            </div>
                                            <div>
                                                <h1 className='text-white'>{item.name} x {item.quantity}</h1>
                                                <h1 className='text-text'>${(item.price * item.quantity).toFixed(2)}</h1>
                                            </div>
                                        </div>
                                        
                                    ))):(
                                        <tr>
                                            <td colSpan={2}>
                                                <h1 className="text-center py-2">None</h1>
                                            </td>
                                        </tr>
                                    )}
                            </div>
                            <div className='mt-5'>
                                <div className='flex justify-between text-white font-medium border-b-2 border-b-[grey]'>
                                    <h1>Subtotal</h1>
                                    <h1>${(total).toFixed(2)}</h1>
                                </div>
                                <div className='flex justify-between text-white font-medium'>
                                    <h1>Total</h1>
                                    <h1>${(total).toFixed(2)}</h1>
                                </div>       
                            </div>
                            <div className="relative h-[40px] w-[full] mt-4 overflow-hidden bg-text rounded group cursor-pointer">
                                <div className="absolute inset-0 z-30 flex items-center gap-1 justify-center pointer-events-none">
                                    <span className="text-white font-semibold text-[1rem]"> Place Order</span>
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
                           
                        </div>
                        
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default CheckoutComponent2