import React,{ StrictMode } from 'react' 
// import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Motor from './Motor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
      <Motor/> 
    {/* </BrowserRouter> */}
  </StrictMode>,
)
