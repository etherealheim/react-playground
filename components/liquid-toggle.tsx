"use client"

import React from "react"
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button"
import { cn } from "@/lib/utils"

interface LiquidToggleProps {
  className?: string
}

export function LiquidToggle({ className }: LiquidToggleProps) {
  return (
    <div className={cn(
      "fixed top-5 right-5 z-50",
      className
    )}>
      <div className="relative group">
        {/* Subtle glow for both themes, less intense in dark mode, reduced blur */}
        <div className="absolute -inset-0 rounded-full blur-sm pointer-events-none
          bg-gradient-to-r from-white/10 to-white/5
          dark:from-blue-900/10 dark:to-blue-900/5
          opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
        />
        <div className="relative backdrop-blur-[2px]
          bg-white/15 dark:bg-neutral-900/30
          rounded-full border border-white/50 dark:border-neutral-800/40
          shadow-sm shadow-black/10 dark:shadow-black/10
          hover:bg-white/20 dark:hover:bg-neutral-900/10
          transition-all duration-300 ease-out"
        >
          {/* Light theme: subtle white highlight; dark: less pronounced */}
          <div className="absolute inset-0 rounded-full
            bg-gradient-to-br from-white/20 via-transparent to-transparent
            dark:from-white/0 dark:via-transparent dark:to-transparent"
          />
          {/* Light: subtle black shadow; dark: even more subtle */}
          <div className="absolute inset-0 rounded-full
            bg-gradient-to-tl from-black/5 via-transparent to-white/10
            dark:from-black/10 dark:via-transparent dark:to-white/5"
          />
          <div className="relative flex items-center justify-center p-3">
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </div>
  )
} 