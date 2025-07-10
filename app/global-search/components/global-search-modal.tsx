"use client";

import * as React from "react";
import { useState } from "react";
import { IconCode, IconShoppingBag, IconPlus, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GlobalSearchModal({
  isOpen,
  onClose,
}: GlobalSearchModalProps) {
  const [query, setQuery] = useState("");

  const mockResults = [
    { id: "1", title: "Website Content Crawler", description: "Extract structured data from websites.", type: "result" },
    { id: "2", title: "Website Screenshot Generator", description: "Capture screenshots of web pages.", type: "result" },
    { id: "3", title: "Website Changes Detector", description: "Monitor websites for changes.", type: "result" },
    { id: "4", title: "Product Search", description: "Search for products across e-commerce sites.", type: "result" },
    { id: "5", title: "News Aggregator", description: "Collect latest news from various sources.", type: "result" },
  ];

  const storeItems = [
    {
      id: "store-1",
      title: "Website Content Crawler",
      package: "apify/website-content-crawler",
      image: "/website-content-crawler.png",
    },
    {
      id: "store-2", 
      title: "Website Screenshot Generator",
      package: "apify/screenshot-url",
      image: "/website-screenshot-generator.png",
    },
    {
      id: "store-3",
      title: "Website Changes Detector", 
      package: "tri_angle/website-changes-detector",
      image: "/website-changes-detector.png",
    },
  ];

  const filteredResults = mockResults.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredStoreItems = storeItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.package.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <CommandInput 
        placeholder="Search for actors, tools, and more..." 
        value={query}
        onValueChange={setQuery}
      />
      <CommandList className="max-h-[400px]">
        {filteredResults.length === 0 && filteredStoreItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="relative mb-4 size-24">
              {/* Background circle */}
              <div className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-800"></div>
              {/* Mock documents illustration */}
              <div className="absolute left-4 top-4 h-16 w-16 rotate-[-15deg] rounded bg-white shadow-md dark:bg-gray-700">
                <div className="h-full w-full overflow-hidden">
                  <div className="mt-1 ml-1 h-2 w-3/4 bg-gray-200 dark:bg-gray-600 rounded-sm"></div>
                  <div className="mt-1 ml-1 h-2 w-1/2 bg-gray-200 dark:bg-gray-600 rounded-sm"></div>
                  <div className="mt-1 ml-1 h-2 w-2/3 bg-gray-200 dark:bg-gray-600 rounded-sm"></div>
                  <div className="mt-1 ml-1 h-2 w-4/5 bg-gray-200 dark:bg-gray-600 rounded-sm"></div>
                </div>
              </div>
              <div className="absolute right-4 top-6 h-16 w-16 rounded bg-white shadow-md dark:bg-gray-700">
                <div className="h-full w-full overflow-hidden">
                  <div className="mt-1 ml-1 h-2 w-3/4 bg-gray-200 dark:bg-gray-600 rounded-sm"></div>
                  <div className="mt-1 ml-1 h-2 w-1/2 bg-gray-200 dark:bg-gray-600 rounded-sm"></div>
                  <div className="mt-1 ml-1 h-2 w-2/3 bg-gray-200 dark:bg-gray-600 rounded-sm"></div>
                  <div className="mt-1 ml-1 h-2 w-4/5 bg-gray-200 dark:bg-gray-600 rounded-sm"></div>
                </div>
              </div>
            </div>
            <p className="mb-6 max-w-md text-sm text-muted-foreground">
              No results found. Refine your search or explore other options below.
            </p>
            <div className="w-full px-6">
              <p className="mb-2 text-left text-xs font-medium text-muted-foreground">Actions</p>
              <Button variant="secondary" className="mb-2 h-9 w-full justify-between rounded-md bg-muted text-foreground hover:bg-muted/80">
                <div className="flex items-center">
                  <IconShoppingBag className="mr-2 h-4 w-4" />
                  Search “{query}” in Apify Store
                </div>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>S
                </kbd>
              </Button>
              <Button variant="secondary" className="h-9 w-full justify-between rounded-md bg-muted text-foreground hover:bg-muted/80">
                <div className="flex items-center">
                  <IconPlus className="mr-2 h-4 w-4" />
                  Create Actor
                </div>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>A
                </kbd>
              </Button>
            </div>
          </div>
        ) : (
          <>
            {filteredResults.length > 0 && (
              <CommandGroup heading="Results">
                <AnimatePresence>
                  {filteredResults.map((result, index) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <CommandItem className="flex items-start gap-3 p-3">
                        <IconCode className="h-4 w-4 mt-1 text-muted-foreground" />
                        <div className="flex-1 space-y-1">
                          <div className="font-medium text-sm">{result.title}</div>
                          <div className="text-xs text-muted-foreground">{result.description}</div>
                        </div>
                      </CommandItem>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </CommandGroup>
            )}

            {filteredStoreItems.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup heading="Explore from Store">
                  {filteredStoreItems.map((item) => (
                    <CommandItem key={item.id} className="flex items-center gap-3 p-3">
                      <IconShoppingBag className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Try</span>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={20}
                        height={20}
                        className="rounded border"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{item.title}</div>
                        <div className="text-xs text-muted-foreground font-mono">{item.package}</div>
                      </div>
                    </CommandItem>
                  ))}
                  <CommandItem className="flex items-center gap-3 p-3">
                    <IconArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Explore in Apify Store</span>
                  </CommandItem>
                </CommandGroup>
              </>
            )}

            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem className="flex items-center gap-3 p-3">
                <IconPlus className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Create Actor</span>
              </CommandItem>
            </CommandGroup>
          </>
        )}
      </CommandList>
    </CommandDialog>
  );
} 