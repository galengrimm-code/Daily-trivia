// src/pages/Home.jsx
import React from 'react';
import { Flame, Trophy, Share2 } from 'lucide-react';
import { usePlayer } from '../hooks/usePlayer';
import { useLeaderboard } from '../hooks/useLeaderboard';
import { getTodayKey } from '../utils/helpers';
import { checkBogglePlayer } from '../games/boggle/boggleFirebase';
import { checkSpellingBeePlayer } from '../games/spelling-bee/spellingBeeFirebase';
import Header from '../components/Header';
import GameCard from '../components/GameCard';
import Leaderboard from '../components/Leaderboard';

export default function Home() {
  const { user, userProfile, todayScore } = usePlayer();
  const { todayLeaderboard, weeklyLeaderboard, loading: lbLoading, loadLeaderboards } = useLeaderboard();
  const [showLeaderboard, setShowLeaderboard] = React.useState(false);
  const [boggleResult, setBoggleResult] = React.useState(null);
  const [spellingBeeResult, setSpellingBeeResult] = React.useState(null);

  // Check if user played boggle / spelling bee today
  React.useEffect(() => {
    if (user) {
      const dateKey = getTodayKey();
      checkBogglePlayer(user.uid, dateKey).then(result => {
        if (result.played) setBoggleResult(result);
      });
      checkSpellingBeePlayer(user.uid, dateKey).then(result => {
        if (result.played) setSpellingBeeResult(result);
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
      score: spellingBeeResult ? `${spellingBeeResult.score} pts \u{2022} ${spellingBeeResult.rank}` : null,
    },
    {
      id: 'wordle',
      title: 'Wordle',
      description: 'Guess the 5-letter word',
      icon: '\u{1F7E9}',
      path: '/wordle',
      status: 'coming-soon',
    },
    {
      id: 'psych',
      title: 'Psych',
      description: 'Outwit your friends with fake answers',
      icon: '\u{1F914}',
      path: '/psych',
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
      lines.push(`Trivia: ${todayScore.score}/${todayScore.totalQuestions} (${pct}%)`);
    }
    if (boggleResult) {
      lines.push(`Boggle: ${boggleResult.score} pts \u{2022} ${boggleResult.wordCount} words`);
    }
    if (spellingBeeResult) {
      let sbLine = `Spelling Bee: ${spellingBeeResult.score} pts`;
      if (spellingBeeResult.pangramCount > 0) {
        sbLine += ` \u{2022} PANGRAM${spellingBeeResult.pangramCount > 1 ? 'S' : ''}: ${spellingBeeResult.pangramCount}`;
      }
      lines.push(sbLine);
    }

    lines.push('', 'How did you do?');

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
        weeklyEntries={weeklyLeaderboard}
        currentUserId={user?.uid}
        loading={lbLoading}
        onBack={() => setShowLeaderboard(false)}
      />
    );
  }

  const gamesPlayed = [todayScore, boggleResult, spellingBeeResult].filter(Boolean).length;

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
