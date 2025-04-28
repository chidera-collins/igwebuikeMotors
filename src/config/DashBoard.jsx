import React, { useState } from 'react'
import CustomInput from '../Reusuable Folder/CustomInput'
import Button from '../Reusuable Folder/Button'
import { h1 } from 'motion/react-client';

function DashBoard() {
    const [staff, setStaff]= useState([]);
    // const [staffName,setStaffName] =useState('');
    // const [staffEmail,setStaffEmail] =useState('');

    //refactored code
    const [newStaff, setNewStaff] = useState({name:'', email:''});
    const [editStaff,setEditStaff] = useState(null);

    const addStaff =()=>{
        // if (staffName.trim() &&staffEmail.trim() !== '') {
        //     setStaff([...staff,{staffName ,staffEmail}]);
        //     setStaffName('')
        //     setStaffEmail('')
        //     console.log(staff)           
        // }


        if(newStaff.name.trim()  && newStaff.email.trim() !== ''){
            if (editStaff !== null) {
                const updateStaff=[...staff];
                updateStaff[editStaff]=newStaff;
                setStaff(updateStaff);
                setEditStaff(null);
                
            }else {
                setStaff([...staff,newStaff]);
            }
            setNewStaff({name:'',email:''});
        };
    };

     const edit =(id)=>{
        setNewStaff(staff[id])
        setEditStaff(id)

     };

     const handleDelete = (index) => {
        const updatedStaff = staff.filter((_, i) => i !== index);
        setStaff(updatedStaff);
        if (editStaff === index) {
          setNewStaff({ name: '', email: '' });
          setEditIndex(null);
        }
      };
      
    
  return (
    <div>
         <div  className='min-h-screen bg-mybg  w-full flex flex-col items-center text-white  pb-[100px] lg:pb-0  lg:mb-4'> 
            <div className='lg:w-[70%] mt-7'>
                <h1 className='font-semibold lg:text-lg text-md'>Admin Details</h1>
            </div>
            <div className='min-h-[150px] w-[90%] lg:w-[70%] bg-[#808080a3] mt-4  p-2 rounded-md'>
                <h1 className='font-semibold  text-md'>Name</h1>
                <p>Admin User</p>
                <h1 className='font-semibold  text-md'>Email</h1>
                <p>chideraAdmin@gmail.com</p>
                <h1 className='font-semibold  text-md'>Role</h1>
                <p>Super Admin</p>
            </div>

            <div className='min-h-[160px] w-[90%] lg:w-[70%] bg-[#808080a3] mt-4 rounded-lg p-2'>
                <h1 className='font-semibold lg:text-lg text-md'>Change Password</h1>
                <form action="Update password" className=' mt-3 ' onSubmit={(e)=>e.preventDefault()}>
                    <div>
                        <label htmlFor="current password" className='font-semibold text-md'>Current Password</label>
                        <CustomInput type='password' className='w-full text-black outline-text'/>
                    </div>

                    <div className='mt-4'>
                        <label htmlFor="New Password" className='font-semibold text-md'>New Password</label>
                        <CustomInput type='password' className='w-full text-black outline-text'/>
                    </div>

                    <div className='mt-4'>
                        <label htmlFor="Confirm Password" className='font-semibold text-md '>Confirm Password</label>
                        <CustomInput type='password' className='w-full text-black outline-text'/>
                    </div>

                    <div className="relative h-[40px] w-full lg:w-[20%] mt-4 overflow-hidden bg-text rounded group cursor-pointer">
                        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                            <span className="text-white font-semibold text-[1rem]">Change Password</span>
                        </div>

                        <Button
                            type="submit"
                            className="absolute top-[-100%] w-full h-full bg-mybg z-20 transition-all duration-1000 ease-in-out group-hover:top-0"
                        />

                        <Button
                            type="submit"
                            className="absolute top-[100%] w-full h-full bg-mybg z-10 transition-all duration-1000 ease-in-out group-hover:top-0"
                        />
                    </div>
                </form>

            </div>


            <div className='min-h-[150px] w-[90%] lg:w-[70%] bg-[#808080a3] mt-4 rounded-t-lg p-2'>
                <h1 className='font-semibold lg:text-lg text-md'>Staff Management</h1>
                <form action="add staff" className='grid  grid-cols-1  lg:grid-cols-3 gap-4' onSubmit={(e)=>e.preventDefault()}>
                    <div>
                        <label htmlFor="Name">Name</label>
                        <CustomInput className='w-full outline-text text-black' type='text' required  value={newStaff.name} onChange={(e)=>setNewStaff({...newStaff,name:e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="Email">Email</label>
                        <CustomInput className='w-full outline-text text-black' type='email' required value={newStaff.email} onChange={(e)=>setNewStaff({...newStaff,email:e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor='password'>Password</label>
                        <CustomInput className='w-full outline-text'/>
                    </div>

                    
                    <div className="relative h-[40px] w-full lg:w-[30%] col-span-1 mt-4 overflow-hidden bg-text rounded group cursor-pointer" onClick={addStaff}>
                        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                            <span className="text-white font-semibold text-[1rem]">Add Staff</span>
                        </div>

                        <Button
                            type="submit"
                            className="absolute top-[-100%] w-full h-full bg-mybg z-20 transition-all duration-1000 ease-in-out group-hover:top-0"
                        />

                        <Button
                            type="submit"
                            className="absolute top-[100%] w-full h-full bg-mybg z-10 transition-all duration-1000 ease-in-out group-hover:top-0"
                        />
                    </div>
                </form>
            </div>

            <div className='min-h-[150px] w-[90%] lg:w-[70%]  bg-[#808080a3] p-2  rounded-b-lg '>
                <h1 className='font-semibold lg:text-lg text-md'>Staffs</h1>
                <table className=' table-auto  w-full'>
                    <thead className='text-text text-xs sm:text-sm '>
                        <tr>
                            <th className='text-start'>Name</th>
                            <th className='text-start'>Email</th>
                            <th className='text-start'>Role</th>
                            <th className='text-start'>Actions</th>
                        </tr>
                    </thead>
                    <tbody  className='w-full'>
                        {staff.length > 0 ?
                            (staff.map((key,id)=>(
                                <tr key={id} className='px-16 '>
                                    <td  className=''>{key.name}</td>
                                    <td>{key.email}</td>
                                    <td>
                                   
                                    </td>
                                    <td className='flex gap-2.5'>
                                        <Button
                                            onClick={() => edit(id)}
                                            className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
                                            label='Edit'
                                        />
                                         <Button
                                        onClick={() => handleDelete(id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
                                        label='delete'
                                        />

                                    </td>
                                </tr>
                            ))):(
                                <tr>
                                    <td colSpan='5' className='text-center'>No Staff Added Yet</td>
                                </tr>
                            )
                         
                        }
                        
                        
                    </tbody>
                </table>

            </div>
            

         </div>

    </div>
  )
}

export default DashBoard