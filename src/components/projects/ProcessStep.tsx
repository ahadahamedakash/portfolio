"use client";

import { motion } from "motion/react";

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0 },
};

/**
 * ProcessStep component
 *
 * Individual step display with:
 * - Large muted number (responsive size)
 * - Title in gold/white
 * - Description in muted gray
 * - Arrow connector (desktop only, except last item)
 *
 * Responsive:
 * - Mobile: Single column, 28px number
 * - Tablet: 2x2 grid, 36px number
 * - Desktop: Horizontal row, 36px number with arrows
 */
interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  index: number;
  isLast: boolean;
}

export function ProcessStep({
  number,
  title,
  description,
  isLast,
}: ProcessStepProps) {
  return (
    <motion.div
      variants={itemVariants}
      style={{
        flex: 1,
        padding: "0 28px",
        borderRight: isLast ? "none" : "1px solid rgba(255,255,255,0.06)",
        position: "relative",
      }}
      className="py-4 px-5 md:py-6 md:px-0 md:pr-7 lg:py-0 lg:px-7 border-b md:border-b lg:border-r border-white/[0.06]"
    >
      {/* Number - Mobile/Tablet size */}
      <span
        className="font-mono block md:hidden lg:block"
        style={{
          fontSize: "28px",
          fontWeight: 400,
          color: "rgba(181,160,106,0.1)",
          lineHeight: "1",
          marginBottom: "12px",
          display: "block",
        }}
      >
        {number}
      </span>
      <span
        className="font-mono hidden md:block lg:hidden"
        style={{
          fontSize: "36px",
          fontWeight: 400,
          color: "rgba(181,160,106,0.1)",
          lineHeight: "1",
          marginBottom: "12px",
          display: "block",
        }}
      >
        {number}
      </span>

      {/* Title */}
      <h3
        className="font-display font-bold"
        style={{ fontSize: "16px", color: "#F2EDE4", marginBottom: "8px" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="font-sans"
        style={{ fontSize: "13px", color: "rgba(242,237,228,0.4)", lineHeight: "1.65" }}
      >
        {description}
      </p>

      {/* Arrow (desktop only, not on last item) */}
      {!isLast && (
        <span
          className="font-mono absolute hidden lg:block"
          style={{ right: "-10px", top: "6px", color: "rgba(181,160,106,0.2)" }}
        >
          →
        </span>
      )}
    </motion.div>
  );
}
