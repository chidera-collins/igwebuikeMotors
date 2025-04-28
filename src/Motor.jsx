import React, { useEffect } from 'react'
import HomeComponent from './UI/HomeFolder/HomeComponent'
import FirebaseData from './config/FirebaseData'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import Admin from './config/Admin'
import Settings from './config/Settings'
import DashBoard from './config/DashBoard'
import AllOrders from './config/AllOrders'
import ViewProduct from './config/ViewProduct'
import { Toaster } from 'react-hot-toast'
function Motor() {
  const location = useLocation()
  const removeHeader = location.pathname ==='/login' ||
  location.pathname.startsWith('/admin')

  const ScrollToTop=()=>{
    const {pathname} = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);

    },[pathname]);
    return null;
};
  return (
    <div className=''>
        <CartProvider>
          <ScrollToTop/>
            {!removeHeader && <HeaderComponent/>}
            <Toaster position='top-center' reverseOrder={false}/>
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
                    <Route path='/admin' element={<Admin/>}>
                      <Route path='/admin/setting' element={<Settings/>}/>
                      <Route path='/admin/orders' element={<AllOrders/>}/>
                      <Route path='/admin/addProduct' element={<FirebaseData/>}/>
                      <Route path='/admin' element={<DashBoard/>}/>
                      <Route path='/admin/viewproduct' element={<ViewProduct/>}/>

                    </Route>
                    

                </Routes>  
                {!removeHeader &&<Footer/>}
        </CartProvider>
    

        
    </div>
  )
}

export default Motor