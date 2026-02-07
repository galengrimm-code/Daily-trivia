// src/games/boggle/useBoggleGame.js
import { useState, useRef, useCallback, useEffect } from 'react';
import { usePlayer } from '../../hooks/usePlayer';
import { getTodayKey } from '../../utils/helpers';
import useDictionary from './useDictionary';
import { GAME_DURATION } from './boggleConstants';
import {
  generateDailyBoard, generateSeededBoard, generateRandomBoard,
  canFormWord, getWordScore, getAllPossibleWords, generatePracticeCode
} from './boggleUtils';
import {
  checkBogglePlayer, saveBoggleScore, getBoggleLeaderboard,
  createRoom, joinRoom, startRoom, submitWords, getResults,
  leaveRoom as fbLeaveRoom, playAgain as fbPlayAgain,
  startRoomListener, startLobbyListener
} from './boggleFirebase';

export default function useBoggleGame() {
  const { user } = usePlayer();
  const { dictionary, loading: dictLoading } = useDictionary();

  // Game phase
  const [phase, setPhase] = useState('mode-select');

  // Board + game state
  const [board, setBoard] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [possibleWords, setPossibleWords] = useState(null);

  // Input state
  const [selectedPath, setSelectedPath] = useState([]);
  const [currentWord, setCurrentWord] = useState('');
  const [inputMode, setInputMode] = useState('swipe');
  const [typedWord, setTypedWord] = useState('');

  // Toast messages
  const [message, setMessage] = useState('');
  const messageTimeout = useRef(null);

  // Mode state
  const [practiceMode, setPracticeMode] = useState(false);
  const [practiceCode, setPracticeCode] = useState(null);
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

  // Floating points state
  const [floatingPoints, setFloatingPoints] = useState(null);

  // Show toast message
  const showMessage = useCallback((msg) => {
    setMessage(msg);
    if (messageTimeout.current) clearTimeout(messageTimeout.current);
    if (msg) {
      messageTimeout.current = setTimeout(() => setMessage(''), 1500);
    }
  }, []);

  // Clean up listeners on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (countdownRef.current) clearInterval(countdownRef.current);
      if (roomListenerRef.current) roomListenerRef.current();
      if (lobbyListenerRef.current) lobbyListenerRef.current();
    };
  }, []);

  // ============================================
  // DAILY MODE
  // ============================================

  const startDaily = useCallback(async () => {
    const dateKey = getTodayKey();
    const boardData = generateDailyBoard(dateKey);
    setBoard(boardData);
    setPracticeMode(false);
    setPracticeCode(null);
    setPossibleWords(null);

    // Check if already played
    const check = await checkBogglePlayer(user.uid, dateKey);
    if (check.played) {
      setDailyResult(check);
      setScore(check.score);
      setPhase('finished');
      // Calculate possible words in background
      if (dictionary) {
        setTimeout(() => {
          setPossibleWords(getAllPossibleWords(boardData, dictionary));
        }, 100);
      }
      // Load leaderboard
      const lb = await getBoggleLeaderboard(dateKey);
      setLeaderboard(lb);
    } else {
      setDailyResult(null);
      setPhase('ready');
    }
  }, [user, dictionary]);

  // ============================================
  // PRACTICE MODE
  // ============================================

  const startPractice = useCallback((code) => {
    setPracticeMode(true);
    setPossibleWords(null);
    setDailyResult(null);

    let boardData, boardCode;
    if (code && code >= 10000 && code <= 99999) {
      boardData = generateSeededBoard(code);
      boardCode = code;
    } else {
      const result = generateRandomBoard();
      boardData = result.board;
      boardCode = result.code;
    }

    setBoard(boardData);
    setPracticeCode(boardCode);
    setPhase('ready');
  }, []);

  const loadBoardFromCode = useCallback((code) => {
    const num = parseInt(code);
    if (num >= 10000 && num <= 99999) {
      setBoard(generateSeededBoard(num));
      setPracticeCode(num);
      setPossibleWords(null);
    } else {
      showMessage('Enter a 5-digit code');
    }
  }, [showMessage]);

  // ============================================
  // GAME TIMER
  // ============================================

  const startGame = useCallback(() => {
    setFoundWords([]);
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setSelectedPath([]);
    setCurrentWord('');
    setTypedWord('');
    setPossibleWords(null);
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
    setSelectedPath([]);
    setCurrentWord('');
    setPhase('finished');

    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);

    // Calculate possible words in background
    if (dictionary) {
      setTimeout(() => {
        setPossibleWords(prev => prev || getAllPossibleWords(board, dictionary));
      }, 100);
    }

    // Save daily score
    if (!practiceMode) {
      const dateKey = getTodayKey();
      await saveBoggleScore(user.uid, user.displayName, dateKey, score, foundWords.length);
      const lb = await getBoggleLeaderboard(dateKey);
      setLeaderboard(lb);
    }
  }, [dictionary, board, practiceMode, user, score, foundWords.length]);

  // ============================================
  // WORD SUBMISSION
  // ============================================

  const submitWordAction = useCallback((wordOverride) => {
    const word = (wordOverride || (inputMode === 'type' ? typedWord : currentWord)).toLowerCase();

    if (word.length < 3) {
      showMessage('Words must be at least 3 letters');
      setSelectedPath([]);
      setCurrentWord('');
      setTypedWord('');
      return null;
    }

    if (foundWords.includes(word)) {
      showMessage('Already found!');
      setSelectedPath([]);
      setCurrentWord('');
      setTypedWord('');
      return 'duplicate';
    }

    if (!dictionary || !dictionary.has(word)) {
      setSelectedPath([]);
      setCurrentWord('');
      setTypedWord('');
      return 'invalid';
    }

    if (inputMode === 'type' && !canFormWord(word, board)) {
      showMessage('Cannot form on board');
      setTypedWord('');
      return 'invalid';
    }

    const wordScore = getWordScore(word);

    setFoundWords(prev => [...prev, word]);
    setScore(prev => prev + wordScore);
    setFloatingPoints({ points: wordScore, id: Date.now() });
    setSelectedPath([]);
    setCurrentWord('');
    setTypedWord('');

    return 'valid';
  }, [inputMode, typedWord, currentWord, foundWords, dictionary, board, showMessage]);

  const clearSelection = useCallback(() => {
    setSelectedPath([]);
    setCurrentWord('');
  }, []);

  // Remove word (practice mode only)
  const removeWord = useCallback((word) => {
    setFoundWords(prev => prev.filter(w => w !== word));
    setScore(prev => prev - getWordScore(word));
  }, []);

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
    setSelectedPath([]);
    setCurrentWord('');
    setTypedWord('');
    setPossibleWords(null);

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

  // Room update handler — stored in ref so listener always calls latest version
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
          setBoard(generateSeededBoard(room.boardCode));
          setPracticeCode(room.boardCode);
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

  // Stable callback wrapper that delegates to the ref
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
    if (lobbyListenerRef.current) {
      lobbyListenerRef.current();
      lobbyListenerRef.current = null;
    }

    const boardCode = generatePracticeCode();
    const boardData = generateSeededBoard(boardCode);
    setBoard(boardData);
    setPracticeCode(boardCode);

    const result = await createRoom(user.uid, user.displayName, boardCode);
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
  }, [user, showMessage, attachRoomListener]);

  const joinGameByCode = useCallback(async (code) => {
    if (lobbyListenerRef.current) {
      lobbyListenerRef.current();
      lobbyListenerRef.current = null;
    }

    const result = await joinRoom(code, user.uid, user.displayName);
    if (result.error) {
      showMessage(result.error);
      return;
    }

    setBoard(generateSeededBoard(result.boardCode));
    setPracticeCode(result.boardCode);
    setRoomId(code);
    setIsHost(false);
    setRoomPlayers(result.players);
    setRoomStatus('waiting');
    setPhase('mp-lobby');

    attachRoomListener(code);
  }, [user, showMessage, attachRoomListener]);

  const joinLobby = useCallback(async (lobbyRoomId) => {
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

    setBoard(generateSeededBoard(result.boardCode));
    setPracticeCode(result.boardCode);
    setRoomId(lobbyRoomId);
    setIsHost(false);
    setRoomPlayers(result.players);
    setRoomStatus('waiting');
    setPhase('mp-lobby');

    attachRoomListener(lobbyRoomId);
  }, [user, showMessage, attachRoomListener]);

  const mpHostStart = useCallback(async () => {
    if (!roomId) return;
    if (roomListenerRef.current) {
      roomListenerRef.current();
      roomListenerRef.current = null;
    }

    const result = await startRoom(roomId);
    if (result.error) {
      showMessage(result.error);
      attachRoomListener(roomId);
      return;
    }

    startMultiplayerCountdown(result.startTime);
    attachRoomListener(roomId);
  }, [roomId, showMessage, attachRoomListener, startMultiplayerCountdown]);

  const endMultiplayerGame = useCallback(async () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setSelectedPath([]);
    setCurrentWord('');
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

    // Fallback: check after 3s
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
    const newCode = generatePracticeCode();
    const result = await fbPlayAgain(roomId, newCode);
    if (result.error) {
      showMessage(result.error);
      return;
    }

    setBoard(generateSeededBoard(newCode));
    setPracticeCode(newCode);
    setFoundWords([]);
    setScore(0);
    setMpSubmitted(false);
    setMpResults(null);
    setPhase('mp-lobby');
  }, [roomId, showMessage]);

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
    const { board: newBoard, code } = generateRandomBoard();
    setBoard(newBoard);
    setPracticeCode(code);
    setPossibleWords(null);
    setFoundWords([]);
    setScore(0);
    setPhase('ready');
  }, []);

  const replayBoard = useCallback(() => {
    setPossibleWords(null);
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
    setPossibleWords(null);
    setPhase('mode-select');
  }, [stopAllListeners]);

  return {
    // Phase
    phase, setPhase,

    // Game state
    board, foundWords, score, timeLeft, possibleWords,
    dictLoading, leaderboard, dailyResult,

    // Input
    selectedPath, setSelectedPath,
    currentWord, setCurrentWord,
    inputMode, setInputMode,
    typedWord, setTypedWord,

    // Mode
    practiceMode, practiceCode,

    // Messages + effects
    message, showMessage, floatingPoints, setFloatingPoints,

    // Multiplayer
    roomId, isHost, roomPlayers, roomStatus, roomHostName,
    mpResults, mpSubmitted, lobbies, countdown,

    // Actions
    startDaily,
    startPractice, loadBoardFromCode,
    startGame, endGame,
    submitWord: submitWordAction, clearSelection, removeWord,

    // Multiplayer actions
    openMultiplayerMenu,
    hostGame, joinGameByCode, joinLobby,
    mpHostStart, mpPlayAgainAction, leaveRoomAction,
    fetchMpResults,

    // Navigation
    newPracticeGame, replayBoard, backToModeSelect,

    // User
    user,
  };
}
