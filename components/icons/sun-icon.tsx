'use client';

import type { Variants } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import type { HTMLAttributes } from 'react';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SunIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  isAnimating?: boolean;
}

const svgVariants: Variants = {
  normal: { rotate: 0, transition: { duration: 0.5 } },
  animate: {
    rotate: 360,
    transition: {
      duration: 8,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

const pathVariants: Variants = {
  normal: { opacity: 1 },
  animate: (i: number) => ({
    opacity: [0, 1],
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

function SunIcon({
  className,
  size = 28,
  isAnimating,
  ...props
}: SunIconProps) {
  const pathControls = useAnimation();
  const svgControls = useAnimation();

  useEffect(() => {
    if (isAnimating) {
      pathControls.start('animate');
      svgControls.start('animate');
    } else {
      pathControls.start('normal');
      svgControls.start('normal');
    }
  }, [isAnimating, pathControls, svgControls]);

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
        variants={svgVariants}
        initial="normal"
        animate={svgControls}
      >
        <circle cx="12" cy="12" r="4" />
        {[
          'M12 2v2',
          'm19.07 4.93-1.41 1.41',
          'M20 12h2',
          'm17.66 17.66 1.41 1.41',
          'M12 20v2',
          'm6.34 17.66-1.41 1.41',
          'M2 12h2',
          'm4.93 4.93 1.41 1.41',
        ].map((d, index) => (
          <motion.path
            key={d}
            d={d}
            animate={pathControls}
            variants={pathVariants}
            custom={index + 1}
            initial="normal"
          />
        ))}
      </motion.svg>
    </div>
  );
}

export { SunIcon }; 