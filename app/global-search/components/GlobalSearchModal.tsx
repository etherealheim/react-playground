"use client";

import * as React from "react";
import Image from "next/image";
import {
  IconX,
  IconFileText,
  IconWorld,
  IconArrowRight,
} from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { InputField } from "./InputField";

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
        <div className="border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between gap-2">
          <InputField />
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <IconX className="size-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-2">
          <div className="px-2 pt-4 pb-1">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Results</p>
          </div>
          <div className="m-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-md">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
              Explore from Store
            </p>
            <div className="p-2 rounded-md hover:bg-white dark:hover:bg-gray-600 cursor-pointer">
              <div className="flex items-center gap-2">
                <IconArrowRight className="size-4 text-gray-800 dark:text-gray-200" />
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Go to</span>
                <Image
                  src="/website-content-crawler.png"
                  alt="Website Content Crawler"
                  width={20}
                  height={20}
                  className="rounded"
                />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  Website Content Crawler
                </span>
                <Badge
                  className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
                  variant="secondary"
                >
                  Private
                </Badge>
              </div>
              <div className="pl-6 mt-1">
                <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                  apify/website-content-crawler
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 