// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDTWEXukvmNyUC1mvZ4sM57Yrjd7lNAvx8',
  authDomain: 'react-bookstore-bfd5f.firebaseapp.com',
  projectId: 'react-bookstore-bfd5f',
  storageBucket: 'react-bookstore-bfd5f.appspot.com',
  messagingSenderId: '388909757414',
  appId: '1:388909757414:web:0a65b2eac81852a9411c27',
  measurementId: 'G-ZKNZZTC791',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
