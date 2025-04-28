import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc , deleteDoc, doc} from 'firebase/firestore';
import CustomInput from '../Reusuable Folder/CustomInput';
import Button from '../Reusuable Folder/Button';

function FirebaseData() {
    const carCollectionRef = collection(db, "cars");
    
    const [newCar, setNewCar] = useState('');
    const [newModel, setNewModel] = useState('');
    const [newCondition, setNewCondition] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newAbout, setNewAbout] = useState('');
    const [base64Img, setBase64Img] = useState('');
    const [newFeatures,setNewFeatures] =useState([]);
    const [featureInput,setFeatureInput]=useState('')
    const [description,setDescription]=useState('');
    const [newPerson,setnewPerson]=useState('');
    const [transmission,setTransmisson]=useState('');
    const [fuelType,setFuelType]=useState('');

    // Convert Image to Base64
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result;
            setBase64Img(base64String);
            console.log("Base64 Image:", base64String); // Logs the Base64 string
        };
        reader.readAsDataURL(file);
    };

    //add features 
    const addFeature=()=>{
        if(featureInput.trim() !== ''){
            setNewFeatures([...newFeatures,featureInput.trim()]);
            setFeatureInput('')
        }
    }

    // Save Car Data to Firestore
    const onAddCars = async () => {
        try {
            if (!newCar || !newModel || !newCondition || !newPrice || !base64Img ||!newFeatures || !description || !newPerson ||!transmission ||!fuelType) {
                console.log("Please fill all fields before submitting!");
                return;
            }

            const docRef = await addDoc(carCollectionRef, {
                name: newCar,
                condition: newCondition,
                model: newModel,
                price: newPrice,
                about: newAbout,
                photo: base64Img, // Store Base64 image directly
                features:newFeatures,
                description:description,
                person:newPerson,
                transmission:transmission,
                fuel:fuelType
            });

            console.log("Car added successfully with ID:", docRef.id);
            console.log("Stored Base64 Image:", base64Img); // Log stored image
            console.log('updated')
        } catch (err) {
            console.log("Error adding car:", err);
        }
    };


   

    return (
        <div className='min-h-screen w-full lg:flex lg:flex-col bg-mybg gap-2 lg:items-center lg:justify-center pb-[100px] lg:pb-0 p-4'>
            <form action="handleProductAdding" 
            className='lg:min-h-[80vh] bg-[#808080a3] lg:w-[70%] w-full min-h-[90vh] p-2 '
             onSubmit={(e)=>{e.preventDefault(); onAddCars()}}
             >
                <h1 className='text-center  text-white font-semibold  lg:text-[1.4rem] text-[1.3rem]'>Add Product Form</h1>
                <div className="flex flex-wrap gap-4 ">
                    <div className="w-full md:w-[48%]">
                        <label htmlFor="productName1" className="block mb-1 font-medium text-white">
                            Car Name
                        </label>
                        <CustomInput id="productName1" className="w-full " type='text' required onChange={(e) => setNewCar(e.target.value)}/>
                    </div>

                    <div className="w-full md:w-[48%]">
                        <label htmlFor="productModel" className="block mb-1 font-medium text-white">
                            Car Model
                        </label>
                        <CustomInput id="productModel" className="w-full" type='text' required onChange={(e) => setNewModel(e.target.value)}/>
                    </div>
                    <div className="w-full md:w-[48%]">
                        <label htmlFor="productMiles" className="block mb-1 font-medium text-white">
                            Car Miles
                        </label>
                        <CustomInput id="productMiles" className="w-full" type='text' required onChange={(e) => setNewAbout(e.target.value)} />
                    </div>
                    <div className="w-full md:w-[48%]">
                        <label htmlFor="productPerson" className="block mb-1 font-medium text-white">
                            Persons/car
                        </label>
                        <CustomInput id="productPerson" className="w-full" type='text' required onChange={(e) => setnewPerson(Number(e.target.value))} />
                    </div>
                    <div className="w-full md:w-[48%]">
                        <label htmlFor="productCondition" className="block mb-1 font-medium text-white">
                            Car Condition
                        </label>
                        <CustomInput id="productCondition" className="w-full" type='text' placeholder='New,Used,In Stock'  required onChange={(e) => setNewCondition(e.target.value)}/>
                    </div>

                    <div className="w-full md:w-[48%]">
                        <label htmlFor="productTransmission" className="block mb-1 font-medium text-white">
                            Transmission
                        </label>
                        <CustomInput id="productTransmission" className="w-full" type='text' placeholder='Automatic or Manual' required onChange={(e) => setTransmisson(e.target.value)}/>
                    </div>

                    <div className="w-full md:w-[48%]">
                        <label htmlFor="productFuelType" className="block mb-1 font-medium text-white">
                            Fuel Type
                        </label>
                        <CustomInput id="productFuelTYpe" className="w-full" type='text' placeholder='Petrol,ELectric or Diesel' required onChange={(e) => setFuelType(e.target.value)}/>
                    </div>

                    <div className="w-full md:w-[48%]">
                        <label htmlFor="productPrice" className="block mb-1 font-medium text-white" >
                            Car Price
                        </label>
                        <CustomInput id="productPrice" className="w-full" type='number'  required onChange={(e) => setNewPrice(Number(e.target.value))}/>
                    </div>

                    <div className="w-full md:w-[48%]">
                        <label htmlFor="productImage" className="block mb-1 font-medium text-white">
                            Car Image
                        </label>
                        <CustomInput id="productImage" className="w-full" type='file' accept='image/*' onChange={handleFileChange} required/>
                    </div>
                    <div className="w-full md:w-[48%]">
                        <label htmlFor="productFeature" className="block mb-1 font-medium text-white" >
                            Car Features
                        </label>
                        <div className="flex gap-2">
                            <CustomInput
                                className="w-full "
                                type='text'
                                value={featureInput}
                                onChange={(e) => setFeatureInput(e.target.value)}
                                required
                            />
                            <button type="button"  onClick={addFeature} className="bg-text hover:bg-mybg text-white px-3 py-1 rounded cursor-pointer">
                                Add
                            </button>
                        </div>
                        <ul className="mt-2 list-disc list-inside text-sm text-white">
                            {newFeatures.map((feature, index) => (
                                <li key={index}>{feature} <button onClick={()=>{
                                    setNewFeatures(newFeatures.filter((_,i)=> i !==index));
                                }}>x</button></li>
                            ))}
                        </ul>
                        <p className="text-sm mt-1 text-white">Features added: {newFeatures.length} / 7</p>
                        {newFeatures.length < 7 && (
                            <p className="text-xs text-red-300">You need at least 7 features to submit.</p>
                        )}

                    </div>

                    
                    <div className="w-full ">
                        <label htmlFor="productDescription" className="block mb-1 font-medium text-white">
                            Car Description
                        </label>
                        <CustomInput id="productDescription" className="w-full" type='' textarea={true} onChange={(e) => setDescription(e.target.value)} required/>
                    </div>
                </div>
               
               <div className="relative h-[40px] w-full lg:w-[30%] mt-4 overflow-hidden bg-text rounded group cursor-pointer">
                    {/* Centered Submit Text */}
                    <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                        <span className="text-white font-semibold text-[1rem]">Submit</span>
                    </div>

                    {/* Top Sliding Button */}
                    <Button
                        type="submit"
                        className="absolute top-[-100%] w-full h-full bg-mybg z-20 transition-all duration-1000 ease-in-out group-hover:top-0"
                    />

                    {/* Bottom Sliding Button */}
                    <Button
                        type="submit"
                        className="absolute top-[100%] w-full h-full bg-mybg z-10 transition-all duration-1000 ease-in-out group-hover:top-0"
                    />
                </div>






            </form>
          

            {/* Preview Image Before Upload */}
            {/* {base64Img && <img src={base64Img} alt="Preview"
             style={{ width: "200px", height: "150px" }} />} */}
               {/* <button  onClick={onAddCars}>Enter</button> */}
        </div>
    );
}

export default FirebaseData;
