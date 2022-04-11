// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEUu5d7-5HpnGNi37_oQL6S0HcM298WSE",
    authDomain: "genius-car-services-8d69b.firebaseapp.com",
    projectId: "genius-car-services-8d69b",
    storageBucket: "genius-car-services-8d69b.appspot.com",
    messagingSenderId: "658559373677",
    appId: "1:658559373677:web:5d28f90f9daa643e02ca64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;