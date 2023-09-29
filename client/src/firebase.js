// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "amanestate-8db97.firebaseapp.com",
  projectId: "amanestate-8db97",
  storageBucket: "amanestate-8db97.appspot.com",
  messagingSenderId: "1085436676036",
  appId: "1:1085436676036:web:76f4b1537f252ddfb6c691",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
