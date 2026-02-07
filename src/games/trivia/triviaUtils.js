// src/games/trivia/triviaUtils.js

export const getScoreMessage = (score, total) => {
  const percentage = (score / total) * 100;
  if (percentage === 100) return { message: "Perfect score!", emoji: "\u{1F3C6}" };
  if (percentage >= 80) return { message: "Excellent!", emoji: "\u{1F31F}" };
  if (percentage >= 60) return { message: "Great job!", emoji: "\u{1F44F}" };
  if (percentage >= 40) return { message: "Good effort!", emoji: "\u{1F44D}" };
  return { message: "Keep practicing!", emoji: "\u{1F4AA}" };
};

export const shareScore = (score, total, streak) => {
  const text = `\u{1F520} Daily Games - Trivia \u{1F9E0}\nScore: ${score}/${total}\n\u{1F525} Streak: ${streak} days\nCan you beat my score?`;

  if (navigator.share) {
    navigator.share({ text }).catch(() => {
      navigator.clipboard.writeText(text);
    });
    return 'shared';
  } else {
    navigator.clipboard.writeText(text);
    return 'clipboard';
  }
};
