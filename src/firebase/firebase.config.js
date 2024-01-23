
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkolXb9xaQfqSS9M1o9PGDYd15Fa_2GeM",
    authDomain: "universalsurvey-b3ad3.firebaseapp.com",
    projectId: "universalsurvey-b3ad3",
    storageBucket: "universalsurvey-b3ad3.appspot.com",
    messagingSenderId: "891875308503",
    appId: "1:891875308503:web:dbeafcf1e5e8ae8ed11192"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;