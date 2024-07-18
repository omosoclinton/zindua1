import React from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAObIrcFYoF3q3HlH_puOKWTDxb3Q43gKw",
  authDomain: "smartchama-bc1c0.firebaseapp.com",
  projectId: "smartchama-bc1c0",
  storageBucket: "smartchama-bc1c0.appspot.com",
  messagingSenderId: "375377495299",
  appId: "1:375377495299:web:599ae7814dc9716086d536"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;