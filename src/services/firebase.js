import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, updateDoc, getDocs, doc, deleteDoc, getDoc, where, setDoc } from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyA6ZYoroQ7_1oHw9KFFd1asSWJZC4kpiBY",
    authDomain: "clone-9259e.firebaseapp.com",
    projectId: "clone-9259e",
    storageBucket: "clone-9259e.appspot.com",
    messagingSenderId: "567048292275",
    appId: "1:567048292275:web:a0425c87727887bd76adc6"
}

// firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);

// const db = firebase.firestore;
const db = getFirestore(app);
const auth = getAuth()

// const update='update'

export {
    db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    collection, addDoc, getDocs, updateDoc, doc, deleteDoc, getDoc, where, updateProfile, setDoc
}