// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCao9-YuQ034J6564KV6uJqU3fx67bd7EE",
  authDomain: "rout-firebase-integration.firebaseapp.com",
  projectId: "rout-firebase-integration",
  storageBucket: "rout-firebase-integration.appspot.com",
  messagingSenderId: "108960792908",
  appId: "1:108960792908:web:93e71e094b091818eb4fe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default app;