import { IconSearch, IconCommand } from "@tabler/icons-react";

interface SearchInputProps {
  onClick: () => void;
}

export function SearchInput({ onClick }: SearchInputProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 px-1 py-1.5 text-[13px] font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 w-[172px] h-7"
      style={{ fontFamily: "Inter" }}
    >
      <div className="flex items-center justify-center w-4 h-4 rounded">
        <IconSearch className="w-4 h-4 text-gray-600 dark:text-gray-400" strokeWidth={2} />
      </div>
      <span className="flex-1 text-left">Search..</span>
      <div className="flex items-center justify-center gap-0.5 px-1 py-0.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded min-w-5 h-5">
        <IconCommand className="w-3.5 h-3.5 text-gray-600 dark:text-gray-400" strokeWidth={2} />
        <span className="text-[12px] font-medium text-gray-600 dark:text-gray-400 leading-4" style={{ fontFamily: "var(--font-geist-mono)" }}>
          K
        </span>
      </div>
    </button>
  );
} 