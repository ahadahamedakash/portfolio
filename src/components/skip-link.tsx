"use client";

import { useState } from "react";

/**
 * Skip Link Component
 *
 * Provides accessibility by allowing keyboard users to skip
 * repetitive navigation and jump directly to main content.
 *
 * Meets WCAG 2.1 Level A success criterion 2.4.1 (Bypass Blocks)
 */
export function SkipLink() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const skipToContent = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href="#main-content"
      onClick={skipToContent}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={`
        fixed top-0 left-0 z-[100] p-4 -translate-y-full
        transition-transform duration-200
        ${isFocused ? "translate-y-0" : ""}
        bg-primary text-primary-foreground
        rounded-br-lg shadow-lg
        font-medium
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        [&:not(:focus)]:sr-only
      `}
    >
      Skip to main content
    </a>
  );
}
