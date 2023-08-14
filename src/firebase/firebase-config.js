// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDHlI1wOO7VFdhkArr1UEW5goc2AFJR9Tg',
  authDomain: 'bookstore-data-fa52a.firebaseapp.com',
  projectId: 'bookstore-data-fa52a',
  storageBucket: 'bookstore-data-fa52a.appspot.com',
  messagingSenderId: '973039247111',
  appId: '1:973039247111:web:b3d6f03ff5be49542dafa2',
  measurementId: 'G-9ZG2Q9E9E2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
