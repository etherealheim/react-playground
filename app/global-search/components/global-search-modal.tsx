"use client";

import * as React from "react";
import { SearchHeader } from "./search-header";
import { SearchStoreCta } from "./search-store-cta";
import { SearchActions } from "./search-actions";

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GlobalSearchModal({
  isOpen,
  onClose,
}: GlobalSearchModalProps) {
  if (!isOpen) {
    return null;
  }
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-white dark:bg-gray-900"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-2xl mx-auto border border-gray-200 dark:border-gray-700"
        style={{ fontFamily: "var(--font-inter)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <SearchHeader onClose={onClose} />
        <div className="p-2">
          <div className="px-2 pt-4 pb-1">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">No results</p>
          </div>
        </div>
        <SearchStoreCta />
        <SearchActions />
      </div>
    </div>
  );
} 