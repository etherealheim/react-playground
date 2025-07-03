import React from "react";

interface GridProps {
  rows?: number;
  cols?: number;
  className?: string;
}

export function Grid({
  className,
}: GridProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
      style={{
        backgroundSize: '40px 40px',
        backgroundImage:
          'radial-gradient(circle, var(--grid-color) 1px, transparent 1px)',
      }}
    />
  );
} 