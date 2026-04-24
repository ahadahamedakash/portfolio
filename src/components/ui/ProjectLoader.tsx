"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * Project Details Loader
 *
 * Engineering decisions:
 * 1. Minimal display time (800ms) - just enough for smooth transition
 * 2. Uses session-level tracking so returning visitors don't see it every time
 * 3. Lightweight animation without blocking rendering
 * 4. Progressively enhances the experience
 */
export default function ProjectLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user has seen project loader recently (session-based)
    const hasSeenLoaderRecently = (() => {
      try {
        const lastSeen = sessionStorage.getItem("last-project-loader");
        if (!lastSeen) return false;

        const timeSinceLastLoad = Date.now() - parseInt(lastSeen);
        return timeSinceLastLoad < 60000; // Don't show if seen within last minute
      } catch {
        return false;
      }
    })();

    // Skip loader if seen recently
    if (hasSeenLoaderRecently) {
      setIsVisible(false);
      return;
    }

    // Show for minimal time (800ms) then reveal content
    const timer = setTimeout(() => {
      setIsVisible(false);

      // Track when loader was last shown
      try {
        sessionStorage.setItem("last-project-loader", Date.now().toString());
      } catch {
        // Silently fail in private browsing
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "var(--color-bg-primary)" }}
        >
          <div className="relative max-w-md w-full px-10">
            {/* Minimal terminal-style loader */}
            <div
              className="rounded-xl overflow-hidden border"
              style={{
                backgroundColor: "var(--color-bg-surface)",
                borderColor: "var(--color-border-subtle)",
              }}
            >
              {/* Terminal header */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ borderColor: "var(--color-border-subtle)" }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span
                  className="font-mono text-xs ml-2"
                  style={{ color: "var(--color-gold)" }}
                >
                  project_loader.sh
                </span>
              </div>

              {/* Terminal content - simplified and faster */}
              <div className="p-6 space-y-3 font-mono text-sm">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  style={{ color: "var(--color-text-tertiary)" }}
                >
                  <span style={{ color: "var(--color-gold)" }}>$</span> Loading
                  project...
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                >
                  <div
                    className="h-1.5 rounded-full overflow-hidden"
                    style={{ backgroundColor: "var(--color-bg-overlay)" }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: "var(--color-gold)",
                        width: "100%",
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="flex items-center gap-2"
                  style={{ color: "var(--color-sage)" }}
                >
                  <span style={{ color: "var(--color-sage)" }}>✓</span>{" "}
                  <span>Ready</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-5"
                    style={{
                      backgroundColor: "var(--color-gold)",
                      marginLeft: "4px",
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Subtle decorative element */}
            <motion.div
              className="absolute -top-6 -right-6 w-12 h-12 opacity-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 48 48">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="var(--color-gold)"
                  strokeWidth="1"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
