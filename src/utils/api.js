// src/utils/api.js
import { decodeHTML, shuffleArray, seededRandom, getTodaySeed, CATEGORIES } from './helpers';
import { getTodaysQuestionsFromDB, saveTodaysQuestionsToDB, getTriviaSessionToken, updateTriviaSessionToken } from './firestore';
import bibleQuestions from '../data/bibleQuestions';

// Session token for Open Trivia DB (prevents repeat questions)
let cachedToken = null;

// Request a new session token from Open Trivia DB
const requestNewSessionToken = async () => {
  try {
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const data = await response.json();

    if (data.response_code === 0 && data.token) {
      cachedToken = data.token;
      await updateTriviaSessionToken(data.token);
      return data.token;
    }
  } catch (error) {
    console.error('Failed to get session token:', error);
  }
  return null;
};

// Get or create session token
const getSessionToken = async () => {
  // Return cached token if available
  if (cachedToken) return cachedToken;

  // Try to get from Firebase
  const tokenData = await getTriviaSessionToken();
  if (tokenData?.token) {
    cachedToken = tokenData.token;
    return cachedToken;
  }

  // Request new token
  return await requestNewSessionToken();
};

// Fallback questions if API fails
const fallbackQuestions = {
  History: [
    { q: "Which ancient wonder was located in Alexandria, Egypt?", options: ["Lighthouse of Alexandria", "Colossus of Rhodes", "Hanging Gardens", "Temple of Artemis"], correct: 0, fact: "The Lighthouse of Alexandria stood about 330 feet tall!" },
    { q: "Who was the first Roman Emperor?", options: ["Julius Caesar", "Augustus", "Nero", "Caligula"], correct: 1, fact: "Augustus ruled for 41 years, establishing 200 years of peace." },
    { q: "Which year did World War I begin?", options: ["1912", "1914", "1916", "1918"], correct: 1, fact: "WWI was triggered by the assassination of Archduke Franz Ferdinand." },
    { q: "The Great Wall of China was primarily built to protect against which group?", options: ["Japanese", "Mongols", "Koreans", "Indians"], correct: 1, fact: "The wall stretches over 13,000 miles!" },
    { q: "The Renaissance period began in which country?", options: ["France", "England", "Italy", "Spain"], correct: 2, fact: "Florence, Italy is considered the birthplace of the Renaissance." },
  ],
  Geography: [
    { q: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: 1, fact: "The Nile flows through 11 countries and is about 4,132 miles long!" },
    { q: "What is the smallest country in the world?", options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"], correct: 2, fact: "Vatican City is only 0.17 square miles!" },
    { q: "Which desert is the largest in the world?", options: ["Sahara", "Arabian", "Gobi", "Antarctic"], correct: 3, fact: "Antarctica receives less than 8 inches of precipitation per year!" },
    { q: "Which country has the most natural lakes?", options: ["USA", "Russia", "Canada", "Finland"], correct: 2, fact: "Canada has over 60% of the world's lakes!" },
    { q: "Mount Everest is located on the border of which two countries?", options: ["India & China", "Nepal & Tibet/China", "Pakistan & India", "Bhutan & Nepal"], correct: 1, fact: "Everest grows about 4mm taller each year!" },
  ],
  Science: [
    { q: "What is the hardest natural substance on Earth?", options: ["Titanium", "Diamond", "Quartz", "Platinum"], correct: 1, fact: "Diamonds can only be scratched by other diamonds!" },
    { q: "How many bones are in the adult human body?", options: ["186", "206", "226", "256"], correct: 1, fact: "Babies are born with about 270 bones that fuse together!" },
    { q: "What planet is known as the 'Red Planet'?", options: ["Venus", "Jupiter", "Mars", "Saturn"], correct: 2, fact: "Mars appears red because its surface is covered in iron oxide!" },
    { q: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], correct: 2, fact: "Au comes from 'aurum,' the Latin word for gold." },
    { q: "What is the speed of light?", options: ["186,000 mi/sec", "286,000 mi/sec", "386,000 mi/sec", "486,000 mi/sec"], correct: 0, fact: "Light from the Sun takes about 8 minutes to reach Earth!" },
  ],
  Math: [
    { q: "What is the value of Pi to two decimal places?", options: ["3.14", "3.16", "3.12", "3.18"], correct: 0, fact: "Pi has been calculated to over 100 trillion digits!" },
    { q: "What is the square root of 144?", options: ["11", "12", "13", "14"], correct: 1, fact: "144 is called a 'gross' and equals 12 dozen." },
    { q: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], correct: 1, fact: "'Hex' comes from Greek 'hexa' meaning six." },
    { q: "What is 15% of 200?", options: ["20", "25", "30", "35"], correct: 2, fact: "Percentages come from the Latin 'per centum' meaning 'by the hundred.'" },
    { q: "What is the next prime number after 7?", options: ["9", "10", "11", "13"], correct: 2, fact: "Prime numbers have exactly two factors: 1 and themselves." },
  ],
  Animals: [
    { q: "What is the fastest land animal?", options: ["Lion", "Cheetah", "Gazelle", "Horse"], correct: 1, fact: "Cheetahs can reach speeds up to 70 mph!" },
    { q: "What is the largest mammal on Earth?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], correct: 1, fact: "Blue whales can weigh up to 200 tons." },
    { q: "How many legs does an octopus have?", options: ["6", "8", "10", "12"], correct: 1, fact: "Octopuses have 8 legs and 3 hearts!" },
    { q: "What is a group of lions called?", options: ["Herd", "Pack", "Pride", "Flock"], correct: 2, fact: "A pride typically has 10-15 lions." },
    { q: "Which bird is known for its ability to mimic human speech?", options: ["Eagle", "Parrot", "Owl", "Penguin"], correct: 1, fact: "Some parrots can learn over 100 words!" },
  ]
};

