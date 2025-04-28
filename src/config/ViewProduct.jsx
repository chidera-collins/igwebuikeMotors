import { collection, getDocs, deleteDoc ,doc } from 'firebase/firestore'
import { db } from './firebase'
import React, { useEffect, useState } from 'react'
import Button from '../Reusuable Folder/Button';

function ViewProduct() {
  const carsCollectionRef = collection(db,'cars');
  const [productList, setproductList] = useState([]);


  const getProducts= async()=>{
    try{
      const data = await getDocs(carsCollectionRef)
      const filteredData = data.docs.map((doc)=>(
        {...doc.data(),id:doc.id}
      ))
      setproductList(filteredData)
      console.log(filteredData)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    getProducts()
  },[])

  const deleteCars= async (index)=>{
    const carDoc = doc(db,"cars",index)
    await deleteDoc(carDoc)
  };
  




  return (
    <div>
      <div className='min-h-dvh w-full bg-mybg flex flex-col items-center justify-start'>
        <div className='min-h-[80px] bg-[#808080a3] w-[90%] lg:w-[80%] mt-4 flex items-center rounded-lg'>
          <h1 className='font-semibold lg:text-lg text-md text-white'>Products</h1>
        </div>

        <div  className='min-h-[100px] w-[90%] lg:w-[80%] bg-[#808080a3] p-2 mt-6'>
          <table className='w-full table-auto leading-11 '>
            <thead>
              <tr className='text-text '>
                <th className='text-start'>Image</th>
                <th className='text-start'>Name</th>
                <th className='text-start'>Price</th>
                <th className='text-start'>Delete Product</th>
              </tr>
            </thead>
            <tbody>
              {productList.length >0 && productList.map((key,index)=>(
                  <tr key={index} className='text-white'>
                    <td>
                      <img src={key.photo} alt={key.name} className='h-10 w-10' />
                    </td>
                    <td className='capitalize'>
                      {key.name}
                    </td>
                    <td>${(key.price).toFixed(2)}</td>
                    <td>
                      <Button
                      label='Delete car'
                      onClick={()=>deleteCars(index)}
                      className="bg-red-500 text-white px-1 h-[30px] flex items-center justify-center rounded cursor-pointer"

                      />
                    </td>
                  </tr>
              )) 
              }    
            </tbody>
          </table>

        </div>


      </div>
    </div>
  )
}

export default ViewProduct