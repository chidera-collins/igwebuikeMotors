import React from 'react'
import { useLocation } from 'react-router-dom'
import { GrStatusGood } from "react-icons/gr";
import { IoCarSportOutline } from "react-icons/io5";
import { IoSpeedometer } from "react-icons/io5";
import { BsFuelPumpFill } from "react-icons/bs";
import { SiTransmission } from "react-icons/si";
import { CiUser } from "react-icons/ci";

function DetailsComponent2() {
    const location = useLocation();
    const {carDetails} = location.state || {}
  return (
    <div>
        <div className='min-h-[100px] w-full bg-mybg flex flex-col items-center '>
            <div className='min-h-[200px] w-[90%] bg-[#808080a3] grid grid-cols-1 lg:grid-cols-3 mt-12 '>
                <div className='grid grid-cols-1 bg- min-h-[90vh] lg:col-span-2'>
                    <div className='bg- '>
                                <img src={carDetails?.photo ? carDetails?.photo : 'Loading...'} alt={carDetails?.name} height='100%' width='100%'/>
                    </div>

                    <div className='bg-[#808080a3] px-2'>
                     <h1 className='text-text  font-medium lg:text-[2rem] text-[1.3rem]'>Car Description</h1>
                     <p className='text-start text-white'>
                        {carDetails?.description ? carDetails?.description : 'Loading....'}
                     </p>

                    </div>
                    <div className='bg-[] px-2'>
                        <h1 className='text-text  font-medium lg:text-[2rem] text-[1.3rem]'>Car Features</h1>
                        <ul className='lg:grid grid-cols-3 gap-0'>
                            {carDetails?.features ?
                            carDetails?.features.map((value,id)=>(
                                <li key={id} className='flex items-center  gap-1.5 text-[1rem] text-white'> <span className='text-[0.9rem] mt-1 text-text'><GrStatusGood /></span>  {value}</li>
                            
                             )):(<h1 className='text-white'>Loading...</h1>)}

                        </ul>
                       

                    </div>
                    
                </div>
                <div className=''>
                    <h1 className=' lg:text-[2rem] text-[1.3rem] font-medium text-text'>Car OverView</h1>
                    <div className='min-h-[200px] bg-[#808080a3]'>
                        <div className='flex justify-between text-white'>
                            <h1 className='flex items-center gap-2'><span className='text-text'><IoCarSportOutline /></span> Car type</h1>
                            <h1>{carDetails?.name}</h1>
                        </div>

                        <div className='flex justify-between text-white'>
                            <h1 className='flex items-center gap-2'><span className='text-text'><IoSpeedometer/></span>Mileage</h1>
                            <h1>{carDetails?.mileage ? carDetails?.mileage : 'loading details...'}</h1>
                        </div>

                        <div className='flex justify-between text-white'>
                            <h1 className='flex items-center gap-2'><span className='text-text'><BsFuelPumpFill/></span>Fuel</h1>
                            <h1>{carDetails?.fuel ? carDetails?.fuel : 'loading details...'}</h1>
                        </div>

                        <div className='flex justify-between text-white'>
                            <h1 className='flex items-center gap-2'><span className='text-text'><SiTransmission/></span>Transmission</h1>
                            <h1>{carDetails?.transmission ? carDetails?.transmission : 'loading details...'}</h1>
                        </div>

                        <div className='flex justify-between text-white'>
                            <h1 className='flex items-center gap-2'><span className='text-text'><CiUser/></span>person</h1>
                            <h1>{carDetails?.person ? carDetails?.person : 'loading details...'}</h1>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default DetailsComponent2