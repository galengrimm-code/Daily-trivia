// scripts/fetchAllQuestions.js
// Run with: node scripts/fetchAllQuestions.js

const fs = require('fs');
const path = require('path');

const CATEGORIES = {
  History: 23,
  Geography: 22,
  Science: 17,
  Math: 19,
  Animals: 27
};

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

async function fetchQuestionsForCategory(categoryName, categoryId, token) {
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
        // Token exhausted - all questions retrieved for this category
        console.log(`  ${categoryName}: Token exhausted after ${questions.length} questions`);
        exhausted = true;
      } else if (data.response_code === 0 && data.results.length > 0) {
        let newCount = 0;
        for (const q of data.results) {
          const questionText = decodeHTML(q.question);
          if (!seenQuestions.has(questionText)) {
            seenQuestions.add(questionText);
            newCount++;

            // Shuffle answers
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

        // Rate limiting - Open Trivia DB allows 1 request per 5 seconds
        await delay(5500);
      } else if (data.response_code === 1) {
        // No results
        console.log(`  ${categoryName}: No more questions available`);
        exhausted = true;
      } else {
        console.log(`  Unexpected response code: ${data.response_code}`);
        exhausted = true;
      }
    } catch (error) {
      console.error(`  Error fetching ${categoryName}:`, error.message);
      await delay(10000); // Wait longer on error
    }
  }

  return questions;
}

async function main() {
  console.log('Starting to fetch all trivia questions...');
  console.log('This will take a while due to API rate limits (5 sec between requests)\n');

  const token = await getSessionToken();
  console.log('Got session token:', token.substring(0, 20) + '...');

  const allQuestions = {};
  let totalQuestions = 0;

  for (const [categoryName, categoryId] of Object.entries(CATEGORIES)) {
    // Reset token before each category to get all questions
    await resetToken(token);
    await delay(5500);

    const questions = await fetchQuestionsForCategory(categoryName, categoryId, token);
    allQuestions[categoryName] = questions;
    totalQuestions += questions.length;

    console.log(`${categoryName}: ${questions.length} questions saved`);
  }

  // Save to file
  const outputPath = path.join(__dirname, '..', 'src', 'data', 'triviaQuestions.json');

  // Ensure directory exists
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(allQuestions, null, 2));

  console.log('\n========================================');
  console.log('SUMMARY');
  console.log('========================================');
  for (const [cat, qs] of Object.entries(allQuestions)) {
    console.log(`${cat}: ${qs.length} questions`);
  }
  console.log(`\nTotal: ${totalQuestions} questions`);
  console.log(`\nSaved to: ${outputPath}`);
}

main().catch(console.error);
