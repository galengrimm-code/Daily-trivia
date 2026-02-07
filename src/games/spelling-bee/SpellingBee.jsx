// src/games/spelling-bee/SpellingBee.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader, X } from 'lucide-react';
import useSpellingBeeGame from './useSpellingBeeGame';
import SpellingBeeModeSelect from './SpellingBeeModeSelect';
import SpellingBeeReady from './SpellingBeeReady';
import SpellingBeeHoneycomb from './SpellingBeeHoneycomb';
import SpellingBeeInput from './SpellingBeeInput';
import SpellingBeeRankBar from './SpellingBeeRankBar';
import SpellingBeeWordList from './SpellingBeeWordList';
import SpellingBeeResults from './SpellingBeeResults';
import SpellingBeeLeaderboard from './SpellingBeeLeaderboard';
import SpellingBeeMultiplayerLobby from './SpellingBeeMultiplayerLobby';
import SpellingBeeMultiplayerResults from './SpellingBeeMultiplayerResults';
import SpellingBeeCountdown from './SpellingBeeCountdown';
import SpellingBeeFloatingPoints from './SpellingBeeFloatingPoints';

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function SpellingBee() {
  const navigate = useNavigate();
  const game = useSpellingBeeGame();

  const isPlaying = game.phase === 'playing' || game.phase === 'mp-playing';

  const [showLeaderboard, setShowLeaderboard] = React.useState(false);

  // Dictionary loading
  if (game.dictLoading && game.phase !== 'mode-select') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
          <p className="text-text-main text-xl">Loading dictionary...</p>
        </div>
      </div>
    );
  }

  // Mode select
  if (game.phase === 'mode-select') {
    return (
      <SpellingBeeModeSelect
        dailyResult={game.dailyResult}
        dictLoading={game.dictLoading}
        onStartDaily={game.startDaily}
        onStartPractice={game.startPractice}
        onOpenMultiplayer={game.openMultiplayerMenu}
      />
    );
  }

  // Ready screen
  if (game.phase === 'ready') {
    return (
      <SpellingBeeReady
        centerLetter={game.centerLetter}
        outerLetters={game.outerLetters}
        practiceMode={game.practiceMode}
        puzzleCode={game.puzzleCode}
        onStart={game.startGame}
        onLoadCode={game.loadPuzzleFromCode}
        onBack={game.backToModeSelect}
      />
    );
  }

  // Active gameplay
  if (isPlaying) {
    const isUrgent = game.timeLeft <= 30;

    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-md mx-auto">
          {/* Exit button */}
          <div className="flex justify-end mb-2">
            <button
              onClick={() => navigate('/')}
              className="p-2 text-text-muted hover:text-text-main hover:bg-white rounded-full transition-colors"
              aria-label="Exit game"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Top bar: score + timer */}
          <div className="flex items-center justify-between mb-3">
            <div className="bg-white px-4 py-2 rounded-full shadow-card">
              <span className="font-bold text-text-main">{game.score} pts</span>
            </div>
            <div className={`text-2xl font-mono font-bold text-center ${isUrgent ? 'text-error timer-urgent' : 'text-text-main'}`}>
              {'\u{23F1}'} {formatTime(game.timeLeft)}
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-card">
              <span className="font-bold text-text-main">{game.foundWords.length} words</span>
            </div>
          </div>

          {/* Rank bar */}
          <SpellingBeeRankBar score={game.score} maxScore={game.maxScore} />

          {/* Message toast */}
          {game.message && (
            <div className="text-center mb-2">
              <span className="bg-gray-100 text-text-main px-4 py-2 rounded-full font-medium text-sm">
                {game.message}
              </span>
            </div>
          )}

          {/* Honeycomb */}
          <SpellingBeeHoneycomb
            centerLetter={game.centerLetter}
            outerLetters={game.outerLetters}
            onLetterClick={game.addLetter}
            disabled={false}
          />

          {/* Input area */}
          <SpellingBeeInput
            currentInput={game.currentInput}
            centerLetter={game.centerLetter}
            outerLetters={game.outerLetters}
            onAddLetter={game.addLetter}
            onDelete={game.deleteLetter}
            onSubmit={game.submitWord}
            onShuffle={game.shuffleLetters}
            disabled={false}
          />

          {/* Found words */}
          <SpellingBeeWordList
            foundWords={game.foundWords}
            pangrams={game.pangrams}
            practiceMode={game.practiceMode}
            onRemoveWord={game.practiceMode ? game.removeWord : null}
          />

          {/* Floating points */}
          {game.floatingPoints && (
            <SpellingBeeFloatingPoints
              points={game.floatingPoints.points}
              id={game.floatingPoints.id}
              isPangram={game.floatingPoints.isPangram}
              onDone={() => game.setFloatingPoints(null)}
            />
          )}
        </div>
      </div>
    );
  }

  // Results
  if (game.phase === 'finished') {
    if (showLeaderboard) {
      return (
        <SpellingBeeLeaderboard
          entries={game.leaderboard}
          currentUserId={game.user?.uid}
          onBack={() => setShowLeaderboard(false)}
        />
      );
    }

    return (
      <SpellingBeeResults
        score={game.score}
        maxScore={game.maxScore}
        foundWords={game.foundWords}
        validWords={game.validWords}
        pangrams={game.pangrams}
        practiceMode={game.practiceMode}
        puzzleCode={game.puzzleCode}
        dailyResult={game.dailyResult}
        onViewLeaderboard={() => setShowLeaderboard(true)}
        onNewGame={game.newPracticeGame}
        onReplay={game.replayPuzzle}
        onHome={() => navigate('/')}
      />
    );
  }

  // Multiplayer menu / lobby
  if (game.phase === 'mp-menu' || game.phase === 'mp-lobby') {
    return (
      <SpellingBeeMultiplayerLobby
        phase={game.phase}
        lobbies={game.lobbies}
        roomId={game.roomId}
        isHost={game.isHost}
        roomPlayers={game.roomPlayers}
        roomHostName={game.roomHostName}
        onHost={game.hostGame}
        onJoinLobby={game.joinLobby}
        onStart={game.mpHostStart}
        onLeave={game.leaveRoomAction}
        onBack={game.backToModeSelect}
      />
    );
  }

  // Countdown
  if (game.phase === 'mp-countdown') {
    return <SpellingBeeCountdown count={game.countdown} />;
  }

  // Multiplayer waiting
  if (game.phase === 'mp-waiting') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <Loader className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-bold text-text-main mb-2">
            {game.mpSubmitted ? 'Waiting for other players...' : 'Submitting words...'}
          </h2>
          <p className="text-text-muted">
            Your score: {game.score} pts ({game.foundWords.length} words)
          </p>
          {game.mpSubmitted && (
            <button
              onClick={() => game.fetchMpResults()}
              className="mt-4 px-6 py-2 bg-gray-100 text-text-main rounded-button font-semibold hover:bg-gray-200 transition-colors"
            >
              Check Results
            </button>
          )}
        </div>
      </div>
    );
  }

  // Multiplayer results
  if (game.phase === 'mp-results') {
    return (
      <SpellingBeeMultiplayerResults
        mpResults={game.mpResults}
        currentUserId={game.user?.uid}
        isHost={game.isHost}
        onPlayAgain={game.mpPlayAgainAction}
        onLeave={game.leaveRoomAction}
      />
    );
  }

  // Fallback
  return null;
}
