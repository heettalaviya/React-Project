import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFiTxPeyYqrcOQY5FKBjsA92Nr0PqNohs",
  authDomain: "blog-ccf50.firebaseapp.com",
  projectId: "blog-ccf50",
  storageBucket: "blog-ccf50.firebasestorage.app",
  messagingSenderId: "13648648956",
  appId: "1:13648648956:web:43e46268254f4b84abd579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);