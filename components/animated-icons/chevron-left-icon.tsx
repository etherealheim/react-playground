'use client';

import type { Transition } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import type { HTMLAttributes } from 'react';
import { useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ChevronLeftIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  isHovering?: boolean;
}

const defaultTransition: Transition = {
  times: [0, 0.4, 1],
  duration: 0.5,
};

export function ChevronLeftIcon({
  onMouseEnter,
  onMouseLeave,
  className,
  size = 28,
  isHovering,
  ...props
}: ChevronLeftIconProps) {
  const controls = useAnimation();

  useEffect(() => {
    if (isHovering) {
      controls.start('animate');
    } else if (isHovering === false) {
      controls.start('normal');
    }
  }, [isHovering, controls]);

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isHovering === undefined) {
        controls.start('animate');
      }
      onMouseEnter?.(e);
    },
    [controls, onMouseEnter, isHovering]
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isHovering === undefined) {
        controls.start('normal');
      }
      onMouseLeave?.(e);
    },
    [controls, onMouseLeave, isHovering]
  );

  return (
    <div
      className={cn('inline-flex items-center align-middle', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          variants={{
            normal: { x: 0 },
            animate: { x: [0, -4, 0] },
          }}
          transition={defaultTransition}
          animate={controls}
          d="m15 18-6-6 6-6"
        />
      </svg>
    </div>
  );
} 