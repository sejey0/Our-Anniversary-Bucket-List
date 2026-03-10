"use client";

import React from "react";

interface HeaderProps {
  onLogout: () => void;
}

export default function Header({ onLogout }: HeaderProps) {
  return (
    <header className="glass sticky top-0 z-50 border-b border-rose/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-romantic flex items-center justify-center shadow-rose-md">
            <span className="text-white text-lg">💝</span>
          </div>
          <div>
            <h1 className="heading-cursive text-2xl text-gradient">
              Our Bucket List
            </h1>
            <p className="text-xs text-rose-gold/60">Adventures await us</p>
          </div>
        </div>

        <button
          onClick={onLogout}
          className="flex items-center gap-2 px-4 py-2.5 rounded-pill bg-white/60 backdrop-blur-sm border border-rose/20 hover:bg-blush text-rose-gold hover:text-wine transition-all duration-300 text-sm font-semibold"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
          Logout
        </button>
      </div>
    </header>
  );
}
