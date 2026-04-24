"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Show button after scrolling past 400px (approximately hero section height)
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 400);

      // Detect if user is actively scrolling
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            rotate: 180,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.1 },
          }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full shadow-lg backdrop-blur-sm"
          style={{
            backgroundColor: "rgba(181, 160, 106, 0.9)",
            border: "1px solid rgba(181, 160, 106, 0.3)",
            width: "48px",
            height: "48px",
          }}
          aria-label="Back to top"
        >
          <motion.div
            animate={isScrolling ? { y: [0, -4, 0] } : { y: 0 }}
            transition={{
              duration: 0.3,
              repeat: isScrolling ? Infinity : 0,
              repeatDelay: 0.1,
            }}
          >
            <ChevronUp
              size={24}
              className="mx-auto"
              style={{ color: "#111110", strokeWidth: 3 }}
            />
          </motion.div>

          {/* Subtle glow effect */}
          <div
            className="absolute inset-0 rounded-full blur-xl opacity-50"
            style={{
              backgroundColor: "rgba(181, 160, 106, 0.4)",
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
