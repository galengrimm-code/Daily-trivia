// src/pages/Home.jsx
import React from 'react';
import { Flame, Trophy, Share2 } from 'lucide-react';
import { usePlayer } from '../hooks/usePlayer';
import { useLeaderboard } from '../hooks/useLeaderboard';
import { getTodayKey } from '../utils/helpers';
import { checkBogglePlayer } from '../games/boggle/boggleFirebase';
import { checkSpellingBeePlayer } from '../games/spelling-bee/spellingBeeFirebase';
import { checkWordlePlayer } from '../games/wordle/wordleFirebase';
import Header from '../components/Header';
import GameCard from '../components/GameCard';
import Leaderboard from '../components/Leaderboard';

export default function Home() {
  const { user, userProfile, todayScore } = usePlayer();
  const {
    todayLeaderboard,
    boggleLeaderboard,
    spellingBeeLeaderboard,
    wordleLeaderboard,
    loading: lbLoading,
    loadLeaderboards
  } = useLeaderboard();
  const [showLeaderboard, setShowLeaderboard] = React.useState(false);
  const [boggleResult, setBoggleResult] = React.useState(null);
  const [spellingBeeResult, setSpellingBeeResult] = React.useState(null);
  const [wordleResult, setWordleResult] = React.useState(null);

  // Check if user played boggle / spelling bee / wordle today
  React.useEffect(() => {
    if (user) {
      const dateKey = getTodayKey();
      checkBogglePlayer(user.uid, dateKey).then(result => {
        if (result.played) setBoggleResult(result);
      });
      checkSpellingBeePlayer(user.uid, dateKey).then(result => {
        if (result.played) setSpellingBeeResult(result);
      });

      // Check Wordle from Firebase first, then fall back to localStorage
      checkWordlePlayer(user.uid, dateKey).then(result => {
        if (result.played) {
          setWordleResult(result);
        } else {
          // Fall back to localStorage for backwards compatibility
          const wordleDate = localStorage.getItem('wordle_date');
          const wordleState = localStorage.getItem('wordle_state');
          const wordleGuesses = JSON.parse(localStorage.getItem('wordle_guesses') || '[]');
          if (wordleDate === dateKey && (wordleState === 'won' || wordleState === 'lost')) {
            setWordleResult({
              played: true,
              won: wordleState === 'won',
              guesses: wordleGuesses.length
            });
          }
        }
      });
    }
  }, [user]);

  const games = [
    {
      id: 'trivia',
      title: 'Daily Trivia',
      description: '6 questions across 6 categories',
      icon: '\u{1F9E0}',
      path: '/trivia',
      status: todayScore ? 'completed' : 'play',
      score: todayScore ? `${todayScore.score}/${todayScore.totalQuestions}` : null,
    },
    {
      id: 'boggle',
      title: 'Daily Boggle',
      description: 'Find words in the letter grid',
      icon: '\u{1F524}',
      path: '/boggle',
      status: boggleResult ? 'completed' : 'play',
      score: boggleResult ? `${boggleResult.score} pts` : null,
    },
    {
      id: 'spelling-bee',
      title: 'Spelling Bee',
      description: 'How many words can you make?',
      icon: '\u{1F41D}',
      path: '/spelling-bee',
      status: spellingBeeResult ? 'completed' : 'play',
      score: spellingBeeResult ? `${spellingBeeResult.score} pts` : null,
    },
    {
      id: 'wordle',
      title: 'Wordle',
      description: 'Guess the 5-letter word',
      icon: '\u{1F7E9}',
      path: '/wordle',
      status: wordleResult ? 'completed' : 'play',
      score: wordleResult ? (wordleResult.won ? `${wordleResult.guesses}/6` : 'X/6') : null,
    },
    {
      id: 'riddle',
      title: 'Daily Riddle',
      description: 'Coming soon',
      icon: '\u{1F4A1}',
      path: '/riddle',
      status: 'coming-soon',
    },
  ];

  const handleViewLeaderboard = async () => {
    await loadLeaderboards();
    setShowLeaderboard(true);
  };

  const handleShareToday = () => {
    const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const lines = [`Daily Games \u{2022} ${date}`];

    if (todayScore) {
      const pct = Math.round((todayScore.score / todayScore.totalQuestions) * 100);
      lines.push(`\u{1F9E0} Trivia: ${todayScore.score}/${todayScore.totalQuestions} (${pct}%)`);
    }
    if (boggleResult) {
      lines.push(`\u{1F524} Boggle: ${boggleResult.score} pts \u{2022} ${boggleResult.wordCount} words`);
    }
    if (spellingBeeResult) {
      let sbLine = `\u{1F41D} Spelling Bee: ${spellingBeeResult.score} pts`;
      if (spellingBeeResult.pangramCount > 0) {
        sbLine += `\n\u{1F389} PANGRAM${'!'.repeat(Math.min(spellingBeeResult.pangramCount + 2, 5))}`;
      }
      lines.push(sbLine);
    }
    if (wordleResult) {
      const score = wordleResult.won ? `${wordleResult.guesses}/6` : 'X/6';
      lines.push(`\u{1F7E9} Wordle: ${score}`);
    }

    const text = lines.join('\n');

    if (navigator.share) {
      navigator.share({ text }).catch(() => {
        navigator.clipboard.writeText(text);
        alert('Scores copied to clipboard!');
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('Scores copied to clipboard!');
    }
  };

  if (showLeaderboard) {
    return (
      <Leaderboard
        todayEntries={todayLeaderboard}
        boggleEntries={boggleLeaderboard}
        spellingBeeEntries={spellingBeeLeaderboard}
        wordleEntries={wordleLeaderboard}
        currentUserId={user?.uid}
        loading={lbLoading}
        onBack={() => setShowLeaderboard(false)}
      />
    );
  }

  const gamesPlayed = [todayScore, boggleResult, spellingBeeResult, wordleResult].filter(Boolean).length;

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-md mx-auto px-4 pb-8">
        {/* Stats */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-card">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="text-text-main font-semibold">{userProfile?.streak || 0} day streak</span>
          </div>
          <button
            onClick={handleViewLeaderboard}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-card hover:shadow-card-hover transition-shadow"
          >
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-text-main font-semibold">Leaderboard</span>
          </button>
        </div>

        {/* Share Today */}
        {gamesPlayed > 0 && (
          <button
            onClick={handleShareToday}
            className="w-full mb-6 py-3 bg-white rounded-card shadow-card hover:shadow-card-hover transition-shadow flex items-center justify-center gap-2 text-text-main font-semibold"
          >
            <Share2 className="w-5 h-5 text-primary" />
            Share Today's Scores
          </button>
        )}

        {/* Daily Games */}
        <h2 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-3">Daily Games</h2>
        <div className="space-y-3">
          {games.map(game => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </main>
    </div>
  );
}
