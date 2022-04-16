// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC95iPpjd71pQjpejV5oFY2MU21ggaiLcc",
    authDomain: "genious-car-services-4530c.firebaseapp.com",
    projectId: "genious-car-services-4530c",
    storageBucket: "genious-car-services-4530c.appspot.com",
    messagingSenderId: "1024541565672",
    appId: "1:1024541565672:web:215b75ab55771ed30edf5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;
