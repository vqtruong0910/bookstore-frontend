// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDajBrtwWknO4_tfrKRdT1DfSwTGDB2f70',
  authDomain: 'bookstore-data-786f9.firebaseapp.com',
  projectId: 'bookstore-data-786f9',
  storageBucket: 'bookstore-data-786f9.appspot.com',
  messagingSenderId: '1038374354662',
  appId: '1:1038374354662:web:72ea4a523caaecaa0f0527',
  measurementId: 'G-R6JCN3N5R9',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
