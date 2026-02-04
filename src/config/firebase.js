// src/config/firebase.js
// ============================================
// FIREBASE SETUP INSTRUCTIONS:
// ============================================
// 1. Go to https://console.firebase.google.com
// 2. Click "Create a project" (name it "family-trivia" or similar)
// 3. Once created, click the web icon </> to add a web app
// 4. Register your app (name it "daily-trivia")
// 5. Copy the firebaseConfig values below
// 6. In the Firebase console, go to "Build" > "Authentication"
//    - Click "Get Started"
//    - Enable "Google" sign-in method
// 7. Go to "Build" > "Firestore Database"
//    - Click "Create database"
//    - Start in "test mode" for now (we'll secure it later)
// ============================================

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, browserLocalPersistence, setPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2EquXAFa4_6VsTs2MbarcAtVwbKWaS4Q",
  authDomain: "daily-trivia-75954.firebaseapp.com",
  projectId: "daily-trivia-75954",
  storageBucket: "daily-trivia-75954.firebasestorage.app",
  messagingSenderId: "146196428161",
  appId: "1:146196428161:web:3135c94987c9fd17c6e480",
  measurementId: "G-6K1G5Y22RM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Set persistence to local (survives browser restarts)
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error('Auth persistence error:', error);
});

export default app;
