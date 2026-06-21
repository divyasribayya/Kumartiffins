// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtDJSua9xhcnj6JzLjuU5dXzrtQU9ytiM",
  authDomain: "kumartiffins-48fa4.firebaseapp.com",
  projectId: "kumartiffins-48fa4",
  storageBucket: "kumartiffins-48fa4.firebasestorage.app",
  messagingSenderId: "360130068717",
  appId: "1:360130068717:web:73956b842be6cced224ce4",
  measurementId: "G-77X8HXG6R5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);