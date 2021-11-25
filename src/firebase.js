import "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBXuV81lan5rbAHCwuEmpKEmaW84zmvZVo",
  authDomain: "fipugram-gas.firebaseapp.com",
  projectId: "fipugram-gas",
  storageBucket: "fipugram-gas.appspot.com",
  messagingSenderId: "61352963684",
  appId: "1:61352963684:web:0b52d95858efbe0978b971",
  measurementId: "G-S3R5JDBV9Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
};
