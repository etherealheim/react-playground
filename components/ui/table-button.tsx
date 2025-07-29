import React from "react"
import { cn } from "@/lib/utils"

interface TableButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  isActive?: boolean
}

const TableButton = React.forwardRef<HTMLButtonElement, TableButtonProps>(
  ({ className, children, isActive = false, ...props }, ref) => {
    const baseClasses = "flex items-center hover:bg-muted/50 hover:text-foreground border border-transparent hover:border-border px-2 py-1 rounded-md transition-colors outline-none focus:outline-none"
    const activeClasses = "bg-gray-50 dark:!bg-gray-700 !border-gray-200 dark:!border-gray-600"
    
    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          isActive && activeClasses,
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

TableButton.displayName = "TableButton"

export { TableButton } 