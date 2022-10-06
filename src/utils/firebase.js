// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs7-hi8khCJppvnl6lYm6ZF2YW1DY5bjQ",
  authDomain: "react-ecommerce-fiu.firebaseapp.com",
  projectId: "react-ecommerce-fiu",
  storageBucket: "react-ecommerce-fiu.appspot.com",
  messagingSenderId: "409498708350",
  appId: "1:409498708350:web:2fdd3ef943f5757169ab2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Base de datos
export const db = getFirestore(app)