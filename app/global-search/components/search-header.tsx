import { IconSearch, IconX } from "@tabler/icons-react";

interface SearchHeaderProps {
  onClose: () => void;
}

export function SearchHeader({ onClose }: SearchHeaderProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <IconSearch className="size-5 text-gray-500 dark:text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none text-base text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 w-full"
        />
      </div>
      <button
        onClick={onClose}
        className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <IconX className="size-5 text-gray-600 dark:text-gray-400" />
      </button>
    </div>
  );
} 