// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV6Lcyd2Hs1QyjCwFj3eGR8THcNMFrUFU",
  authDomain: "iiuc-courses-portal.firebaseapp.com",
  projectId: "iiuc-courses-portal",
storageBucket: "iiuc-courses-portal.appspot.com",
  messagingSenderId: "766788360422",
  appId: "1:766788360422:web:ec20bc389ad81bc7c74327",
  measurementId: "G-EVN2HM9GC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
