'use client'

import { motion, type Variants, useAnimation } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useEffect, useRef } from 'react'

interface LockIconProps {
  className?: string
  size?: number
  isUnlocked?: boolean
}

const lockBodyVariants: Variants = {
  locked: {
    d: "M4.16675 10.8334C4.16675 10.3914 4.34234 9.96746 4.6549 9.6549C4.96746 9.34234 5.39139 9.16675 5.83341 9.16675H14.1667C14.6088 9.16675 15.0327 9.34234 15.3453 9.6549C15.6578 9.96746 15.8334 10.3914 15.8334 10.8334V15.8334C15.8334 16.2754 15.6578 16.6994 15.3453 17.0119C15.0327 17.3245 14.6088 17.5001 14.1667 17.5001H5.83341C5.39139 17.5001 4.96746 17.3245 4.6549 17.0119C4.34234 16.6994 4.16675 16.2754 4.16675 15.8334V10.8334Z"
  },
  unlocked: {
    d: "M2.5 10.8334C2.5 10.3914 2.67559 9.96746 2.98816 9.6549C3.30072 9.34234 3.72464 9.16675 4.16667 9.16675H12.5C12.942 9.16675 13.366 9.34234 13.6785 9.6549C13.9911 9.96746 14.1667 10.3914 14.1667 10.8334V15.8334C14.1667 16.2754 13.9911 16.6994 13.6785 17.0119C13.366 17.3245 12.942 17.5001 12.5 17.5001H4.16667C3.72464 17.5001 3.30072 17.3245 2.98816 17.0119C2.67559 16.6994 2.5 16.2754 2.5 15.8334V10.8334Z"
  }
}

const keyholeVariants: Variants = {
  locked: {
    d: "M9.16675 13.3333C9.16675 13.5543 9.25455 13.7663 9.41083 13.9226C9.56711 14.0789 9.77907 14.1667 10.0001 14.1667C10.2211 14.1667 10.4331 14.0789 10.5893 13.9226C10.7456 13.7663 10.8334 13.5543 10.8334 13.3333C10.8334 13.1123 10.7456 12.9004 10.5893 12.7441C10.4331 12.5878 10.2211 12.5 10.0001 12.5C9.77907 12.5 9.56711 12.5878 9.41083 12.7441C9.25455 12.9004 9.16675 13.1123 9.16675 13.3333Z"
  },
  unlocked: {
    d: "M7.5 13.3333C7.5 13.5543 7.5878 13.7663 7.74408 13.9226C7.90036 14.0789 8.11232 14.1667 8.33333 14.1667C8.55435 14.1667 8.76631 14.0789 8.92259 13.9226C9.07887 13.7663 9.16667 13.5543 9.16667 13.3333C9.16667 13.1123 9.07887 12.9004 8.92259 12.7441C8.76631 12.5878 8.55435 12.5 8.33333 12.5C8.11232 12.5 7.90036 12.5878 7.74408 12.7441C7.5878 12.9004 7.5 13.1123 7.5 13.3333Z"
  }
}

