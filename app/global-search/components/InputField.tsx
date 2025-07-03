"use client";

import * as React from "react";
import { IconSearch } from "@tabler/icons-react";

export function InputField() {
  return (
    <div className="relative w-full">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <IconSearch className="size-5 text-gray-600 dark:text-gray-400" />
      </span>
      <input
        placeholder="Search..."
        className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 pl-10 pr-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
      />
    </div>
  );
} 