import { IconPlus } from "@tabler/icons-react";

interface SearchActionsProps {
  // Props if any
}

export function SearchActions({}: SearchActionsProps) {
  return (
    <div className="p-2 pt-0">
      <div className="m-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600">
        <div className="px-2 pt-2 pb-1">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
            Actions
          </p>
        </div>
        <div className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
          <div className="flex items-center gap-2">
            <IconPlus className="size-4 text-gray-800 dark:text-gray-200" />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Create Actor
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 