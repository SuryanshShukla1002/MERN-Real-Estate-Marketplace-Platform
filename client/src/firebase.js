// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-11-dc4a0.firebaseapp.com",
    projectId: "mern-estate-11-dc4a0",
    storageBucket: "mern-estate-11-dc4a0.appspot.com",
    messagingSenderId: "444042931418",
    appId: "1:444042931418:web:6b046c34954f47b39009e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);