// scripts/fetchMoreQuestions.js
// Fetch additional questions from related categories

const fs = require('fs');
const path = require('path');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const decodeHTML = (str) => {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&eacute;/g, 'é')
    .replace(/&ouml;/g, 'ö')
    .replace(/&uuml;/g, 'ü')
    .replace(/&auml;/g, 'ä')
    .replace(/&ntilde;/g, 'ñ')
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&lsquo;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&hellip;/g, '...')
    .replace(/&ndash;/g, '-')
    .replace(/&mdash;/g, '—')
    .replace(/&deg;/g, '°')
    .replace(/&shy;/g, '')
    .replace(/&#\d+;/g, (match) => {
      const code = parseInt(match.slice(2, -1));
      return String.fromCharCode(code);
    });
};

async function getSessionToken() {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await response.json();
  if (data.response_code === 0) {
    return data.token;
  }
  throw new Error('Failed to get session token');
}

async function resetToken(token) {
  const response = await fetch(`https://opentdb.com/api_token.php?command=reset&token=${token}`);
  const data = await response.json();
  return data.response_code === 0;
}

async function fetchAllFromCategory(categoryId, categoryName, token) {
  const questions = [];
  const seenQuestions = new Set();
  let exhausted = false;
  let batch = 0;

  console.log(`\nFetching ${categoryName} (ID: ${categoryId})...`);

  while (!exhausted) {
    try {
      const url = `https://opentdb.com/api.php?amount=50&category=${categoryId}&type=multiple&token=${token}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.response_code === 4) {
        console.log(`  ${categoryName}: Token exhausted after ${questions.length} questions`);
        exhausted = true;
      } else if (data.response_code === 0 && data.results.length > 0) {
        let newCount = 0;
        for (const q of data.results) {
          const questionText = decodeHTML(q.question);
          if (!seenQuestions.has(questionText)) {
            seenQuestions.add(questionText);
            newCount++;

            const allAnswers = [...q.incorrect_answers, q.correct_answer].map(decodeHTML);
            const shuffled = allAnswers.sort(() => Math.random() - 0.5);
            const correctIndex = shuffled.indexOf(decodeHTML(q.correct_answer));

            questions.push({
              q: questionText,
              options: shuffled,
              correct: correctIndex,
              difficulty: q.difficulty
            });
          }
        }
        batch++;
        console.log(`  Batch ${batch}: +${newCount} new (${questions.length} total)`);
        await delay(5500);
      } else {
        console.log(`  ${categoryName}: No more questions (code ${data.response_code})`);
        exhausted = true;
      }
    } catch (error) {
      console.error(`  Error:`, error.message);
      await delay(10000);
    }
  }

  return questions;
}

async function main() {
  console.log('Fetching additional questions from API...\n');

  const token = await getSessionToken();
  console.log('Got session token');

  // Categories to fetch
  const categoriesToFetch = [
    { id: 18, name: 'Science: Computers', target: 'Science' },
    { id: 19, name: 'Science: Mathematics', target: 'Math' },
    { id: 30, name: 'Science: Gadgets', target: 'Science' },
  ];

  const results = {};

  for (const cat of categoriesToFetch) {
    await resetToken(token);
    await delay(5500);

    const questions = await fetchAllFromCategory(cat.id, cat.name, token);

    if (!results[cat.target]) {
      results[cat.target] = [];
    }
    results[cat.target] = results[cat.target].concat(questions);

    console.log(`${cat.name}: ${questions.length} questions -> ${cat.target}`);
  }

  // Load existing data
  const dataPath = path.join(__dirname, '..', 'src', 'data', 'triviaQuestions.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  // Merge new questions (avoiding duplicates)
  for (const [category, newQuestions] of Object.entries(results)) {
    const existing = data[category] || [];
    const existingTexts = new Set(existing.map(q => q.q.toLowerCase()));

    let added = 0;
    for (const q of newQuestions) {
      if (!existingTexts.has(q.q.toLowerCase())) {
        existing.push(q);
        existingTexts.add(q.q.toLowerCase());
        added++;
      }
    }

    data[category] = existing;
    console.log(`\n${category}: Added ${added} new questions (total: ${existing.length})`);
  }

  // Save
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

  console.log('\n========================================');
  console.log('FINAL COUNTS');
  console.log('========================================');
  for (const [cat, qs] of Object.entries(data)) {
    console.log(`${cat}: ${qs.length} questions`);
  }
}

main().catch(console.error);
