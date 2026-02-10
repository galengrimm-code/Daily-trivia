// src/utils/api.js
import { seededRandom, getTodaySeed, CATEGORIES } from './helpers';
import { getTodaysQuestionsFromDB, saveTodaysQuestionsToDB, getRecentQuestionHashes, addQuestionHash } from './firestore';
import questions from '../data/questions';

// Helper to get questions filtered by pool
const getDailyQuestions = (category) => {
  return (questions[category] || []).filter(q => q.pool === 'daily');
};

// Simple hash function for question text
const hashQuestion = (questionText) => {
  let hash = 0;
  const str = questionText.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString(36);
};

// Fallback questions (used when local pool is exhausted)
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
    { q: "What is 7 x 8?", options: ["54", "56", "58", "64"], correct: 1, fact: "Multiplication tables were used in ancient Babylon over 4,000 years ago!" },
    { q: "What is the sum of angles in a triangle?", options: ["90°", "180°", "270°", "360°"], correct: 1, fact: "This works for any triangle, no matter how stretched!" },
    { q: "What is 25% of 80?", options: ["15", "20", "25", "30"], correct: 1, fact: "25% is the same as dividing by 4." },
    { q: "How many degrees in a right angle?", options: ["45°", "90°", "180°", "360°"], correct: 1, fact: "Right angles are found everywhere in architecture and design." },
    { q: "What is 2 to the power of 5?", options: ["16", "25", "32", "64"], correct: 2, fact: "Powers of 2 are fundamental in computer science!" },
  ],
  Animals: [
    { q: "What is the fastest land animal?", options: ["Lion", "Cheetah", "Gazelle", "Horse"], correct: 1, fact: "Cheetahs can reach speeds up to 70 mph!" },
    { q: "What is the largest mammal on Earth?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], correct: 1, fact: "Blue whales can weigh up to 200 tons." },
    { q: "How many legs does an octopus have?", options: ["6", "8", "10", "12"], correct: 1, fact: "Octopuses have 8 legs and 3 hearts!" },
    { q: "What is a group of lions called?", options: ["Herd", "Pack", "Pride", "Flock"], correct: 2, fact: "A pride typically has 10-15 lions." },
    { q: "Which bird is known for its ability to mimic human speech?", options: ["Eagle", "Parrot", "Owl", "Penguin"], correct: 1, fact: "Some parrots can learn over 100 words!" },
  ]
};

// Get a question from the local pool that hasn't been used recently
const getLocalQuestion = (category, usedHashes, seed) => {
  const pool = getDailyQuestions(category);

  if (pool.length === 0) {
    console.log(`No local questions for ${category}, using fallback`);
    return null;
  }

  // Shuffle the pool using seeded random for consistent daily selection
  const shuffledIndices = pool.map((_, i) => i);
  for (let i = shuffledIndices.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i) * (i + 1));
    [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
  }

  // Find the first unused question
  for (const idx of shuffledIndices) {
    const question = pool[idx];
    const hash = hashQuestion(question.q);

    if (!usedHashes[hash]) {
      const difficulty = question.difficulty || 'medium';
      return {
        q: question.q,
        options: question.options,
        correct: question.correct,
        fact: `Difficulty: ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`,
        _hash: hash
      };
    }
  }

  // All questions used - return null to trigger fallback
  console.log(`All ${pool.length} questions exhausted for ${category}`);
  return null;
};

// Get a Bible question that hasn't been used recently
export const getBibleQuestion = (usedHashes, seed) => {
  const biblePool = getDailyQuestions('Bible');

  // Shuffle the pool using seeded random for consistent daily selection
  const shuffledIndices = biblePool.map((_, i) => i);
  for (let i = shuffledIndices.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i) * (i + 1));
    [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
  }

  // Find the first unused question
  for (const idx of shuffledIndices) {
    const question = biblePool[idx];
    const hash = hashQuestion(question.q);

    if (!usedHashes[hash]) {
      return {
        q: question.q,
        options: question.options,
        correct: question.correct,
        fact: question.fact,
        _hash: hash
      };
    }
  }

  // All questions used - return a random one (will be a repeat)
  console.log(`All ${biblePool.length} Bible questions exhausted`);
  const index = Math.floor(seededRandom(seed) * biblePool.length);
  const question = biblePool[index];
  return {
    q: question.q,
    options: question.options,
    correct: question.correct,
    fact: question.fact,
    _hash: hashQuestion(question.q)
  };
};

// Get a fallback question using seeded random
export const getFallbackQuestion = (category, usedHashes, seed) => {
  const questions = fallbackQuestions[category];
  if (!questions) return null;

  // Try to find an unused fallback question
  const shuffledIndices = questions.map((_, i) => i);
  for (let i = shuffledIndices.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i + 1000) * (i + 1));
    [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
  }

  for (const idx of shuffledIndices) {
    const question = questions[idx];
    const hash = hashQuestion(question.q);

    if (!usedHashes[hash]) {
      return { ...question, _hash: hash };
    }
  }

  // If all fallbacks used, just return the first one (will be a repeat)
  const question = questions[Math.floor(seededRandom(seed) * questions.length)];
  return { ...question, _hash: hashQuestion(question.q) };
};

// Generate fresh questions (called only when no questions exist for today)
const generateTodaysQuestions = async () => {
  const todaysQuestions = [];
  const categories = Object.keys(CATEGORIES);
  const seed = getTodaySeed();

  // Load recently used question hashes to avoid repeats
  const usedHashes = await getRecentQuestionHashes();
  console.log(`Loaded ${Object.keys(usedHashes).length} recently used question hashes`);

  // Log pool sizes
  for (const cat of categories) {
    const pool = getDailyQuestions(cat);
    const poolSize = pool.length;
    const usedCount = Object.keys(usedHashes).filter(h => {
      return pool.some(q => hashQuestion(q.q) === h);
    }).length;
    console.log(`${cat}: ${poolSize} questions (${poolSize - usedCount} unused)`);
  }

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const categorySeed = seed + i * 100;

    if (category === 'Bible') {
      // Use local KJV questions for Bible (now with repeat prevention)
      const bibleQ = getBibleQuestion(usedHashes, categorySeed);
      todaysQuestions.push({
        category,
        ...bibleQ
      });
      // Add to usedHashes so we don't repeat within this generation
      if (bibleQ._hash) {
        usedHashes[bibleQ._hash] = Date.now();
      }
    } else {
      // Try local pool first
      let question = getLocalQuestion(category, usedHashes, categorySeed);

      // Fall back to fallback questions if local pool exhausted
      if (!question) {
        question = getFallbackQuestion(category, usedHashes, categorySeed);
      }

      if (question) {
        todaysQuestions.push({ category, ...question });
        // Add to usedHashes so we don't repeat within this generation
        if (question._hash) {
          usedHashes[question._hash] = Date.now();
        }
      }
    }
  }

  // Save all new question hashes to Firebase for future duplicate checking
  for (const q of todaysQuestions) {
    if (q._hash) {
      await addQuestionHash(q._hash);
    }
  }

  return todaysQuestions;
};

// Load all questions for today (checks Firebase first, generates if needed)
export const loadTodaysQuestions = async () => {
  // Check if questions already exist for today
  const existingQuestions = await getTodaysQuestionsFromDB();
  if (existingQuestions) {
    return existingQuestions;
  }

  // Generate new questions and save to Firebase
  const generatedQuestions = await generateTodaysQuestions();
  await saveTodaysQuestionsToDB(generatedQuestions);

  return generatedQuestions;
};
