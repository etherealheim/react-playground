'use client'
import React, { useState } from "react";
import { ChevronLeftIcon } from "@/components/icons/chevron-left-icon";
import Link from "next/link";
import { Grid } from "@/components/grid";
import { ThemeToggleButton } from '@/components/ui/theme-toggle-button';

export default function DropdownPage() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative w-screen min-h-screen pt-6 pl-8 text-xl font-[family-name:var(--font-geist-mono)]">
      <Grid className="absolute inset-0 z-[-1] w-full h-full" />
      <div className="fixed top-0 right-0 p-6 pr-8 z-50">
        <ThemeToggleButton />
      </div>
      <div className="relative z-10">
        <div className="flex items-center mb-4 gap-2">
          <Link
            href="/"
            aria-label="Back to home"
            className="flex items-center gap-1 group cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <ChevronLeftIcon 
              isHovering={isHovering}
              className="w-6 h-6 transition-colors duration-200 group-hover:text-primary" 
            />
            <h1 className="font-medium transition-colors duration-200 group-hover:text-primary">dropdown</h1>
          </Link>
        </div>
        <div className="relative w-[calc(100vw-2rem)] h-[40vh] min-h-[300px] max-w-none my-8 ml-[-2rem]">
          {/* Content here */}
        </div>
        <p>This is the Dropdown page.</p>
      </div>
    </div>
  );
} 