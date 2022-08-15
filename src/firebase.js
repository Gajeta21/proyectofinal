// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD7FzfOTtdP77oLENmM5MMrvDn4VvhUw0",
  authDomain: "muro-interactivo-d443d.firebaseapp.com",
  projectId: "muro-interactivo-d443d",
  storageBucket: "muro-interactivo-d443d.appspot.com",
  messagingSenderId: "13881107983",
  appId: "1:13881107983:web:a6cf05332ee3b22d53657a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db = getFirestore(app);
