// src/games/spelling-bee/useSpellingBeeGame.js
import { useState, useRef, useCallback, useEffect } from 'react';
import { usePlayer } from '../../hooks/usePlayer';
import { getTodayKey } from '../../utils/helpers';
import useDictionary from '../boggle/useDictionary';
import { GAME_DURATION, getSpellingBeeScore, getCurrentRank } from './spellingBeeConstants';
import {
  generateDailyPuzzle, generateSeededPuzzle, generatePracticeCode
} from './spellingBeeUtils';
import {
  checkSpellingBeePlayer, saveSpellingBeeScore, getSpellingBeeLeaderboard,
  createRoom, joinRoom, startRoom, submitWords, getResults,
  leaveRoom as fbLeaveRoom, playAgain as fbPlayAgain,
  startRoomListener, startLobbyListener
} from './spellingBeeFirebase';

export default function useSpellingBeeGame() {
  const { user } = usePlayer();
  const { dictionary, loading: dictLoading } = useDictionary();

  // Game phase
  const [phase, setPhase] = useState('mode-select');

  // Puzzle state
  const [centerLetter, setCenterLetter] = useState('');
  const [outerLetters, setOuterLetters] = useState([]);
  const [validWords, setValidWords] = useState([]);
  const [pangrams, setPangrams] = useState(new Set());
  const [maxScore, setMaxScore] = useState(0);

  // Game state
  const [foundWords, setFoundWords] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);

  // Input state
  const [currentInput, setCurrentInput] = useState('');

  // Toast messages
  const [message, setMessage] = useState('');
  const messageTimeout = useRef(null);

  // Mode state
  const [practiceMode, setPracticeMode] = useState(false);
  const [puzzleCode, setPuzzleCode] = useState(null);
  const [dailyResult, setDailyResult] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);

  // Multiplayer state
  const [roomId, setRoomId] = useState(null);
  const [isHost, setIsHost] = useState(false);
  const [roomPlayers, setRoomPlayers] = useState({});
  const [roomStatus, setRoomStatus] = useState(null);
  const [roomHostName, setRoomHostName] = useState('');
  const [mpResults, setMpResults] = useState(null);
  const [mpSubmitted, setMpSubmitted] = useState(false);
  const [lobbies, setLobbies] = useState([]);
  const [countdown, setCountdown] = useState(null);

  // Refs for timer/listeners
  const timerRef = useRef(null);
  const endTimeRef = useRef(null);
  const roomListenerRef = useRef(null);
  const lobbyListenerRef = useRef(null);
  const countdownRef = useRef(null);
  const handleRoomUpdateRef = useRef(null);

  // Floating points
  const [floatingPoints, setFloatingPoints] = useState(null);

  // Show toast message
  const showMessage = useCallback((msg) => {
    setMessage(msg);
    if (messageTimeout.current) clearTimeout(messageTimeout.current);
    if (msg) {
      messageTimeout.current = setTimeout(() => setMessage(''), 1500);
    }
  }, []);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (countdownRef.current) clearInterval(countdownRef.current);
      if (roomListenerRef.current) roomListenerRef.current();
      if (lobbyListenerRef.current) lobbyListenerRef.current();
    };
  }, []);

  // Helper to load puzzle into state
  const loadPuzzle = useCallback((puzzle) => {
    setCenterLetter(puzzle.centerLetter);
    setOuterLetters(puzzle.outerLetters);
    setValidWords(puzzle.validWords);
    setPangrams(new Set(puzzle.pangrams));
    setMaxScore(puzzle.maxScore);
  }, []);

  // ============================================
  // DAILY MODE
  // ============================================

  const startDaily = useCallback(async () => {
    if (!dictionary) return;
    const dateKey = getTodayKey();
    const puzzle = generateDailyPuzzle(dateKey, dictionary);
    loadPuzzle(puzzle);
    setPracticeMode(false);
    setPuzzleCode(null);

    const check = await checkSpellingBeePlayer(user.uid, dateKey);
    if (check.played) {
      setDailyResult(check);
      setScore(check.score);
      setFoundWords([]);
      setPhase('finished');
      const lb = await getSpellingBeeLeaderboard(dateKey);
      setLeaderboard(lb);
    } else {
      setDailyResult(null);
      setPhase('ready');
    }
  }, [user, dictionary, loadPuzzle]);

  // ============================================
  // PRACTICE MODE
  // ============================================

  const startPractice = useCallback((code) => {
    if (!dictionary) return;
    setPracticeMode(true);
    setDailyResult(null);

    let useCode;
    if (code && code >= 10000 && code <= 99999) {
      useCode = code;
    } else {
      useCode = generatePracticeCode();
    }

    const puzzle = generateSeededPuzzle(useCode, dictionary);
    loadPuzzle(puzzle);
    setPuzzleCode(useCode);
    setPhase('ready');
  }, [dictionary, loadPuzzle]);

  const loadPuzzleFromCode = useCallback((code) => {
    if (!dictionary) return;
    const num = parseInt(code);
    if (num >= 10000 && num <= 99999) {
      const puzzle = generateSeededPuzzle(num, dictionary);
      loadPuzzle(puzzle);
      setPuzzleCode(num);
    } else {
      showMessage('Enter a 5-digit code');
    }
  }, [dictionary, loadPuzzle, showMessage]);

  // ============================================
  // GAME TIMER
  // ============================================

  const startGame = useCallback(() => {
    setFoundWords([]);
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setCurrentInput('');
    setMessage('');

    endTimeRef.current = Date.now() + GAME_DURATION * 1000;

    timerRef.current = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((endTimeRef.current - Date.now()) / 1000));
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }, 1000);

    setPhase('playing');
  }, []);

  // End game when timer hits 0
  useEffect(() => {
    if (timeLeft <= 0 && (phase === 'playing' || phase === 'mp-playing')) {
      if (phase === 'playing') {
        endGame();
      } else {
        endMultiplayerGame();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, phase]);

  const endGame = useCallback(async () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setCurrentInput('');
    setPhase('finished');

    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);

    if (!practiceMode) {
      const dateKey = getTodayKey();
      const rank = getCurrentRank(score, maxScore);
      const pangramCount = foundWords.filter(w => pangrams.has(w)).length;
      await saveSpellingBeeScore(user.uid, user.displayName, dateKey, score, foundWords.length, rank.name, pangramCount);
      const lb = await getSpellingBeeLeaderboard(dateKey);
      setLeaderboard(lb);
    }
  }, [practiceMode, user, score, maxScore, foundWords, pangrams]);

  // ============================================
  // INPUT ACTIONS
  // ============================================

  const addLetter = useCallback((letter) => {
    const l = letter.toLowerCase();
    const allLetters = new Set([centerLetter, ...outerLetters]);
    if (allLetters.has(l)) {
      setCurrentInput(prev => prev + l);
    }
  }, [centerLetter, outerLetters]);

  const deleteLetter = useCallback(() => {
    setCurrentInput(prev => prev.slice(0, -1));
  }, []);

  const shuffleLetters = useCallback(() => {
    setOuterLetters(prev => {
      const shuffled = [...prev];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  }, []);

  // ============================================
  // WORD SUBMISSION
  // ============================================

  const submitWord = useCallback(() => {
    const word = currentInput.toLowerCase();

    if (word.length < 4) {
      showMessage('Too short');
      return;
    }

    if (!word.includes(centerLetter)) {
      showMessage('Missing center letter');
      setCurrentInput('');
      return;
    }

    const letterSet = new Set([centerLetter, ...outerLetters]);
    for (const ch of word) {
      if (!letterSet.has(ch)) {
        showMessage('Bad letter');
        setCurrentInput('');
        return;
      }
    }

    if (foundWords.includes(word)) {
      showMessage('Already found!');
      setCurrentInput('');
      return;
    }

    if (!dictionary || !dictionary.has(word)) {
      showMessage('Not in word list');
      setCurrentInput('');
      return;
    }

    // Valid word!
    const isPangram = pangrams.has(word);
    const wordScore = getSpellingBeeScore(word, isPangram);

    setFoundWords(prev => [...prev, word]);
    setScore(prev => prev + wordScore);
    setFloatingPoints({ points: wordScore, id: Date.now(), isPangram });
    setCurrentInput('');

    if (isPangram) {
      showMessage('Pangram! \u{1F41D}');
    }
  }, [currentInput, centerLetter, outerLetters, foundWords, dictionary, pangrams, showMessage]);

  const removeWord = useCallback((word) => {
    const isPangram = pangrams.has(word);
    setFoundWords(prev => prev.filter(w => w !== word));
    setScore(prev => prev - getSpellingBeeScore(word, isPangram));
  }, [pangrams]);

  // ============================================
  // MULTIPLAYER
  // ============================================

  const stopAllListeners = useCallback(() => {
    if (roomListenerRef.current) {
      roomListenerRef.current();
      roomListenerRef.current = null;
    }
    if (lobbyListenerRef.current) {
      lobbyListenerRef.current();
      lobbyListenerRef.current = null;
    }
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }
  }, []);

  const fetchMpResults = useCallback(async (rid) => {
    const result = await getResults(rid || roomId);
    if (result.error) {
      showMessage(result.error);
      return;
    }
    if (!result.duplicates) result.duplicates = [];
    if (!result.players) result.players = [];
    setMpResults(result);
    setPhase('mp-results');
  }, [roomId, showMessage]);

  const beginMultiplayerPlay = useCallback(() => {
    setFoundWords([]);
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setCurrentInput('');

    endTimeRef.current = Date.now() + GAME_DURATION * 1000;

    timerRef.current = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((endTimeRef.current - Date.now()) / 1000));
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }, 1000);

    setPhase('mp-playing');
  }, []);

  const startMultiplayerCountdown = useCallback((mpStartTime) => {
    if (!mpStartTime) {
      beginMultiplayerPlay();
      return;
    }

    const initialRemaining = Math.ceil((mpStartTime - Date.now()) / 1000);
    if (initialRemaining <= 0) {
      beginMultiplayerPlay();
      return;
    }

    setCountdown(initialRemaining);
    setPhase('mp-countdown');

    countdownRef.current = setInterval(() => {
      const remaining = Math.ceil((mpStartTime - Date.now()) / 1000);
      if (remaining <= 0) {
        clearInterval(countdownRef.current);
        countdownRef.current = null;
        setCountdown(null);
        beginMultiplayerPlay();
      } else {
        setCountdown(remaining);
      }
    }, 250);
  }, [beginMultiplayerPlay]);

  // Room update handler — stored in ref
  handleRoomUpdateRef.current = (room) => {
    if (room.deleted) {
      showMessage('Room closed');
      stopAllListeners();
      setPhase('mode-select');
      return;
    }

    const players = room.players || {};
    setRoomPlayers(players);
    setRoomStatus(room.status);
    setRoomHostName(room.hostName || 'Unknown');

    if (room.status === 'playing') {
      setPhase(prev => {
        if (prev === 'mp-lobby') {
          startMultiplayerCountdown(room.startTime);
          return 'mp-countdown';
        }
        return prev;
      });
    }

    if (room.status === 'finished') {
      setPhase(prev => {
        if (prev === 'mp-waiting' || prev === 'mp-playing') {
          fetchMpResults(room.roomId);
          return prev;
        }
        return prev;
      });
    }

    if (room.status === 'waiting') {
      setPhase(prev => {
        if (prev === 'mp-results') {
          if (dictionary) {
            const puzzle = generateSeededPuzzle(room.puzzleCode, dictionary);
            loadPuzzle(puzzle);
          }
          setPuzzleCode(room.puzzleCode);
          setFoundWords([]);
          setScore(0);
          setMpSubmitted(false);
          setMpResults(null);
          return 'mp-lobby';
        }
        return prev;
      });
    }
  };

  const roomUpdateCallback = useCallback((room) => {
    handleRoomUpdateRef.current?.(room);
  }, []);

  const attachRoomListener = useCallback((rid) => {
    roomListenerRef.current = startRoomListener(rid, roomUpdateCallback);
  }, [roomUpdateCallback]);

  const openMultiplayerMenu = useCallback(() => {
    setPhase('mp-menu');
    lobbyListenerRef.current = startLobbyListener((newLobbies) => {
      setLobbies(newLobbies);
    });
  }, []);

  const hostGame = useCallback(async () => {
    if (!dictionary) return;
    if (lobbyListenerRef.current) {
      lobbyListenerRef.current();
      lobbyListenerRef.current = null;
    }

    const code = generatePracticeCode();
    const puzzle = generateSeededPuzzle(code, dictionary);
    loadPuzzle(puzzle);
    setPuzzleCode(code);

    const result = await createRoom(user.uid, user.displayName, code);
    if (result.error) {
      showMessage(result.error);
      return;
    }

    setRoomId(result.roomId);
    setIsHost(true);
    setRoomPlayers({ [user.uid]: { displayName: user.displayName } });
    setRoomHostName(user.displayName);
    setRoomStatus('waiting');
    setPhase('mp-lobby');

    attachRoomListener(result.roomId);
  }, [user, dictionary, showMessage, attachRoomListener, loadPuzzle]);

  const joinLobby = useCallback(async (lobbyRoomId) => {
    if (!dictionary) return;
    if (lobbyListenerRef.current) {
      lobbyListenerRef.current();
      lobbyListenerRef.current = null;
    }

    const result = await joinRoom(lobbyRoomId, user.uid, user.displayName);
    if (result.error) {
      showMessage(result.error);
      lobbyListenerRef.current = startLobbyListener(setLobbies);
      return;
    }

    const puzzle = generateSeededPuzzle(result.puzzleCode, dictionary);
    loadPuzzle(puzzle);
    setPuzzleCode(result.puzzleCode);
    setRoomId(lobbyRoomId);
    setIsHost(false);
    setRoomPlayers(result.players);
    setRoomStatus('waiting');
    setPhase('mp-lobby');

    attachRoomListener(lobbyRoomId);
  }, [user, dictionary, showMessage, attachRoomListener, loadPuzzle]);

  const mpHostStart = useCallback(async () => {
    const currentRoomId = roomId;
    if (!currentRoomId) {
      showMessage('Room not found. Please try again.');
      return;
    }
    if (roomListenerRef.current) {
      roomListenerRef.current();
      roomListenerRef.current = null;
    }

    const result = await startRoom(currentRoomId);
    if (result.error) {
      showMessage(result.error);
      attachRoomListener(currentRoomId);
      return;
    }

    startMultiplayerCountdown(result.startTime);
    attachRoomListener(currentRoomId);
  }, [roomId, showMessage, attachRoomListener, startMultiplayerCountdown]);

  const endMultiplayerGame = useCallback(async () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setCurrentInput('');
    setMpSubmitted(false);
    setPhase('mp-waiting');

    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);

    const result = await submitWords(roomId, user.uid, foundWords);
    setMpSubmitted(true);

    if (result.error) {
      showMessage('Error submitting. Retrying...');
      await submitWords(roomId, user.uid, foundWords);
    }

    if (roomListenerRef.current) roomListenerRef.current();
    attachRoomListener(roomId);

    setTimeout(() => {
      setPhase(prev => {
        if (prev === 'mp-waiting') {
          fetchMpResults(roomId);
        }
        return prev;
      });
    }, 3000);
  }, [roomId, user, foundWords, showMessage, attachRoomListener, fetchMpResults]);

  const mpPlayAgainAction = useCallback(async () => {
    if (!dictionary) return;
    const newCode = generatePracticeCode();
    const result = await fbPlayAgain(roomId, newCode);
    if (result.error) {
      showMessage(result.error);
      return;
    }

    const puzzle = generateSeededPuzzle(newCode, dictionary);
    loadPuzzle(puzzle);
    setPuzzleCode(newCode);
    setFoundWords([]);
    setScore(0);
    setMpSubmitted(false);
    setMpResults(null);
    setPhase('mp-lobby');
  }, [roomId, dictionary, showMessage, loadPuzzle]);

  const leaveRoomAction = useCallback(async () => {
    stopAllListeners();
    if (roomId) {
      await fbLeaveRoom(roomId, user.uid, isHost);
    }
    setRoomId(null);
    setIsHost(false);
    setRoomPlayers({});
    setRoomStatus(null);
    setMpResults(null);
    setMpSubmitted(false);
    setPhase('mode-select');
  }, [roomId, user, isHost, stopAllListeners]);

  // ============================================
  // NEW GAME (practice)
  // ============================================

  const newPracticeGame = useCallback(() => {
    if (!dictionary) return;
    const code = generatePracticeCode();
    const puzzle = generateSeededPuzzle(code, dictionary);
    loadPuzzle(puzzle);
    setPuzzleCode(code);
    setFoundWords([]);
    setScore(0);
    setPhase('ready');
  }, [dictionary, loadPuzzle]);

  const replayPuzzle = useCallback(() => {
    startGame();
  }, [startGame]);

  const backToModeSelect = useCallback(() => {
    stopAllListeners();
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setPracticeMode(false);
    setFoundWords([]);
    setScore(0);
    setPhase('mode-select');
  }, [stopAllListeners]);

  return {
    // Phase
    phase,

    // Puzzle
    centerLetter, outerLetters, validWords, pangrams, maxScore,
    dictLoading,

    // Game state
    foundWords, score, timeLeft, leaderboard, dailyResult,

    // Input
    currentInput,

    // Mode
    practiceMode, puzzleCode,

    // Messages + effects
    message, floatingPoints, setFloatingPoints,

    // Multiplayer
    roomId, isHost, roomPlayers, roomStatus, roomHostName,
    mpResults, mpSubmitted, lobbies, countdown,

    // Actions
    startDaily, startPractice, loadPuzzleFromCode,
    startGame, endGame,
    addLetter, deleteLetter, shuffleLetters,
    submitWord, removeWord,

    // Multiplayer actions
    openMultiplayerMenu,
    hostGame, joinLobby,
    mpHostStart, mpPlayAgainAction, leaveRoomAction,
    fetchMpResults,

    // Navigation
    newPracticeGame, replayPuzzle, backToModeSelect,

    // User
    user,
  };
}
