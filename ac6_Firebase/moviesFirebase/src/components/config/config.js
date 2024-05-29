// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFNIZxVl9afLWSZRvvXoxtYc5WZUpbsww",
  authDomain: "moviesfirebase-158a0.firebaseapp.com",
  projectId: "moviesfirebase-158a0",
  storageBucket: "moviesfirebase-158a0.appspot.com",
  messagingSenderId: "355114894120",
  appId: "1:355114894120:web:49900ecc196a19473e861d",
  measurementId: "G-7QCY6LL4Z4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);