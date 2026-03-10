"use client";

import React, { useState } from "react";
import {
  BucketItem,
  CATEGORY_COLORS,
  PRIORITY_COLORS,
  STATUS_COLORS,
  CATEGORY_EMOJIS,
} from "@/types/bucket";

interface BucketCardProps {
  item: BucketItem;
  onToggleComplete: (item: BucketItem) => void;
  onEdit: (item: BucketItem) => void;
  onDelete: (id: string) => void;
  isDragging?: boolean;
}

export default function BucketCard({
  item,
  onToggleComplete,
  onEdit,
  onDelete,
  isDragging,
}: BucketCardProps) {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const isCompleted = item.status === "Completed";

  const isApproaching = () => {
    if (!item.target_date || isCompleted) return false;
    const target = new Date(item.target_date);
    const now = new Date();
    const diff = target.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days >= 0 && days <= 7;
  };

  const isOverdue = () => {
    if (!item.target_date || isCompleted) return false;
    const target = new Date(item.target_date);
    return target < new Date();
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div
      className={`card card-hover group transition-all duration-300 ${
        isDragging ? "shadow-rose-xl scale-[1.02] rotate-1" : ""
      } ${isCompleted ? "opacity-60" : ""} ${
        isOverdue() ? "border-red-300" : ""
      } ${isApproaching() ? "border-amber-300" : ""}`}
    >
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <button
          onClick={() => onToggleComplete(item)}
          className={`mt-0.5 w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isCompleted
              ? "bg-gradient-romantic border-rose-gold text-white"
              : "border-rose/40 hover:border-rose-gold"
          }`}
        >
          {isCompleted && (
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          )}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3
              className={`font-semibold text-wine ${
                isCompleted ? "line-through text-rose-gold/50" : ""
              }`}
            >
              {CATEGORY_EMOJIS[item.category] || "📌"} {item.title}
            </h3>

            {/* Actions */}
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
              <button
                onClick={() => onEdit(item)}
                className="p-1.5 rounded-full hover:bg-blush text-rose/50 hover:text-rose-gold transition-all duration-300"
                title="Edit"
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
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
              {showConfirmDelete ? (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onDelete(item.id)}
                    className="p-1.5 rounded-pill bg-red-50 text-red-600 text-xs font-semibold border border-red-200"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setShowConfirmDelete(false)}
                    className="p-1.5 rounded-pill hover:bg-blush text-rose/50 text-xs"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowConfirmDelete(true)}
                  className="p-1.5 rounded-full hover:bg-red-50 text-rose/50 hover:text-red-500 transition-all duration-300"
                  title="Delete"
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
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {item.description && (
            <p
              className={`text-sm text-rose-gold/60 mt-1 ${isCompleted ? "line-through" : ""}`}
            >
              {item.description}
            </p>
          )}

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-1.5 mt-3">
            <span
              className={`badge ${CATEGORY_COLORS[item.category] || CATEGORY_COLORS.Other}`}
            >
              {item.category}
            </span>
            <span className={`badge ${PRIORITY_COLORS[item.priority]}`}>
              {item.priority}
            </span>
            <span className={`badge ${STATUS_COLORS[item.status]}`}>
              {item.status}
            </span>
            {item.target_date && (
              <span
                className={`badge ${
                  isOverdue()
                    ? "bg-red-50 text-red-600 border border-red-200"
                    : isApproaching()
                      ? "bg-amber-50 text-amber-600 border border-amber-200"
                      : "bg-petal text-rose-gold/70 border border-rose/20"
                }`}
              >
                {formatDate(item.target_date)}
                {isOverdue() && " (overdue)"}
                {isApproaching() && " (soon!)"}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
