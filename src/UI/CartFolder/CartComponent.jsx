import React from 'react'
import CartComponent1 from './CartComponent1'
import CartComponent2 from './CartComponent2'
import AboutComponent4 from '../AboutFolders/AboutComponent4'

function CartComponent() {
  return (
    <div className='min-h-[100px] w-full bg-mybg'>
        <CartComponent1/>
        <CartComponent2/>
        <AboutComponent4/>
    </div>
  )
}

export default CartComponent