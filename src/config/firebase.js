// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpp7v5h5-zLmpb6fj5HqVX-8EV2R472jQ",
  authDomain: "bullseye-shot.firebaseapp.com",
  projectId: "bullseye-shot",
  storageBucket: "bullseye-shot.appspot.com",
  messagingSenderId: "249265711992",
  appId: "1:249265711992:web:42c8b99212fe70b203768d",
  measurementId: "G-5MX0R431XM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);