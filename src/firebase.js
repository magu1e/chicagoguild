// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Q525YGtRHPs720PftgYjMe9umqUszHI",
  authDomain: "chicagoguild-1a5a7.firebaseapp.com",
  projectId: "chicagoguild-1a5a7",
  storageBucket: "chicagoguild-1a5a7.appspot.com",
  messagingSenderId: "729042072568",
  appId: "1:729042072568:web:89f625a41fa67e20989c0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
