"use client";

import * as React from "react";
import { Grid } from "@/components/grid";
import { ChevronLeftIcon } from "@/components/icons/chevron-left-icon";
import Link from "next/link";
import { GlobalSearchModal } from "./components/global-search-modal";
import { SearchInput } from "./components/search-input";
import { ThemeToggleButton } from '@/components/ui/theme-toggle-button';

export default function GlobalSearchPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsModalOpen((open) => !open);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
            <h1 className="font-medium transition-colors duration-200 group-hover:text-primary">global search</h1>
          </Link>
        </div>
        <div className="flex items-center justify-center min-h-[60vh]">
          <SearchInput onClick={openModal} />
        </div>
        <GlobalSearchModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
} 