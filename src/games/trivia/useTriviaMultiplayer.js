// src/games/trivia/useTriviaMultiplayer.js
import { useState, useEffect, useCallback, useRef } from 'react';
import {
  createRoom,
  joinRoom,
  startGame,
  submitAnswer,
  nextQuestion,
  checkGameCompletion,
  leaveRoom,
  playAgain,
  startRoomListener,
  startLobbyListener,
} from './triviaMultiplayer';

export default function useTriviaMultiplayer(user) {
  const [phase, setPhase] = useState('closed'); // closed, mp-menu, mp-host-setup, mp-lobby, mp-playing, mp-results
  const [lobbies, setLobbies] = useState([]);
  const [roomId, setRoomId] = useState(null);
  const [room, setRoom] = useState(null);
  const [isHost, setIsHost] = useState(false);
  const [error, setError] = useState(null);

  const unsubscribeRoom = useRef(null);
  const unsubscribeLobby = useRef(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (unsubscribeRoom.current) unsubscribeRoom.current();
      if (unsubscribeLobby.current) unsubscribeLobby.current();
    };
  }, []);

  // Subscribe to lobbies when in menu
  useEffect(() => {
    if (phase === 'mp-menu') {
      unsubscribeLobby.current = startLobbyListener((newLobbies) => {
        setLobbies(newLobbies);
      });
    } else {
      if (unsubscribeLobby.current) {
        unsubscribeLobby.current();
        unsubscribeLobby.current = null;
      }
    }
  }, [phase]);

  // Handle room state changes
  useEffect(() => {
    if (!room) return;

    if (room.deleted) {
      // Room was deleted
      setPhase('mp-menu');
      setRoom(null);
      setRoomId(null);
      setIsHost(false);
      setError('Room was closed');
      return;
    }

    // Update phase based on room status
    if (room.status === 'waiting' && phase !== 'mp-lobby') {
      setPhase('mp-lobby');
    } else if (room.status === 'playing' && phase !== 'mp-playing') {
      setPhase('mp-playing');
    } else if (room.status === 'finished' && phase !== 'mp-results') {
      setPhase('mp-results');
    }
  }, [room, phase]);

  // Open multiplayer menu
  const openMultiplayer = useCallback(() => {
    setPhase('mp-menu');
    setError(null);
  }, []);

  // Go to host setup
  const openHostSetup = useCallback(() => {
    setPhase('mp-host-setup');
  }, []);

  // Create a room
  const handleCreateRoom = useCallback(async (categories) => {
    if (!user) {
      setError('Please sign in to host a game');
      return;
    }

    const displayName = user.displayName || 'Player';
    const result = await createRoom(user.uid, displayName, categories);

    if (result.error) {
      setError(result.error);
      return;
    }

    setRoomId(result.roomId);
    setIsHost(true);

    // Subscribe to room updates
    unsubscribeRoom.current = startRoomListener(result.roomId, (roomData) => {
      setRoom(roomData);
    });

    setPhase('mp-lobby');
  }, [user]);

  // Join a room
  const handleJoinRoom = useCallback(async (code) => {
    if (!user) {
      setError('Please sign in to join a game');
      return;
    }

    const displayName = user.displayName || 'Player';
    const result = await joinRoom(code, user.uid, displayName);

    if (result.error) {
      setError(result.error);
      return;
    }

    setRoomId(code);
    setIsHost(false);

    // Subscribe to room updates
    unsubscribeRoom.current = startRoomListener(code, (roomData) => {
      setRoom(roomData);
    });

    setPhase('mp-lobby');
  }, [user]);

  // Start the game
  const handleStartGame = useCallback(async () => {
    if (!roomId) return;

    const result = await startGame(roomId);
    if (result.error) {
      setError(result.error);
    }
  }, [roomId]);

  // Submit an answer
  const handleSubmitAnswer = useCallback(async (questionIndex, answerIndex, timeTaken) => {
    if (!roomId || !user) return { error: 'Not in room' };

    const result = await submitAnswer(roomId, user.uid, questionIndex, answerIndex, timeTaken);
    return result;
  }, [roomId, user]);

  // Next question (kept for compatibility)
  const handleNextQuestion = useCallback(async () => {
    if (!roomId) return;

    const result = await nextQuestion(roomId);
    if (result.error) {
      setError(result.error);
    }
  }, [roomId]);

  // Check if game should end (all players finished)
  const handleCheckCompletion = useCallback(async () => {
    if (!roomId) return;

    await checkGameCompletion(roomId);
  }, [roomId]);

  // Leave room
  const handleLeaveRoom = useCallback(async () => {
    if (roomId && user) {
      await leaveRoom(roomId, user.uid, isHost);
    }

    if (unsubscribeRoom.current) {
      unsubscribeRoom.current();
      unsubscribeRoom.current = null;
    }

    setRoom(null);
    setRoomId(null);
    setIsHost(false);
    setPhase('mp-menu');
  }, [roomId, user, isHost]);

  // Play again
  const handlePlayAgain = useCallback(async () => {
    if (!roomId) return;

    const result = await playAgain(roomId, room?.categories);
    if (result.error) {
      setError(result.error);
    }
  }, [roomId, room?.categories]);

  // Close multiplayer
  const closeMultiplayer = useCallback(async () => {
    if (roomId && user) {
      await leaveRoom(roomId, user.uid, isHost);
    }

    if (unsubscribeRoom.current) {
      unsubscribeRoom.current();
      unsubscribeRoom.current = null;
    }
    if (unsubscribeLobby.current) {
      unsubscribeLobby.current();
      unsubscribeLobby.current = null;
    }

    setPhase('closed');
    setLobbies([]);
    setRoom(null);
    setRoomId(null);
    setIsHost(false);
    setError(null);
  }, [roomId, user, isHost]);

  // Back navigation
  const handleBack = useCallback(() => {
    if (phase === 'mp-host-setup') {
      setPhase('mp-menu');
    } else if (phase === 'mp-menu') {
      closeMultiplayer();
    }
  }, [phase, closeMultiplayer]);

  return {
    phase,
    lobbies,
    roomId,
    room,
    isHost,
    error,
    openMultiplayer,
    openHostSetup,
    handleCreateRoom,
    handleJoinRoom,
    handleStartGame,
    handleSubmitAnswer,
    handleNextQuestion,
    handleCheckCompletion,
    handleLeaveRoom,
    handlePlayAgain,
    handleBack,
    closeMultiplayer,
    clearError: () => setError(null),
  };
}
