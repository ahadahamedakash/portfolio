"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook for scroll position tracking and detection
 *
 * @param threshold - Scroll position threshold (default: 50)
 * @returns Object containing scroll state and utilities
 *
 * @example
 * ```tsx
 * const { scrolled, scrollToTop } = useScroll(50);
 *
 * <div className={scrolled ? 'bg-white' : 'bg-transparent'}>
 *   Content
 * </div>
 * ```
 */
export function useScroll(threshold: number = 50) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Check if user has scrolled past threshold
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setScrolled(currentScrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  // Scroll to top function
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Scroll to element function
  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return {
    scrolled,
    scrollY,
    scrollToTop,
    scrollToElement,
  };
}

/**
 * Custom hook for detecting if element is in viewport
 *
 * @param threshold - Percentage of element visible (default: 0.1)
 * @returns Object containing ref and inView state
 *
 * @example
 * ```tsx
 * const { ref, inView } = useInView(0.1);
 *
 * <div ref={ref}>
 *   {inView ? 'Visible' : 'Not visible'}
 * </div>
 * ```
 */
export function useInView(threshold: number = 0.1) {
  const [inView, setInView] = useState(false);
  const [ref, setRef] = useState<Element | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: "0px",
      }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return { ref: setRef, inView };
}

/**
 * Custom hook for scroll direction detection
 *
 * @param threshold - Scroll threshold to detect direction (default: 10)
 * @returns Object containing scroll direction
 *
 * @example
 * ```tsx
 * const { scrollDirection } = useScrollDirection();
 *
 * <div className={scrollDirection === 'up' ? 'visible' : 'hidden'}>
 *   Header
 * </div>
 * ```
 */
export function useScrollDirection(threshold: number = 10) {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";

      if (
        Math.abs(scrollY - lastScrollY) > threshold &&
        scrollDirection !== direction
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection, threshold]);

  return { scrollDirection };
}
