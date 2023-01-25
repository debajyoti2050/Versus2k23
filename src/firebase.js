// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYt-T02ACcR6m1tWZhBGH-yjlC1b1KG_g",
  authDomain: "versus2k23.firebaseapp.com",
  projectId: "versus2k23",
  storageBucket: "versus2k23.appspot.com",
  messagingSenderId: "511308217236",
  appId: "1:511308217236:web:f65f5c8d02e00e5aff2d81",
  measurementId: "G-06D9DE5K2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);