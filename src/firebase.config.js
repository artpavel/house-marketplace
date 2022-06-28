import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDpv8T91qjqUItT4ROT81rY0p5Zpf-iy0U",
  authDomain: "house-marketplace-app-7e39c.firebaseapp.com",
  projectId: "house-marketplace-app-7e39c",
  storageBucket: "house-marketplace-app-7e39c.appspot.com",
  messagingSenderId: "668548818850",
  appId: "1:668548818850:web:79f74ad5aa8b61078ff4fb"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();