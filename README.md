# Daily Trivia - Family Edition 🧠

A daily trivia game for your family with 5 categories: History, Geography, Science, Bible (KJV), and Math.

## Features

- ✅ **5 Daily Questions** - One from each category
- ✅ **Google Sign-In** - Each family member has their own account
- ✅ **Streak Tracking** - Keep your daily streak alive!
- ✅ **Family Leaderboard** - Today's scores + weekly rankings
- ✅ **KJV Bible Questions** - Verified facts with scripture references
- ✅ **Cross-Device Sync** - Play on any device, scores sync automatically

---

## 🚀 Setup Instructions (15-20 minutes)

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **"Create a project"**
3. Name it `family-trivia` (or anything you like)
4. Disable Google Analytics (optional, not needed)
5. Click **Create project**

### Step 2: Add Web App

1. On the project overview, click the **web icon** `</>`
2. Register app name: `daily-trivia`
3. Check **"Also set up Firebase Hosting"**
4. Click **Register app**
5. **Copy the firebaseConfig object** - you'll need this!

### Step 3: Enable Authentication

1. In Firebase Console, go to **Build → Authentication**
2. Click **Get started**
3. Click **Google** in the sign-in providers
4. Toggle **Enable**
5. Select your email as the project support email
6. Click **Save**

### Step 4: Create Firestore Database

1. Go to **Build → Firestore Database**
2. Click **Create database**
3. Select **Start in test mode** (we'll secure it later)
4. Choose a location close to you
5. Click **Enable**

### Step 5: Add Your Firebase Config

Open `src/config/firebase.js` and replace the placeholder config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",           // ← Paste your values
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Step 6: Set Up Security Rules

1. Go to **Firestore Database → Rules**
2. Replace the rules with the contents of `firestore.rules`
3. Click **Publish**

### Step 7: Install & Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to play!

### Step 8: Deploy to Firebase Hosting (Free!)

```bash
# Install Firebase CLI (one time)
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize hosting (select your project)
firebase init hosting

# Build and deploy
npm run deploy
```

Your app will be live at: `https://YOUR_PROJECT.web.app`

---

## 📁 Project Structure

```
daily-trivia/
├── public/
│   └── index.html
├── src/
│   ├── config/
│   │   └── firebase.js        ← Your Firebase config
│   ├── data/
│   │   └── bibleQuestions.js  ← 30 KJV questions
│   ├── utils/
│   │   ├── api.js             ← Trivia API + fallbacks
│   │   ├── database.js        ← Firebase operations
│   │   └── helpers.js         ← Utility functions
│   ├── App.jsx                ← Main app component
│   ├── index.js
│   └── index.css
├── firebase.json              ← Hosting config
├── firestore.rules            ← Security rules
└── package.json
```

---

## 🗄️ Database Structure

```
Firestore Database:

users/
  └── {userId}
        ├── displayName: "Mom"
        ├── streak: 5
        ├── longestStreak: 12
        ├── totalGames: 30
        ├── totalCorrect: 127
        ├── lastPlayed: "2025-02-03"
        └── createdAt: Timestamp

scores/
  └── {userId}_{date}
        ├── userId: "abc123"
        ├── displayName: "Mom"
        ├── score: 4
        ├── totalQuestions: 5
        ├── date: "2025-02-03"
        └── timestamp: Timestamp
```

---

## 🔧 Customization

### Add More Bible Questions

Edit `src/data/bibleQuestions.js` - follow the existing format:

```javascript
{
  q: "Your question here?",
  options: ["A", "B", "C", "D"],
  correct: 0,  // Index of correct answer (0-3)
  fact: "Scripture reference - 'Exact KJV quote here.'"
}
```

### Change Categories

Edit `src/utils/helpers.js`:

```javascript
export const CATEGORIES = {
  History: { id: 23, color: 'bg-amber-500', icon: '📜' },
  // Add or modify categories here
  // See: https://opentdb.com/api_category.php for API category IDs
};
```

---

## 💰 Cost

**Free!** Firebase free tier includes:
- 50K auth operations/month
- 1GB Firestore storage
- 10GB hosting bandwidth
- Perfect for family use

---

## 🆘 Troubleshooting

**"Permission denied" error:**
- Make sure you've published the Firestore security rules
- Check that Authentication is enabled

**Questions not loading:**
- The Open Trivia DB API might be rate-limited
- Fallback questions will be used automatically

**Can't sign in:**
- Verify Google sign-in is enabled in Firebase Console
- Check your Firebase config values are correct

---

Enjoy playing trivia with your family! 🎉
