// src/games/trivia/triviaUtils.js
import { getShortDateStr } from '../../utils/helpers';

export const getScoreMessage = (score, total) => {
  const percentage = (score / total) * 100;
  if (percentage === 100) return { message: "Perfect score!", emoji: "\u{1F3C6}" };
  if (percentage >= 80) return { message: "Excellent!", emoji: "\u{1F31F}" };
  if (percentage >= 60) return { message: "Great job!", emoji: "\u{1F44F}" };
  if (percentage >= 40) return { message: "Good effort!", emoji: "\u{1F44D}" };
  return { message: "Keep practicing!", emoji: "\u{1F4AA}" };
};

export const shareScore = (score, total, streak) => {
  const dateStr = getShortDateStr();
  const text = `${dateStr}\n\u{1F9E0} Trivia: ${score}/${total}\nStreak: ${streak} days`;

  if (navigator.share) {
    navigator.share({ text }).catch(() => {});
  }
};