export function LockIcon({
  className,
  size = 20,
  isUnlocked = false
}: LockIconProps) {
  const shackleControls = useAnimation()
  const isInitialMount = useRef(true)

  useEffect(() => {
    // Skip animation on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false
      // Set initial state without animation
      shackleControls.set({
        d: isUnlocked 
          ? "M10.8331 9.8V5.83333C10.8331 4.94928 11.1843 4.10143 11.8094 3.47631C12.4346 2.85119 13.2824 2.5 14.1665 2.5C15.0505 2.5 15.8984 2.85119 16.5235 3.47631C17.1486 4.10143 17.4998 4.94928 17.4998 5.83333V9.8"
          : "M13.3334 9.16667V5.83333C13.3334 4.94928 12.9822 4.10143 12.3571 3.47631C11.732 2.85119 10.8841 2.5 10.0001 2.5C9.11603 2.5 8.26818 2.85119 7.64306 3.47631C7.01794 4.10143 6.66675 4.94928 6.66675 5.83333V9.16667",
        y: isUnlocked ? -1.5 : 0
      })
      return
    }
    const animateShackle = async () => {
      if (isUnlocked) {
        // Unlock sequence: lift with left leg shortening, then flip
        await shackleControls.start({
          d: "M13.3334 9.8V5.83333C13.3334 4.94928 12.9822 4.10143 12.3571 3.47631C11.732 2.85119 10.8841 2.5 10.0001 2.5C9.11603 2.5 8.26818 2.85119 7.64306 3.47631C7.01794 4.10143 6.66675 4.94928 6.66675 5.83333V7.5",
          y: -1.5,
          transition: { 
            duration: 0.12, 
            ease: [0.25, 0.1, 0.25, 1] // ease-out
          }
        })
        await shackleControls.start({
          d: "M10.8331 9.8V5.83333C10.8331 4.94928 11.1843 4.10143 11.8094 3.47631C12.4346 2.85119 13.2824 2.5 14.1665 2.5C15.0505 2.5 15.8984 2.85119 16.5235 3.47631C17.1486 4.10143 17.4998 4.94928 17.4998 5.83333V9.8",
          transition: { 
            type: "spring",
            stiffness: 300,
            damping: 25,
            mass: 0.8
          }
        })
      } else {
        // Lock sequence: flip first, then settle down with left leg extending
        await shackleControls.start({
          d: "M13.3334 9.8V5.83333C13.3334 4.94928 12.9822 4.10143 12.3571 3.47631C11.732 2.85119 10.8841 2.5 10.0001 2.5C9.11603 2.5 8.26818 2.85119 7.64306 3.47631C7.01794 4.10143 6.66675 4.94928 6.66675 5.83333V7.5",
          transition: { 
            type: "spring",
            stiffness: 280,
            damping: 22,
            mass: 0.9
          }
        })
        await shackleControls.start({
          d: "M13.3334 9.16667V5.83333C13.3334 4.94928 12.9822 4.10143 12.3571 3.47631C11.732 2.85119 10.8841 2.5 10.0001 2.5C9.11603 2.5 8.26818 2.85119 7.64306 3.47631C7.01794 4.10143 6.66675 4.94928 6.66675 5.83333V9.16667",
          y: 0,
          transition: { 
            duration: 0.13, 
            ease: [0.25, 0.1, 0.25, 1] // ease-out
          }
        })
      }
    }

    animateShackle()
  }, [isUnlocked, shackleControls])
  return (
    <motion.div
      className={cn('inline-flex items-center', className)}
      initial={{ scale: 1 }}
      animate={{ 
        scale: isUnlocked ? [1, 1.01, 1] : [1, 0.99, 1]
      }}
      transition={{ 
        duration: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94],
        times: [0, 0.5, 1]
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated Body */}
        <motion.path
          variants={lockBodyVariants}
          initial="locked"
          animate={isUnlocked ? "unlocked" : "locked"}
          transition={{ 
            duration: 0.25, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Animated Keyhole */}
        <motion.path
          variants={keyholeVariants}
          initial="locked"
          animate={isUnlocked ? "unlocked" : "locked"}
          transition={{ 
            duration: 0.25, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Animated Shackle */}
        <motion.path
          initial={{
            d: "M13.3334 9.16667V5.83333C13.3334 4.94928 12.9822 4.10143 12.3571 3.47631C11.732 2.85119 10.8841 2.5 10.0001 2.5C9.11603 2.5 8.26818 2.85119 7.64306 3.47631C7.01794 4.10143 6.66675 4.94928 6.66675 5.83333V9.16667",
            y: 0
          }}
          animate={shackleControls}
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  )
}

LockIcon.displayName = 'LockIcon'

export default LockIcon

