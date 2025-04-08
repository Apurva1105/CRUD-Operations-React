// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXykJxEYinFOy40fOc2ZoG9fDm72I6x8k",
  authDomain: "fir-crud-e32d7.firebaseapp.com",
  projectId: "fir-crud-e32d7",
  storageBucket: "fir-crud-e32d7.firebasestorage.app",
  messagingSenderId: "103551859560",
  appId: "1:103551859560:web:aa3dd56d6d0f3d1ca7b4dd",
  measurementId: "G-8J8RJNJTF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)