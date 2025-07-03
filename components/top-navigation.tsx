import { ApifyLogo } from '@/components/icons/apify-logo';
import { ThemeToggleButton } from '@/components/ui/theme-toggle-button';
import React from 'react';

export function TopNavigation() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="flex items-center justify-between p-6 pl-8 pr-8" aria-label="Global">
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Apify</span>
            <div className="h-8 w-auto text-black dark:text-white">
              <ApifyLogo />
            </div>
          </a>
        </div>
        <div className="flex items-center">
            <ThemeToggleButton />
        </div>
      </nav>
    </header>
  );
} 