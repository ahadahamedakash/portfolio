"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook for responsive design breakpoint detection
 *
 * @param query - Media query string (e.g., "(max-width: 768px)")
 * @returns Boolean indicating if media query matches
 *
 * @example
 * ```tsx
 * const isMobile = useMediaQuery("(max-width: 768px)");
 * const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
 * const isDesktop = useMediaQuery("(min-width: 1025px)");
 *
 * {isMobile ? <MobileComponent /> : <DesktopComponent />}
 * ```
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    // Set initial value
    setMatches(mediaQueryList.matches);

    // Listen for changes
    mediaQueryList.addEventListener("change", documentChangeHandler);
    return () =>
      mediaQueryList.removeEventListener("change", documentChangeHandler);
  }, [query]);

  return matches;
}

/**
 * Pre-defined breakpoint hooks for common screen sizes
 *
 * @example
 * ```tsx
 * const isMobile = useIsMobile();  // < 768px
 * const isTablet = useIsTablet();  // 768px - 1024px
 * const isDesktop = useIsDesktop();  // > 1024px
 * ```
 */

export function useIsMobile() {
  return useMediaQuery("(max-width: 767px)");
}

export function useIsTablet() {
  return useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
}

export function useIsDesktop() {
  return useMediaQuery("(min-width: 1025px)");
}

export function useIsLargeDesktop() {
  return useMediaQuery("(min-width: 1280px)");
}

/**
 * Hook for detecting reduced motion preference
 *
 * @returns Boolean indicating if user prefers reduced motion
 *
 * @example
 * ```tsx
 * const prefersReducedMotion = usePrefersReducedMotion();
 *
 * <motion.div
 *   animate={!prefersReducedMotion ? { opacity: 1 } : {}}
 * />
 * ```
 */
export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/**
 * Hook for detecting dark mode preference
 *
 * @returns Boolean indicating if user prefers dark mode
 *
 * @example
 * ```tsx
 * const prefersDark = usePrefersDarkMode();
 *
 * <div className={prefersDark ? 'dark' : 'light'}>
 *   Content
 * </div>
 * ```
 */
export function usePrefersDarkMode() {
  return useMediaQuery("(prefers-color-scheme: dark)");
}
