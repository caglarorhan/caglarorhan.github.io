// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzo7i8lgWbQpx3OCCRAiP1FSBPr67MYwg",
    authDomain: "caglarorhan.firebaseapp.com",
    projectId: "caglarorhan",
    storageBucket: "caglarorhan.appspot.com",
    messagingSenderId: "759291429411",
    appId: "1:759291429411:web:d7d6d2a3e6a3fb23d9a796",
    measurementId: "G-BR0WTNJ4NG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);


export { db, auth, analytics, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword };
