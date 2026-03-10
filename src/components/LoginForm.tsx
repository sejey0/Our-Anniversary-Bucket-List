"use client";

import React, { useState } from "react";
import { getRandomQuote } from "@/lib/data";

interface LoginFormProps {
  onLogin: (answer: string) => boolean;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const quote = React.useMemo(() => getRandomQuote(), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answer.trim()) {
      setError("Please enter your answer");
      return;
    }
    const success = onLogin(answer);
    if (!success) {
      setError("That's not quite right. Try again!");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Floating hearts background */}
      <div className="floating-heart">&#x2665;</div>
      <div className="floating-heart">&#x2665;</div>
      <div className="floating-heart">&#x2665;</div>
      <div className="floating-heart">&#x2665;</div>
      <div className="floating-heart">&#x2665;</div>
      <div className="floating-heart">&#x2665;</div>

      <div className="w-full max-w-md relative z-10">
        <div
          className={`card animate-fade-in ${isShaking ? "animate-bounce-soft" : ""}`}
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-romantic flex items-center justify-center shadow-rose-lg mb-4">
              <span className="text-4xl">💝</span>
            </div>
            <h1 className="heading-cursive text-5xl text-gradient mb-2">
              Our Bucket List
            </h1>
            <p className="text-rose-gold/60 text-sm">
              Answer the question to unlock our adventures
            </p>
          </div>

          {/* Security Question */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-wine mb-2">
                What is our monthsary?
              </label>
              <input
                type="text"
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                  setError("");
                }}
                placeholder="Enter the date..."
                className="input-field text-lg"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-wine animate-slide-down">
                  {error}
                </p>
              )}
            </div>

            <button type="submit" className="btn-primary w-full text-lg py-3">
              Unlock Our List
            </button>
          </form>

          {/* Hint */}
          <p className="text-center text-xs text-rose/80 mt-4">
            Hint: Month Day Year (e.g., January 1 2025)
          </p>
        </div>

        {/* Quote */}
        <div className="mt-6 text-center animate-fade-in">
          <p className="text-sm text-rose-gold/70 italic">
            &ldquo;{quote.quote}&rdquo;
          </p>
          <p className="text-xs text-rose/60 mt-1">— {quote.author}</p>
        </div>
      </div>
    </div>
  );
}
