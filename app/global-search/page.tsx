"use client";

import { useState, useEffect } from "react";
import { SearchInput } from "./components/SearchInput";
import { GlobalSearchModal } from "./components/GlobalSearchModal";

export default function GlobalSearchPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle keyboard shortcut (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Global Search Demo</h1>
          <p className="text-muted-foreground mb-8">
            Search through actors, tools, and more with our global search functionality.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          {/* Search Input */}
          <div className="flex flex-col items-center space-y-4">
            <SearchInput onClick={() => setIsSearchOpen(true)} />
            <p className="text-sm text-muted-foreground">
              Press <kbd className="px-2 py-1 text-xs bg-muted border rounded">⌘K</kbd> to open search
            </p>
          </div>

          {/* Demo Instructions */}
          <div className="max-w-2xl mx-auto bg-muted/50 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Try searching for:</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <code className="bg-muted px-1 rounded">Website Content Crawler</code> - Extract structured data</li>
              <li>• <code className="bg-muted px-1 rounded">Screenshot</code> - Capture web page screenshots</li>
              <li>• <code className="bg-muted px-1 rounded">Changes Detector</code> - Monitor website changes</li>
              <li>• <code className="bg-muted px-1 rounded">Product</code> - Search across e-commerce sites</li>
              <li>• <code className="bg-muted px-1 rounded">News</code> - Aggregate latest news</li>
            </ul>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <div className="text-center p-4 bg-card rounded-lg border">
              <div className="text-2xl mb-2">🔍</div>
              <h3 className="font-semibold mb-2">Smart Search</h3>
              <p className="text-sm text-muted-foreground">
                Intelligent search across all your actors and tools
              </p>
            </div>
            <div className="text-center p-4 bg-card rounded-lg border">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold mb-2">Instant Results</h3>
              <p className="text-sm text-muted-foreground">
                Get results as you type with real-time filtering
              </p>
            </div>
            <div className="text-center p-4 bg-card rounded-lg border">
              <div className="text-2xl mb-2">🛍️</div>
              <h3 className="font-semibold mb-2">Store Integration</h3>
              <p className="text-sm text-muted-foreground">
                Discover new actors from the Apify Store
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global Search Modal */}
      <GlobalSearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </div>
  );
}