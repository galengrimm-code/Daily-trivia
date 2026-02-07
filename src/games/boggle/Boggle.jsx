// src/games/boggle/Boggle.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader, X } from 'lucide-react';
import useBoggleGame from './useBoggleGame';
import useBoggleSwipe from './useBoggleSwipe';
import useBoggleTap from './useBoggleTap';
import BoggleModeSelect from './BoggleModeSelect';
import BoggleReady from './BoggleReady';
import BoggleBoard from './BoggleBoard';
import BoggleTimer from './BoggleTimer';
import BoggleWordList from './BoggleWordList';
import BoggleInputBar from './BoggleInputBar';
import BoggleResults from './BoggleResults';
import BoggleLeaderboard from './BoggleLeaderboard';
import BoggleMultiplayerLobby from './BoggleMultiplayerLobby';
import BoggleMultiplayerResults from './BoggleMultiplayerResults';
import BoggleCountdown from './BoggleCountdown';
import BoggleFloatingPoints from './BoggleFloatingPoints';

export default function Boggle() {
  const navigate = useNavigate();
  const game = useBoggleGame();

  const isPlaying = game.phase === 'playing' || game.phase === 'mp-playing';

  const swipe = useBoggleSwipe({
    board: game.board,
    selectedPath: game.selectedPath,
    setSelectedPath: game.setSelectedPath,
    setCurrentWord: game.setCurrentWord,
    onSubmitWord: game.submitWord,
    onClearSelection: game.clearSelection,
    disabled: !isPlaying || game.inputMode !== 'swipe',
  });

  const { handleTileTap } = useBoggleTap({
    board: game.board,
    selectedPath: game.selectedPath,
    setSelectedPath: game.setSelectedPath,
    setCurrentWord: game.setCurrentWord,
    disabled: !isPlaying || game.inputMode !== 'tap',
  });

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
      <BoggleModeSelect
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
      <BoggleReady
        board={game.board}
        practiceMode={game.practiceMode}
        practiceCode={game.practiceCode}
        inputMode={game.inputMode}
        setInputMode={game.setInputMode}
        onStart={game.startGame}
        onLoadCode={game.loadBoardFromCode}
        onBack={game.backToModeSelect}
      />
    );
  }

  // Active gameplay
  if (isPlaying) {
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
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white px-4 py-2 rounded-full shadow-card">
              <span className="font-bold text-text-main">{game.score} pts</span>
            </div>
            <BoggleTimer timeLeft={game.timeLeft} />
            <div className="bg-white px-4 py-2 rounded-full shadow-card">
              <span className="font-bold text-text-main">{game.foundWords.length} words</span>
            </div>
          </div>

          {/* Message toast */}
          {game.message && (
            <div className="text-center mb-2">
              <span className="bg-gray-100 text-text-main px-4 py-2 rounded-full font-medium text-sm">
                {game.message}
              </span>
            </div>
          )}

          {/* Board */}
          <div className="mb-4">
            <BoggleBoard
              board={game.board}
              selectedPath={game.selectedPath}
              inputMode={game.inputMode}
              disabled={false}
              swipeHandlers={swipe.handlers}
              setTileRef={swipe.setTileRef}
              tileRefs={swipe.tileRefs}
              onTap={handleTileTap}
            />
          </div>

          {/* Input bar */}
          <div className="mb-4">
            <BoggleInputBar
              inputMode={game.inputMode}
              setInputMode={game.setInputMode}
              currentWord={game.currentWord}
              typedWord={game.typedWord}
              setTypedWord={game.setTypedWord}
              onSubmit={game.submitWord}
              onClear={game.clearSelection}
              disabled={false}
            />
          </div>

          {/* Found words */}
          <BoggleWordList
            foundWords={game.foundWords}
            practiceMode={game.practiceMode}
            onRemoveWord={game.practiceMode ? game.removeWord : null}
          />

          {/* Floating points */}
          {game.floatingPoints && (
            <BoggleFloatingPoints
              points={game.floatingPoints.points}
              id={game.floatingPoints.id}
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
        <BoggleLeaderboard
          entries={game.leaderboard}
          currentUserId={game.user?.uid}
          onBack={() => setShowLeaderboard(false)}
        />
      );
    }

    return (
      <BoggleResults
        score={game.score}
        foundWords={game.foundWords}
        possibleWords={game.possibleWords}
        practiceMode={game.practiceMode}
        practiceCode={game.practiceCode}
        dailyResult={game.dailyResult}
        onViewLeaderboard={() => setShowLeaderboard(true)}
        onNewGame={game.newPracticeGame}
        onReplay={game.replayBoard}
        onHome={() => navigate('/')}
      />
    );
  }

  // Multiplayer menu / lobby
  if (game.phase === 'mp-menu' || game.phase === 'mp-lobby') {
    return (
      <BoggleMultiplayerLobby
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
    return <BoggleCountdown count={game.countdown} />;
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
      <BoggleMultiplayerResults
        mpResults={game.mpResults}
        possibleWords={game.possibleWords}
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
