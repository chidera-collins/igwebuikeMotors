import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc , deleteDoc, doc} from 'firebase/firestore';

function FirebaseData() {
    const carCollectionRef = collection(db, "cars");
    
    const [newCar, setNewCar] = useState('');
    const [newModel, setNewModel] = useState('');
    const [newCondition, setNewCondition] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newAbout, setNewAbout] = useState('');
    const [base64Img, setBase64Img] = useState('');

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

    // Save Car Data to Firestore
    const onAddCars = async () => {
        try {
            if (!newCar || !newModel || !newCondition || !newPrice || !base64Img) {
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
            });

            console.log("Car added successfully with ID:", docRef.id);
            console.log("Stored Base64 Image:", base64Img); // Log stored image
            console.log('updated')
        } catch (err) {
            console.log("Error adding car:", err);
        }
    };


    const deleteCars= async ()=>{
        const carDoc = doc(db,"cars",)
        await deleteDoc()
    };

    return (
        <div className='min-h-[100px] w-full flex flex-col gap-2'>
            <input type="text" placeholder='Car Name' onChange={(e) => setNewCar(e.target.value)} />
            <input type="text" placeholder='Condition' onChange={(e) => setNewCondition(e.target.value)} />
            <input type="text" placeholder='Car Model' onChange={(e) => setNewModel(e.target.value)} />
            <input type="text" placeholder='Car About' onChange={(e) => setNewAbout(e.target.value)} />
            <input type="number" placeholder='Car Price' onChange={(e) => setNewPrice(Number(e.target.value))} />
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={onAddCars}>Enter</button>

            {/* Preview Image Before Upload */}
            {base64Img && <img src={base64Img} alt="Preview"
             style={{ width: "200px", height: "150px" }} />}
        </div>
    );
}

export default FirebaseData;
