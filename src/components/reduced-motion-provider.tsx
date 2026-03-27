"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ReducedMotionContextType {
  prefersReducedMotion: boolean;
  setReducedMotion: (reduced: boolean) => void;
}

const ReducedMotionContext = createContext<ReducedMotionContextType | null>(
  null
);

/**
 * Reduced Motion Provider
 *
 * Provides reduced motion preference context throughout the app.
 * Respects user's system preferences and allows manual override.
 */
export function ReducedMotionProvider({ children }: { children: ReactNode }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [manualOverride, setManualOverride] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      if (!manualOverride) {
        setPrefersReducedMotion(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [manualOverride]);

  const setReducedMotion = (reduced: boolean) => {
    setPrefersReducedMotion(reduced);
    setManualOverride(true);
  };

  return (
    <ReducedMotionContext.Provider
      value={{ prefersReducedMotion, setReducedMotion }}
    >
      {children}
    </ReducedMotionContext.Provider>
  );
}

/**
 * Hook to access reduced motion preference
 *
 * @returns Reduced motion state and setter
 *
 * @example
 * ```tsx
 * const { prefersReducedMotion } = useReducedMotion();
 *
 * <motion.div
 *   animate={!prefersReducedMotion ? { x: 100 } : {}}
 * />
 * ```
 */
export function useReducedMotion() {
  const context = useContext(ReducedMotionContext);
  if (!context) {
    throw new Error("useReducedMotion must be used within ReducedMotionProvider");
  }
  return context;
}
