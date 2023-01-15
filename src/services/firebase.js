import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyA6ZYoroQ7_1oHw9KFFd1asSWJZC4kpiBY",
    authDomain: "clone-9259e.firebaseapp.com",
    projectId: "clone-9259e",
    storageBucket: "clone-9259e.appspot.com",
    messagingSenderId: "567048292275",
    appId: "1:567048292275:web:a0425c87727887bd76adc6"
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore;
const auth = getAuth()

export { db, auth ,createUserWithEmailAndPassword, signInWithEmailAndPassword}