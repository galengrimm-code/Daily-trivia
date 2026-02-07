// src/utils/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, browserLocalPersistence, setPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD2EquXAFa4_6VsTs2MbarcAtVwbKWaS4Q",
  authDomain: "daily-trivia-75954.firebaseapp.com",
  databaseURL: "https://daily-trivia-75954-default-rtdb.firebaseio.com",
  projectId: "daily-trivia-75954",
  storageBucket: "daily-trivia-75954.firebasestorage.app",
  messagingSenderId: "146196428161",
  appId: "1:146196428161:web:3135c94987c9fd17c6e480",
  measurementId: "G-6K1G5Y22RM"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
export const googleProvider = new GoogleAuthProvider();

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error('Auth persistence error:', error);
});

export default app;
