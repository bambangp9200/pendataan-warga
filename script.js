// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9mRkENyFalVkaTCaNNmnnzpiSz5Yb9WQ",
  authDomain: "pendataan-warga-4bbaa.firebaseapp.com",
  projectId: "pendataan-warga-4bbaa",
  storageBucket: "pendataan-warga-4bbaa.firebasestorage.app",
  messagingSenderId: "765479321558",
  appId: "1:765479321558:web:5c88d50a3976b1f5426e77",
  measurementId: "G-1FHJC7YPHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
