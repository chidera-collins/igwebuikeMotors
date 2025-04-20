import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAypbGCAxeDCHNEvKdaDjINXM9y_LmFoM8",
  authDomain: "igwebuike-motors.firebaseapp.com",
  projectId: "igwebuike-motors",
  storageBucket: "igwebuike-motors.firebasestorage.app",
  messagingSenderId: "433376327341",
  appId: "1:433376327341:web:27925402aca9bdda433824",
  measurementId: "G-4RZ4BHEQ3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//exporting the database
export const db = getFirestore(app);
//exporting the image database
export const imageDb = getStorage(app)
