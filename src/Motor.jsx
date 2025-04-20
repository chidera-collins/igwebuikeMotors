import React from 'react'
import HomeComponent from './UI/HomeFolder/HomeComponent'
import FirebaseData from './config/FirebaseData'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutComponent from './UI/AboutFolders/AboutComponent'
import ContactComponent from './UI/ContactFolder/ContactComponent'
import FAQ from './UI/FAQ/FAQ'
import ServiceComponent from './UI/ServiceFolder/ServiceComponent'
import ShopFolder from './UI/ShopFolder/ShopFolder'
import { CartProvider } from './Reusuable Folder/CartContext'
import DetailsComponent from './UI/DetailsFolder/DetailsComponent'
import CartComponent from './UI/CartFolder/CartComponent'
import CheckoutComponent from './UI/CheckoutFolder/CheckoutComponent'
import HeaderComponent from './UI/HeaderComponent/HeaderComponent'
import Footer from './UI/FooterFolder/Footer'
import Login from './UI/LoginFolder/Login'

function Motor() {
  return (
    <div className=''>
        <CartProvider>
            <BrowserRouter>
            <HeaderComponent/>
                <Routes >
                    <Route path='/' element={<HomeComponent/>}/>
                    <Route path ='/about' element={<AboutComponent/>}/>
                    <Route path='/contact'element={<ContactComponent/>}/>
                    <Route path='/faq' element={<FAQ/>}/>
                    <Route path='/services' element={<ServiceComponent/>}/>
                    <Route path='/shop' element={<ShopFolder/>}/>
                    <Route path='/details' element={<DetailsComponent/>}/>
                    <Route path='/cart' element={<CartComponent/>}/>
                    <Route path='/checkout' element={<CheckoutComponent/>}/>
                    <Route path='/login' element={<Login/>}/>
                    

                </Routes>  
                <Footer/>
            </BrowserRouter>
        </CartProvider>
    

        {/* <FirebaseData/> */}
    </div>
  )
}

export default Motor