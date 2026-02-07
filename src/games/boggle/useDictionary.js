// src/games/boggle/useDictionary.js
import { useState, useEffect } from 'react';

// Singleton: load once, reuse across all components
let cachedDictionary = null;
let loadPromise = null;

function loadDictionary() {
  if (cachedDictionary) return Promise.resolve(cachedDictionary);
  if (loadPromise) return loadPromise;

  loadPromise = fetch('/data/boggle-words.json')
    .then(res => {
      if (!res.ok) throw new Error('Failed to load dictionary');
      return res.json();
    })
    .then(words => {
      cachedDictionary = new Set(words);
      return cachedDictionary;
    })
    .catch(err => {
      loadPromise = null; // Allow retry on failure
      throw err;
    });

  return loadPromise;
}

export default function useDictionary() {
  const [dictionary, setDictionary] = useState(cachedDictionary);
  const [loading, setLoading] = useState(!cachedDictionary);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cachedDictionary) {
      setDictionary(cachedDictionary);
      setLoading(false);
      return;
    }

    loadDictionary()
      .then(dict => {
        setDictionary(dict);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { dictionary, loading, error };
}
