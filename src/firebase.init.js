// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQhk_K-Xp18fopahRpv3ohHzuOGlnZTLA",
    authDomain: "ema-jhon-simple-8c6a4.firebaseapp.com",
    projectId: "ema-jhon-simple-8c6a4",
    storageBucket: "ema-jhon-simple-8c6a4.appspot.com",
    messagingSenderId: "679384312239",
    appId: "1:679384312239:web:8bfc38f825f4c87668275a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;
