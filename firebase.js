// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCT2HTK5O_OF00pQ8QvrZFUW7Yv4CRcYH0",

  authDomain: "zahidparvizweb1.firebaseapp.com",

  projectId: "zahidparvizweb1",

  storageBucket: "zahidparvizweb1.appspot.com",

  messagingSenderId: "535984254851",

  appId: "1:535984254851:web:955ba869cf80a1364a50b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
