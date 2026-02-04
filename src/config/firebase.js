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
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
