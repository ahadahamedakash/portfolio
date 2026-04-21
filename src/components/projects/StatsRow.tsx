"use client";

import { motion } from "motion/react";

interface StatsRowProps {
  projectCount: number;
}

/**
 * StatsRow component
 *
 * Displays key metrics in a responsive grid layout:
 * - Products shipped (dynamic count)
 * - Full-stack projects
 * - AI-powered projects
 * - Years building
 *
 * Responsive: 2x2 grid on mobile/tablet, horizontal row on desktop
 */
export function StatsRow({ projectCount }: StatsRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="grid grid-cols-2 lg:flex lg:items-center gap-6 lg:gap-0"
    >
      <StatItem value={`${projectCount}`} label="Products shipped" />
      <StatItem
        value="2"
        label="Full-stack"
        showBorder={true}
        paddingLeft="32px"
      />
      <StatItem
        value="1"
        label="AI-powered"
        showBorder={true}
        paddingLeft="32px"
      />
      <StatItem value="3+" label="Years building" paddingLeft="32px" />
    </motion.div>
  );
}

/**
 * StatItem component
 *
 * Individual stat display with number and label
 * Optional border separator for desktop layout
 */
interface StatItemProps {
  value: string;
  label: string;
  showBorder?: boolean;
  paddingLeft?: string;
}

function StatItem({
  value,
  label,
  showBorder = false,
  paddingLeft = "0",
}: StatItemProps) {
  return (
    <div
      className="flex flex-col"
      style={
        showBorder
          ? {
              borderRight: "1px solid rgba(255,255,255,0.08)",
              paddingLeft,
            }
          : { paddingLeft }
      }
    >
      <span
        className="font-display text-[var(--color-gold)]"
        style={{ fontSize: "clamp(28px, 3vw, 36px)" }}
      >
        {value}
      </span>
      <span
        className="font-mono uppercase tracking-wider"
        style={{ fontSize: "11px", color: "rgba(242,237,228,0.28)" }}
      >
        {label}
      </span>
    </div>
  );
}
