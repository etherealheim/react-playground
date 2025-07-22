import { IconSearch, IconCommand } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

interface SearchInputProps {
  onClick: () => void;
}

export function SearchInput({ onClick }: SearchInputProps) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className="h-10 w-72 justify-between px-3 py-2 text-muted-foreground"
    >
      <div className="flex items-center gap-2">
        <IconSearch className="h-4 w-4" />
        <span className="text-sm">Search...</span>
      </div>
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        <IconCommand className="h-3 w-3" />
        K
      </kbd>
    </Button>
  );
} 