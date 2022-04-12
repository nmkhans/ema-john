import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBpK_sYXdvzd1N9ZpBInwMILNQOmJ9fcaU",
  authDomain: "nmk-ema-jhon.firebaseapp.com",
  projectId: "nmk-ema-jhon",
  storageBucket: "nmk-ema-jhon.appspot.com",
  messagingSenderId: "851698288188",
  appId: "1:851698288188:web:acd527729b3d29e576a539"
};

// Initialize Firebase
const Firebase__App = initializeApp(firebaseConfig);
const auth = getAuth(Firebase__App);

export default auth;