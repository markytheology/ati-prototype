// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWWOuPEji-yPhbtOHR21860FNeIu62Avs",
  authDomain: "proto-1-34765.firebaseapp.com",
  projectId: "proto-1-34765",
  storageBucket: "proto-1-34765.appspot.com",
  messagingSenderId: "954592030518",
  appId: "1:954592030518:web:591a79fc5390cafbcd4d97",
  measurementId: "G-MK2ZLCCRKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);