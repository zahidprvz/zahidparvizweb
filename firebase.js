// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClfxkJ4HSzM6eyvg7Ddr3M9xyPa_EcoPU",
  authDomain: "zahidparvizweb.firebaseapp.com",
  projectId: "zahidparvizweb",
  storageBucket: "zahidparvizweb.appspot.com",
  messagingSenderId: "1001317168361",
  appId: "1:1001317168361:web:cf03eb764595fdafccac78",
  measurementId: "G-Z9E933QQMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
