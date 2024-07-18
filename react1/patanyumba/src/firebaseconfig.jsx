import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh8x4kKE0VH_MKKhwancjohAuFg0GYEH0",
  authDomain: "patanyumba-50ee7.firebaseapp.com",
  databaseURL: "https://patanyumba-50ee7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "patanyumba-50ee7",
  storageBucket: "patanyumba-50ee7.appspot.com",
  messagingSenderId: "669723089891",
  appId: "1:669723089891:web:75904fff6c64df730b1ed6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;