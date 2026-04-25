"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderContextType {
  isLoading: boolean;
}

const PreloaderContext = createContext<PreloaderContextType>({
  isLoading: true,
});

export const usePreloader = () => useContext(PreloaderContext);

interface PreloaderProviderProps {
  children: ReactNode;
}

/**
 * PreloaderProvider - Manages first-impression preloader state
 *
 * Engineering decisions:
 * 1. Uses sessionStorage (not localStorage) - shows once per browser session
 * 2. Blocks content rendering until preloader completes (no flash)
 * 3. Waits for fonts + minimum display time for brand recognition
 * 4. Graceful degradation if sessionStorage fails
 */
export function PreloaderProvider({ children }: PreloaderProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Check if user has seen preloader in this session
    const hasSeenPreloader = (() => {
      try {
        return sessionStorage.getItem("has-seen-preloader") === "true";
      } catch {
        // Fallback for private browsing mode
        return false;
      }
    })();

    // Set initial state - preloading is active
    document.body.setAttribute("data-preloading", "true");

    if (hasSeenPreloader) {
      // Skip preloader, show content immediately
      document.body.setAttribute("data-preloading", "false");
      setIsLoading(false);
      setShowPreloader(false);
      return;
    }

    // Show preloader for new session visitors
    setShowPreloader(true);

    // Wait for document fonts to be ready
    const fontsReady = document.fonts.ready;

    // Minimum 1.8s for brand recognition, maximum 3s wait
    Promise.race([
      fontsReady,
      new Promise((resolve) => setTimeout(resolve, 3000)),
    ]).then(() => {
      // Ensure minimum display time for smooth animation
      setTimeout(() => {
        setShowPreloader(false);

        // Small delay for exit animation before showing content
        setTimeout(() => {
          document.body.setAttribute("data-preloading", "false");
          setIsLoading(false);

          // Mark as seen for this session
          try {
            sessionStorage.setItem("has-seen-preloader", "true");
          } catch {
            // Silently fail in private browsing
          }
        }, 600);
      }, 1800);
    });
  }, []);

  return (
    <PreloaderContext.Provider value={{ isLoading }}>
      <PreloaderAnimation isVisible={showPreloader} />
      <div data-main-content>
        {children}
      </div>
    </PreloaderContext.Provider>
  );
}

/**
 * PreloaderAnimation - The visual preloader component
 * Separated for better code organization
 */
function PreloaderAnimation({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          data-preloader
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: "var(--color-bg-primary)" }}
        >
          <div className="relative">
            {/* Outer spinning ring */}
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 0.75,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="rgba(181, 160, 106, 0.1)"
                strokeWidth="2"
              />
              <path
                d="M60 6 A54 54 0 0 1 114 60"
                fill="none"
                stroke="var(--color-gold)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </motion.svg>

            {/* Inner spinning ring (counter-rotating) */}
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              className="absolute top-0 left-0"
              initial={{ rotate: 360 }}
              animate={{ rotate: 0 }}
              transition={{
                duration: 0.75,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ opacity: 0.6 }}
            >
              <circle
                cx="60"
                cy="60"
                r="42"
                fill="none"
                stroke="rgba(200, 132, 90, 0.15)"
                strokeWidth="1.5"
              />
              <path
                d="M60 18 A42 42 0 0 1 102 60"
                fill="none"
                stroke="var(--color-copper)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </motion.svg>

            {/* Center content */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <div className="text-center">
                {/* Logo/Name */}
                <motion.div
                  className="font-display font-bold mb-1"
                  style={{
                    fontSize: "32px",
                    color: "var(--color-text-primary)",
                    letterSpacing: "0.02em",
                  }}
                >
                  Ah<span style={{ color: "var(--color-gold)" }}>@</span>d
                </motion.div>

                {/* Loading indicator */}
                <motion.div
                  className="flex justify-center gap-1"
                  style={{ marginTop: "8px" }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: "var(--color-gold)",
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Circuit pattern decoration */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ opacity: 0.15 }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg width="120" height="120" viewBox="0 0 120 120">
                {/* Corner accents */}
                <path
                  d="M 10 10 L 10 20 M 10 10 L 20 10"
                  stroke="var(--color-gold)"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M 110 10 L 110 20 M 110 10 L 100 10"
                  stroke="var(--color-gold)"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M 10 110 L 10 100 M 10 110 L 20 110"
                  stroke="var(--color-gold)"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M 110 110 L 110 100 M 110 110 L 100 110"
                  stroke="var(--color-gold)"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Default export for backward compatibility
export default function Preloader() {
  return null; // This is now handled by PreloaderProvider
}
