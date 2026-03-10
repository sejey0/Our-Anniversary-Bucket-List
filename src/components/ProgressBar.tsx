"use client";

import React from "react";
import { BucketItem } from "@/types/bucket";

interface ProgressBarProps {
  items: BucketItem[];
}

export default function ProgressBar({ items }: ProgressBarProps) {
  const total = items.length;
  const completed = items.filter((i) => i.status === "Completed").length;
  const inProgress = items.filter((i) => i.status === "In Progress").length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="card animate-slide-up">
      <div className="flex items-center justify-between mb-3">
        <h3 className="heading-cursive text-2xl text-gradient">Our Journey</h3>
        <span className="text-2xl font-bold text-gradient">{percentage}%</span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-petal rounded-pill h-4 overflow-hidden">
        <div
          className="h-full rounded-pill bg-gradient-romantic transition-all duration-700 ease-out relative"
          style={{ width: `${percentage}%` }}
        >
          {percentage > 5 && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer bg-[length:200%_100%]" />
          )}
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-wine">{total}</div>
          <div className="text-xs text-rose-gold/60">Total Dreams</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-rose-gold">{inProgress}</div>
          <div className="text-xs text-rose-gold/60">In Progress</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-rose-gold">{completed}</div>
          <div className="text-xs text-rose-gold/60">Completed</div>
        </div>
      </div>
    </div>
  );
}
