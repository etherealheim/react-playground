'use client';

import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SunIcon } from '@/components/animated-icons/sun-icon';
import { MoonIcon } from '@/components/animated-icons/moon-icon';

export function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleClick() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }

  if (!mounted) {
    return <div className="h-6 w-6" />;
  }

  const isDark = resolvedTheme === 'dark';
  const showSun = (isDark && isHovered) || (!isDark && !isHovered);
  const showMoon = (!isDark && isHovered) || (isDark && !isHovered);

  const motionProps = {
    initial: { opacity: 0, rotate: -90, scale: 0.5 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 90, scale: 0.5 },
    transition: { type: 'spring' as const, stiffness: 200, damping: 20 },
    className: 'absolute inset-0 pointer-events-none',
  };

  return (
    <button
      type="button"
      className="relative h-6 w-6 cursor-pointer rounded-full"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Toggle theme"
    >
      <AnimatePresence initial={false}>
        {showSun && (
          <motion.div key="sun" {...motionProps}>
            <SunIcon size={24} isAnimating={isHovered && isDark} />
          </motion.div>
        )}
        {showMoon && (
          <motion.div key="moon" {...motionProps}>
            <MoonIcon size={24} isAnimating={isHovered && !isDark} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
} 