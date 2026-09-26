import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md bg-zinc-900 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-zinc-700 animate-fade-in text-left">
      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
      <p className="text-xs sm:text-sm font-medium flex-1">{message}</p>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-white p-1 rounded-lg"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
