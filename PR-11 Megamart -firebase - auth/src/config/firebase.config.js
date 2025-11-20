// config/firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Replace these values with your actual Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyCLmYQ8Fk77UR3OqSUlV5M4UVqnUETpguI",
  authDomain: "megamart-308e4.firebaseapp.com",
  projectId: "megamart-308e4",
  storageBucket: "megamart-308e4.appspot.com", // typically .appspot.com
  messagingSenderId: "305502953747",
  appId: "1:305502953747:web:dba0ac65088ff501b53ae6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);