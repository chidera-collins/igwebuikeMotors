import React from 'react'
import ServiceComponent1 from './ServiceComponent1'
import ServiceComponent2 from './ServiceComponent2'
import ServiceComponent3 from './ServiceComponent3'
import ServiceComponent4 from './ServiceComponent4'
import ServiceComponent5 from './ServiceComponent5'
import ServiceComponent6 from './ServiceComponent6'
import HomeComponent9 from '../HomeFolder/HomeComponent9'
import AboutComponent4 from '../AboutFolders/AboutComponent4'


function ServiceComponent() {
  return (
    <div className='min-h-[100px] w-full bg-mybg '>
        <ServiceComponent1/>
        <ServiceComponent2/>
        <ServiceComponent3/>
        <ServiceComponent4/>
        <ServiceComponent5/>
        <ServiceComponent6/>
        <HomeComponent9/>
        <AboutComponent4/>
    </div>
  )
}

export default ServiceComponent