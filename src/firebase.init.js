// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0JA33I0TEhKVHYV8vF2HEbAkUqIVeMgM",
  authDomain: "max-warehouse-6c399.firebaseapp.com",
  projectId: "max-warehouse-6c399",
  storageBucket: "max-warehouse-6c399.appspot.com",
  messagingSenderId: "14582744952",
  appId: "1:14582744952:web:3f6a85172421da29046a8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;