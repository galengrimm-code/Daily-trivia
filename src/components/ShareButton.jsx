// src/components/ShareButton.jsx
import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';

export default function ShareButton({ getText, label = 'Share', className = '' }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const text = getText();

    if (navigator.share) {
      try {
        await navigator.share({ text });
        return;
      } catch {
        // User cancelled or share failed, fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`flex items-center justify-center gap-2 py-3 px-6 bg-gray-100 rounded-button font-semibold text-text-main hover:bg-gray-200 transition-colors ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-5 h-5 text-green-600" />
          Copied!
        </>
      ) : (
        <>
          <Share2 className="w-5 h-5" />
          {label}
        </>
      )}
    </button>
  );
}
