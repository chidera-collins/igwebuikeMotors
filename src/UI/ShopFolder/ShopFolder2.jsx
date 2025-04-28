import React, { useContext, useEffect, useState } from 'react'
import Button from '../../Reusuable Folder/Button'
import { CiSearch } from "react-icons/ci";
import { getDocs,collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { CiHeart } from 'react-icons/ci';
import { CartContext } from '../../Reusuable Folder/CartContext';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'
import CustomInput from '../../Reusuable Folder/CustomInput';


function ShopFolder2() {
    const carsCollectionRef = collection(db,'cars');
    const [carList, setCarList] = useState([]);
    const [selectedName , setSelectedName]= useState('');
    const [currentPage, setCurrentPage] =useState(1)
    const [filteredCars , setFilteredCars] = useState([])
    const [searching, setSearching] = useState(false)


    //a function to turn the database to an array
    const getCars = async()=>{
        try {
            //fetching the collection from the firebase database
            const allData = await getDocs(carsCollectionRef);
            const filteredData = allData.docs.map((doc)=>({
                ...doc.data(), id:doc.id
            }));
            setCarList(filteredData)
            console.log(filteredData)
            
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=>{
        getCars();
    },[]);

      //handling the search button
    const searchCars =()=>{
        const searchCar = selectedName.toLocaleLowerCase()
        const result = carList.filter((car)=>{
            const carName = car.name.toLowerCase();
            const carModel = car.model.toLowerCase();
            return carName.includes(searchCar) || carModel.includes(searchCar);
        })

        setFilteredCars(result);
        setCurrentPage(1);
        setSearching(true)       
    }

    //pagination logic
    const carPerPage = 3;
    const indexOfLastCars = currentPage * carPerPage;
    const firstIndexCars = indexOfLastCars -carPerPage;
    //passing the array from the fetched data to display cars 
    const displayCars = searching ? filteredCars : carList;
    const currentCars = displayCars.slice(firstIndexCars, indexOfLastCars);

    const totalPages =Math.ceil(displayCars.length / carPerPage);
    const handleNextPage = ()=>{
        if(currentPage < totalPages)setCurrentPage(currentPage + 1)
    };

    const handlePrevPage =()=>{
        if(currentPage > 1) setCurrentPage(currentPage -1)
    }

    //handling the disabling of the buttons 
    const IsNextDisabled = currentPage >=totalPages;
    const IsPrevDisabled = currentPage <=1 ;

    const uniqueName = [...new Set(carList.map(car =>car.name))]
    const uniqueModel =[]


    //add to cart functionality
    const {addToCart} = useContext(CartContext)
    const handleAddToCart=(item)=>{
        console.log(item, 'added')
        addToCart(item)
        toast.success('added to cart',{
            style:{
                width:'100%'
            }
        })
    }

    //details functionality
    const navigate = useNavigate();
    const handleViewDetails=(car)=>{
        navigate('/details',{state:{carDetails:car}})
    }

  return (
    <div>
        <div className='min-h-[100px] w-full bg-[grey] flex flex-col items-center'>
            <form action="" className='w-[90%] min-h-[60px] bg-[white]  mb-2.5 flex flex-col lg:flex-row lg:justify-around lg:px-4 items-center gap-5 mt-5'onSubmit={(e)=>e.preventDefault()} >
                 <CustomInput className='w-full outline-text' placeholder='Search car by make or model' value={selectedName}  onChange={(e)=>setSelectedName(e.target.value)}/>


                <div className="relative h-[40px] w-[100%]  lg:w-[20%] overflow-hidden bg-text rounded group  cursor-pointer"  onClick={searchCars}>
                    <div className="absolute inset-0 z-30 flex items-center gap-1 justify-center pointer-events-none">
                        <span className="text-white font-semibold text-[1rem]"><CiSearch/></span>
                        <span className="text-white font-semibold text-[1rem]">Search</span>
                    </div>
                    <Button
                     className="absolute top-[-100%] w-full h-full bg-mybg z-20 transition-all duration-1000 ease-in-out group-hover:top-0"
                    />
                    <Button
                    className="absolute top-[100%] w-full h-full bg-mybg z-10 transition-all duration-1000 ease-in-out group-hover:top-0"
                    />
                </div>


            </form>

        </div>
        <div className='min-h-[100px] w-full bg-mybg  flex flex-col items-center'>
            <div className="min-h-[200px] w-[90%] bg grid grid-cols-1 gap-2 md:gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {
                    currentCars.length>0 ?
                    (currentCars.map((cars,id)=>(
                        <div key={id} 
                            className='min-h-[200px] bg-[#808080a3] grid grid-cols-1 rounded-[4%] p-6 group'>
                                <div className=' w-full bg-  relative group-hover:scale-105 duration-200 transition-all  cursor-pointer' onClick={()=>handleViewDetails(cars)}>
                                    <img src={cars.photo} alt={cars.name} height='100%' width='100%' />
                                        {/* for pics  */}
                                     <div className='bg-text h-[30px] w-fit text-center flex justify-center items-center left-3 top-2 rounded-3xl p-4 absolute'><h3>{cars.condition}</h3></div>
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
                                   <div className='flex justify-between items-center px-3 border-b-2 border-[grey] '>
                                        <div className='h-[30px]'>
                                         <h1 className='lg:text-[1.7rem] text-white font-semibold'>${cars.price.toFixed(2)}</h1>
                                        </div>
                                        <div className="relative h-[40px] w-[110px] mt-4 overflow-hidden bg-text rounded group cursor-pointer" onClick={()=>handleAddToCart(cars)}>
                                            <div className="absolute inset-0 z-30 flex items-center gap-1 justify-center pointer-events-none">
                                            <span className="text-white font-semibold text-[1rem]"> Add To Cart</span>
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
                        </div>
                        

                    
                    ))): 
                    (
                        searching ?
                            <div className='h-[inherit] grid place-items-center col-span-3  '>
                             <h1 className='text-center text-white font-bold  '> not available </h1>
                            </div> :
                            <div className='h-[inherit] grid place-items-center w-full lg:col-span-3 md:col-span-2 col-span-1'>
                                <h1 className='text-white font-bold text-center'> loading</h1> 
                            </div>
                    )
                }

            </div>
            <div className='min-h-[50px]  flex flex-wrap gap-2.5 w-[90%] items-center justify-center'>
               <div className={`relative h-[40px] w-[110px] mt-4 overflow-hidden bg-text rounded group ${IsPrevDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} `} onClick={!IsPrevDisabled ? handlePrevPage :null}>
                    <div className="absolute inset-0 z-30 flex items-center gap-1 justify-center pointer-events-none">
                        <span className="text-white font-semibold text-[1rem]"> Prev Page</span>
                    </div>
                    <Button
                    className="absolute top-[-100%] w-full h-full bg-mybg z-20 transition-all duration-1000 ease-in-out group-hover:top-0"
                    />
                    <Button
                    className="absolute top-[100%] w-full h-full bg-mybg z-10 transition-all duration-1000 ease-in-out group-hover:top-0"
                    />
                </div>


                <div className={`relative h-[40px] w-[110px] mt-4 overflow-hidden bg-text rounded group ${IsNextDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} `} onClick={!IsNextDisabled ? handleNextPage :null}>
                    <div className="absolute inset-0 z-30 flex items-center gap-1 justify-center pointer-events-none">
                        <span className="text-white font-semibold text-[1rem]"> Next Page</span>
                    </div>
                    <Button
                    className="absolute top-[-100%] w-full h-full bg-mybg z-20 transition-all duration-1000 ease-in-out group-hover:top-0"
                    />
                    <Button
                    className="absolute top-[100%] w-full h-full bg-mybg z-10 transition-all duration-1000 ease-in-out group-hover:top-0"
                    />
                </div>


               <div className='h-[30px]  mt-3 grid place-items-center'>
                    <h1 className='text-white font-medium capitalize'>
                        showing {firstIndexCars + 1}/{indexOfLastCars} of {totalPages}
                    </h1>
               </div>

            </div>

        </div>
    </div>
  )
}

export default ShopFolder2