// Fetch a question from Open Trivia DB API
export const fetchAPIQuestion = async (category, retryOnEmpty = true) => {
  try {
    const categoryId = CATEGORIES[category]?.id;
    if (!categoryId) return null;

    // Get session token to prevent repeat questions
    const token = await getSessionToken();
    const tokenParam = token ? `&token=${token}` : '';

    const response = await fetch(
      `https://opentdb.com/api.php?amount=1&category=${categoryId}&type=multiple${tokenParam}`
    );
    const data = await response.json();

    // Handle token issues:
    // Code 3 = Token expired (after 6 hours of inactivity)
    // Code 4 = Token exhausted (all questions for category have been used)
    if ((data.response_code === 3 || data.response_code === 4) && retryOnEmpty) {
      console.log(`Token ${data.response_code === 3 ? 'expired' : 'exhausted'}, requesting new token...`);
      cachedToken = null; // Clear stale cached token
      await requestNewSessionToken();
      return fetchAPIQuestion(category, false); // Retry once with new token
    }

    if (data.response_code === 0 && data.results.length > 0) {
      const q = data.results[0];
      const answers = shuffleArray([...q.incorrect_answers, q.correct_answer]);
      const correctIndex = answers.indexOf(q.correct_answer);

      return {
        q: decodeHTML(q.question),
        options: answers.map(decodeHTML),
        correct: correctIndex,
        fact: `Difficulty: ${q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}`
      };
    }
  } catch (error) {
    console.error('API fetch failed:', error);
  }
  return null;
};

// Get a Bible question using seeded random (same question for everyone on same day)
export const getBibleQuestion = (seedOffset = 0) => {
  const seed = getTodaySeed() + seedOffset;
  const index = Math.floor(seededRandom(seed) * bibleQuestions.length);
  return { ...bibleQuestions[index] };
};

// Get a fallback question using seeded random
export const getFallbackQuestion = (category, seedOffset = 0) => {
  const questions = fallbackQuestions[category];
  if (!questions) return null;
  
  const seed = getTodaySeed() + seedOffset;
  const index = Math.floor(seededRandom(seed) * questions.length);
  return { ...questions[index] };
};

// Generate fresh questions (called only when no questions exist for today)
const generateTodaysQuestions = async () => {
  const questions = [];
  const categories = Object.keys(CATEGORIES);

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];

    if (category === 'Bible') {
      // Use local KJV questions for Bible
      questions.push({
        category,
        ...getBibleQuestion(i)
      });
    } else {
      // Try API first, fallback to local
      const apiQuestion = await fetchAPIQuestion(category);
      if (apiQuestion) {
        questions.push({ category, ...apiQuestion });
      } else {
        const fallback = getFallbackQuestion(category, i);
        if (fallback) {
          questions.push({ category, ...fallback });
        }
      }
    }
  }

  return questions;
};

// Load all questions for today (checks Firebase first, generates if needed)
export const loadTodaysQuestions = async () => {
  // Check if questions already exist for today
  const existingQuestions = await getTodaysQuestionsFromDB();
  if (existingQuestions) {
    return existingQuestions;
  }

  // Generate new questions and save to Firebase
  const questions = await generateTodaysQuestions();
  await saveTodaysQuestionsToDB(questions);

  return questions;
};
