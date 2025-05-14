import React, { useEffect, useState } from 'react'
import Button from '../../Reusuable Folder/Button';
import { db } from '../../config/firebase';
//for fetching all the data from firebase use getdocs but if its only we use getdoc
//calling collection is to specify the collection u need
import { getDocs ,collection,query,limit} from 'firebase/firestore';
import { CiHeart } from 'react-icons/ci';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
// import {motion} from 'framer-motion';

function HomeComponent6() {
//Created a button that maps out all button so as not to repeat the button more than once
    const btn = [
        {id:1, name:'all '},
        {id:2,name:'new cars'},
        {id:3,name:'used cars'},
        {id:4,name:'trending cars'},
        {id:5,name:'in stocks'},
    ];

    const [carList, setCarlist]= useState([]);
     const carCollectionRef = collection(db,"cars");
    const [searchCars, setSearchCars]= useState("all");
    const [filteredCars, setFilteredCars] = useState([]);


            // using async because ,fetching from the backend and making sure it renders 
    const getCars= async()=>{
                //read data 
                //set the car list
        try{
            //limit  the details of the car from the firebase
            const carQuery = query(carCollectionRef,limit(6))
            //the data brings a whole data from the firebase
            const data = await getDocs(carQuery);
             //advisable to put the document in an object so it returns an array of objects it out but it doesnt come with an id so we gv it a value id
            const filteredData = data.docs.map((doc)=>(
            {...doc.data(),
             id:doc.id
            }));
            setCarlist(filteredData)
            // console.log(filteredData)
            setFilteredCars(filteredData)
                }catch(err){
                    console.error(err)
        }
                
    };

    useEffect(()=>{
            getCars();
    },[]);


    const navigate = useNavigate();

    const handleViewDetails=(car)=>{
        navigate('/details',{state:{carDetails:car}})
    }

    
  

    useEffect(()=>{
        if (searchCars === 'all') {
            setFilteredCars(carList)
        }else{
            const filtered =carList.filter((car) =>car.condition?.toLowerCase().trim()===searchCars.toLowerCase().trim());
            console.log(filtered)
            setFilteredCars(filtered)
        }

    },[searchCars,carList]);

    const search =(condition)=>{
        if(condition){
        setSearchCars(condition.trim().toLowerCase())
        }
        console.log(condition)

    }




   
  return (
    <div className='min-h-[100px] w-full bg-mybg'>
         <section className='min-h-[200px] w-full bg-[] p-4 flex flex-col items-center'>
            <div className='min-h-[100px] lg:min-h-[80px] bg w-full x'>
                <aside className='text-center text-text font-medium text-[1rem] lg:text-start'>
                    <h3>Select Car</h3>
                </aside>
                <aside className=' flex md:justify-between flex-wrap items-center'>
                    <div className='text-center lg:text-start h-[30px] bg w-full lg:w-[50%] lg:min-h-[20px]'>
                        <h1 className='text-[1rem] lg:text-[2rem] capitalize font-medium text-white'>our amazing <span className='text-text underline'>Car</span></h1>
                    </div>
                    <div className='flex gap-3 flex-wrap items-center justify-center min-h-[30px] lg:min-h-[30px] w-full lg:w-[50%] lg:justify-center'>
                        {btn.map((key,index)=>(
                            <Button 
                            label={key.name}
                             key={index} 
                             //since i stored the index condition of car in the database and the full name is displayed on the button i had to use this method to get it
                             onClick={()=>search(key.name ==='all'? 'all':key.name.split(' ').slice(0,-1).join(' '))}
                             className='h-[30px] w-[100px] md:w-[100px] bg-[#] text-[#808080a3] hover:text-white active:bg-[#808080a3] active:text-white rounded-md cursor-pointer capitalize'
                              />
                        ))}

                    </div>
                </aside>
            </div>

            <div className="min-h-[200px] bg-[#] grid grid-cols-1 gap-2 md:gap-5 md:grid-cols-2 lg:grid-cols-3 p-6 md:p-6 lg:p-16 ">
            {
                 filteredCars.length >0 ?
                (filteredCars.map((cars, id)=>(
                    <motion.div key={id} 
                    initial={{ opacity: 0, y: 20 }} // Start with lower opacity & slight downward position
                    animate={{ opacity: 1, y: 0 }} // Animate to full opacity & normal position
                    exit={{ opacity: 0, y: -20 }} // Exit with fade-out and slight upward movement
                    transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth animation
                    className='min-h-[200px] bg-[#808080a3] grid grid-cols-1 rounded-[4%] p-6'>
                        <div className=' w-full bg-  relative object-cover'>

                            <img src={cars.photo} alt={cars.name} height='100%' width='100%' />
                            {/* for pics  */}
                            <div className='bg-text h-[30px] w-fit text-center flex justify-center items-center left-3 top-2 rounded-3xl p-4 absolute text-white'><h3>{cars.condition}</h3></div>
                            <div className='bg-white h-[30px] w-[30px] grid items-center justify-center bottom-3 md:bottom-5 right-3 absolute rounded-[50%]'>
                                <h3><CiHeart/></h3>
                            </div>

                        </div>
                        <div className='  bg-[] w-full  grid grid-cols-1 '>
                            <div className='w-full text-white border-b-2 border-[grey]' >
                                <div>
                                    <h1 className='text-white hover:text-text text-[1.7rem]'>{cars.name}</h1>
                                </div>
                                <div className='flex gap-3 text-[1.4rem] text-[#e3ddddcd] text-ellipsis whitespace-nowrap overflow-hidden font-medium capitalize '>
                                    <h1 className='text-[0.7rem] md:text-[1rem]'>{cars.about}</h1>
                                    <h1 className='text-[0.7rem] md:text-[1rem]'>petrol</h1>
                                    <h1 className='text-[0.7rem] md:text-[1rem]'>automatic</h1>
                                    <h1 className='text-[0.7rem] md:text-[1rem]'>{cars.model}</h1>
                                </div>

                            </div>
                            <div className='flex justify-between items-center px-3'>
                                <div className='h-[30px]'>
                                    <h1 className='lg:text-[1.7rem] font-semibold text-white'>${cars.price}</h1>
                                </div>
                                <div className="relative h-[40px] w-[110px] mt-4 overflow-hidden bg-text rounded group" onClick={()=>handleViewDetails(cars)}>
                                <div className="absolute inset-0 z-30 flex items-center gap-1 justify-center pointer-events-none">
                                  <span className="text-white font-semibold text-[1rem]"> View Details</span>
                                </div>
                                <Button
                                  className="absolute top-[-100%] w-full h-full bg-mybg z-20 transition-all duration-1000 ease-in-out group-hover:top-0"
                                />
                                <Button
                                  className="absolute top-[100%] w-full h-full bg-mybg z-10 transition-all duration-1000 ease-in-out group-hover:top-0"
                                />
                              </div>
                            </div>

                            

                        </div>

                        

                    </motion.div>
                ))):(

                <h1 className='text-white'>NOT IN STOCK YET</h1>
                )

            }
            </div>


            <Link to='/shop'>
           
                <div className="relative h-[40px] w-[110px] mt-4 overflow-hidden bg-text rounded group">
                    <div className="absolute inset-0 z-30 flex items-center gap-1 justify-center pointer-events-none">
                         <span className="text-white font-semibold text-[1rem]">  See More</span>
                    </div>
                    <Button
                    className="absolute top-[-100%] w-full h-full bg-mybg z-20 transition-all duration-1000 ease-in-out group-hover:top-0"
                    />
                    <Button
                     className="absolute top-[100%] w-full h-full bg-mybg z-10 transition-all duration-1000 ease-in-out group-hover:top-0"
                    />
                </div>
            </Link>
        </section>
    </div>
  )
}

export default HomeComponent6