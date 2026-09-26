import React from 'react';

export default function BrandLogo({ className = "h-11", showText = true }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Tricolor Emblem with Tree of Hope / Reaching Hands */}
      <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Saffron Canopy */}
          <path
            d="M32 6C23 6 15 13 14 22C11 23 8 26 8 30C8 35 12 39 17 39C19 39 21 38 23 37C25 41 28 44 32 44C36 44 39 41 41 37C43 38 45 39 47 39C52 39 56 35 56 30C56 26 53 23 50 22C49 13 41 6 32 6Z"
            fill="#FF7A00"
          />
          {/* Green Stem / Trunk representing Growth & Mother Earth */}
          <path
            d="M32 30V56M32 44C27 44 22 47 20 52M32 42C37 42 42 45 44 50"
            stroke="#1F8E3D"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Sun / Core of Hope */}
          <circle cx="32" cy="22" r="5" fill="#FFFFFF" />
          <circle cx="32" cy="22" r="3" fill="#0A3871" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-gray-900 leading-tight">
            Celebso Foundation
          </span>
          <span className="text-[10px] sm:text-xs tracking-widest uppercase text-gray-700 font-medium -mt-0.5">
            Hope · Support · Empower
          </span>
        </div>
      )}
    </div>
  );
}
