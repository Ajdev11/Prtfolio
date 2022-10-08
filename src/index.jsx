// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG5M_3XZyyovHq_Z0QmmHCK2rcsEehgKA",
  authDomain: "olasenimoses-55e72.firebaseapp.com",
  projectId: "olasenimoses-55e72",
  storageBucket: "olasenimoses-55e72.appspot.com",
  messagingSenderId: "98670623694",
  appId: "1:98670623694:web:7f7812fa62ab10a2d3099f",
  measurementId: "G-7VWPCW1422"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);