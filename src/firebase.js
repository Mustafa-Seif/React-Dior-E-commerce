
import "firebase/auth";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3GpvVvUugT-nJRzMv8ut-M0HGkoo6rE0",
  authDomain: "dior-94635.firebaseapp.com",
  projectId: "dior-94635",
  storageBucket: "dior-94635.appspot.com",
  messagingSenderId: "1014302073165",
  appId: "1:1014302073165:web:8ef3bbac0f77c0aae1d704",
  measurementId: "G-DFTFE83RF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;