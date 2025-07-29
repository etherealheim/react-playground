"use client"

import * as React from "react"
import { LiquidGlass } from "@specy/liquid-glass-react"

// Pure CSS-in-JS styles for maximum performance and independence
const getButtonStyles = (variant: ButtonVariant, size: ButtonSize): React.CSSProperties => {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    whiteSpace: 'nowrap',
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
    border: 'none',
    borderRadius: '9999px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'all 0.2s ease',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
  }

  // Variant styles
  const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
    default: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    },
    ghost: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    outline: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
  }

  // Size styles  
  const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
    sm: {
      height: '40px',
      padding: '8px 24px',
      fontSize: '13px',
      gap: '8px',
    },
    default: {
      height: '48px',
      padding: '12px 32px',
    },
    lg: {
      height: '64px',
      padding: '16px 48px',
      fontSize: '16px',
    },
    icon: {
      width: '48px',
      height: '48px',
      padding: '12px',
      gap: '0',
    },
  }

  return {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
  }
}

type ButtonVariant = 'default' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'default' | 'lg' | 'icon'

interface ButtonBorderProps extends Omit<React.ComponentProps<"button">, 'style'> {
  variant?: ButtonVariant
  size?: ButtonSize
  customStyle?: React.CSSProperties
}

const ButtonBorder = React.forwardRef<HTMLButtonElement, ButtonBorderProps>(
  ({ 
    variant = 'default', 
    size = 'default', 
    customStyle,
    children,
    ...props 
  }, ref) => {
    // Memoize glass style configuration based on size
    const glassStyle = React.useMemo(() => ({
      depth: 0.9,
      segments: 128,
      radius: size === 'sm' ? 0.9 : size === 'lg' ? 0.5 : 0.7,
      roughness: 0.02,
      transmission: 0.98,
      reflectivity: 0.8, 
      ior: 1.6,
      dispersion: 0.15,
      thickness: size === 'sm' ? 0.2 : size === 'lg' ? 0.6 : 0.4,
      tint: null,
    }), [size])

    // Wrapper style for LiquidGlass
    const wrapperStyle = React.useMemo((): React.CSSProperties => ({
      width: 'fit-content',
      position: 'relative',
    }), [])

    // Combined button styles
    const buttonStyles = React.useMemo(() => ({
      ...getButtonStyles(variant, size),
      ...customStyle,
    }), [variant, size, customStyle])

    return (
      <LiquidGlass
        glassStyle={glassStyle}
        wrapperStyle={wrapperStyle}
        style="border-radius: 9999px; overflow: hidden;"
      >
        <button
          ref={ref}
          style={buttonStyles}
          {...props}
        >
          {children}
        </button>
      </LiquidGlass>
    )
  }
)

ButtonBorder.displayName = "ButtonBorder"

export { ButtonBorder }
export type { ButtonBorderProps, ButtonVariant, ButtonSize } 