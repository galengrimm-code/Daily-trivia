// src/components/Modal.jsx
import React from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div
        className="bg-white rounded-card p-6 max-w-md w-full mx-4 shadow-lg animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          {title && <h2 className="text-xl font-bold text-text-main">{title}</h2>}
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-text-muted" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
