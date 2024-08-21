// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZLjbcohxYv7IOuzgeWg6O8OnPg5tlE2g",
  authDomain: "netflixgpt-33db8.firebaseapp.com",
  projectId: "netflixgpt-33db8",
  storageBucket: "netflixgpt-33db8.appspot.com",
  messagingSenderId: "177342353014",
  appId: "1:177342353014:web:ebfeb5eda662b8ef885957",
  measurementId: "G-99748JYWY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth(); 