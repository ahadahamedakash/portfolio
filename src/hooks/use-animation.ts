"use client";

import { useEffect, useState } from "react";
import { animate } from "motion/react";
import { useMotionValue } from "motion/react";
import { usePrefersReducedMotion } from "./use-media-query";

/**
 * Custom hook for typing animation effect
 *
 * @param text - Text to type out
 * @param charDuration - Duration per character in seconds (default: 0.1)
 * @param onComplete - Callback when typing completes
 * @returns Object containing typing state and ref
 *
 * @example
 * ```tsx
 * const { typedText, textRef, isComplete } = useTypingAnimation(
 *   "Hello World",
 *   0.1
 * );
 *
 * <span ref={textRef}>{typedText}</span>
 * ```
 */
export function useTypingAnimation(
  text: string,
  charDuration: number = 0.1,
  onComplete?: () => void
) {
  const progress = useMotionValue(0);
  const [typedText, setTypedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Skip animation if reduced motion is preferred
    if (prefersReducedMotion) {
      setTypedText(text);
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const totalDuration = text.length * charDuration;

    const controls = animate(progress, text.length, {
      duration: totalDuration,
      ease: "easeInOut",
      onUpdate: (value) => {
        setTypedText(text.slice(0, Math.floor(value)));
      },
      onComplete: () => {
        setIsComplete(true);
        onComplete?.();
      },
    });

    return () => controls.stop();
  }, [text, charDuration, progress, onComplete, prefersReducedMotion]);

  return { typedText, isComplete, progress };
}

/**
 * Custom hook for fade-in animation on mount
 *
 * @param duration - Animation duration in seconds (default: 0.6)
 * @param delay - Animation delay in seconds (default: 0)
 * @returns Object containing animation props
 *
 * @example
 * ```tsx
 * const { fadeInProps } = useFadeInAnimation(0.6, 0.2);
 *
 * <motion.div {...fadeInProps}>
 *   Content fades in
 * </motion.div>
 * ```
 */
export function useFadeInAnimation(duration: number = 0.6, delay: number = 0) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return {
      initial: {},
      animate: {},
      transition: { duration: 0 },
    };
  }

  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay },
  };
}

/**
 * Custom hook for slide-in animation
 *
 * @param direction - Direction to slide from ("left" | "right" | "up" | "down")
 * @param duration - Animation duration in seconds (default: 0.5)
 * @param delay - Animation delay in seconds (default: 0)
 * @returns Object containing animation props
 *
 * @example
 * ```tsx
 * const { slideInProps } = useSlideInAnimation("left", 0.5, 0.1);
 *
 * <motion.div {...slideInProps}>
 *   Content slides in from left
 * </motion.div>
 * ```
 */
export function useSlideInAnimation(
  direction: "left" | "right" | "up" | "down" = "up",
  duration: number = 0.5,
  delay: number = 0
) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return {
      initial: {},
      animate: {},
      transition: { duration: 0 },
    };
  }

  const directionMap = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: 50 },
    down: { x: 0, y: -50 },
  };

  const initialPosition = directionMap[direction];

  return {
    initial: { opacity: 0, ...initialPosition },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: { duration, delay },
  };
}

/**
 * Custom hook for staggered children animation
 *
 * @param staggerDelay - Delay between each child in seconds (default: 0.1)
 * @returns Object containing variants for staggered animation
 *
 * @example
 * ```tsx
 * const { containerVariants, childVariants } = useStaggeredAnimation(0.1);
 *
 * <motion.div variants={containerVariants} initial="hidden" animate="show">
 *   {items.map((item) => (
 *     <motion.key key={item.id} variants={childVariants}>
 *       {item.content}
 *     </motion.div>
 *   ))}
 * </motion.div>
 * ```
 */
export function useStaggeredAnimation(staggerDelay: number = 0.1) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return { containerVariants, childVariants };
}

/**
 * Custom hook for hover animation scale
 *
 * @param scale - Scale amount on hover (default: 1.05)
 * @returns Object containing hover props
 *
 * @example
 * ```tsx
 * const { hoverProps } = useHoverScaleAnimation(1.1);
 *
 * <motion.div {...hoverProps}>
 *   Content scales on hover
 * </motion.div>
 * ```
 */
export function useHoverScaleAnimation(scale: number = 1.05) {
  return {
    whileHover: { scale },
    whileTap: { scale: scale - 0.05 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  };
}

/**
 * Custom hook for pulse animation
 *
 * @param duration - Pulse duration in seconds (default: 2)
 * @returns Object containing animation props
 *
 * @example
 * ```tsx
 * const { pulseProps } = usePulseAnimation(2);
 *
 * <motion.div {...pulseProps}>
 *   Pulsing content
 * </motion.div>
 * ```
 */
export function usePulseAnimation(duration: number = 2) {
  return {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
    },
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };
}
