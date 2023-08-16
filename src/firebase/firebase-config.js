// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCpZvWExqZRd0nE-_N7JJBLyWyBjqzA-yA',
  authDomain: 'data-bookstore.firebaseapp.com',
  projectId: 'data-bookstore',
  storageBucket: 'data-bookstore.appspot.com',
  messagingSenderId: '165014664923',
  appId: '1:165014664923:web:0ac6ad8f7423c71a2b3efe',
  measurementId: 'G-MJ0150WSSL',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
