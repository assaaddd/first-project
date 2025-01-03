// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "first-project-c99e5.firebaseapp.com",
  projectId: "first-project-c99e5",
  storageBucket: "first-project-c99e5.firebasestorage.app",
  messagingSenderId: "651373798776",
  appId: "1:651373798776:web:5e99566034445a9edc548d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);