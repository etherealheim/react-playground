'use client';

import type { Variants } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import type { HTMLAttributes } from 'react';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface MoonIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  isAnimating?: boolean;
}

const swingVariants: Variants = {
  swing: {
    rotate: [0, 12, -8, 12, -8, 5, -5, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  normal: {
    rotate: 0,
    transition: { duration: 0.3 },
  },
};

function MoonIcon({
  className,
  size = 28,
  isAnimating,
  ...props
}: MoonIconProps) {
  const controls = useAnimation();

  useEffect(() => {
    if (isAnimating) {
      controls.start('swing');
    } else {
      controls.stop();
      controls.start('normal');
    }
  }, [isAnimating, controls]);

  return (
    <div className={cn(className)} {...props}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ originX: '50%', originY: '50%' }}
        initial="normal"
        animate={controls}
        variants={swingVariants}
      >
        <g style={{ transform: 'scale(0.85)', transformOrigin: '50% 50%' }}>
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </g>
      </motion.svg>
    </div>
  );
}

MoonIcon.displayName = 'MoonIcon';

export { MoonIcon }; 