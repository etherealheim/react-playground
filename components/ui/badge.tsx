import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "secondary" | "default";
}

export const Badge: React.FC<BadgeProps> = ({ variant = "default", className, ...props }) => {
  return (
    <span
      className={
        `inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ` +
        (variant === "secondary"
          ? "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          : "bg-primary text-white") +
        (className ? ` ${className}` : "")
      }
      {...props}
    />
  );
}; 