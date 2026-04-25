"use client";

import { motion } from "motion/react";

export type ProjectFilter = "All" | "Featured" | "React" | "Next.js" | "Full-Stack" | "AI";

const FILTERS: ProjectFilter[] = ["All", "Featured", "React", "Next.js", "Full-Stack", "AI"];

interface ProjectsFilterProps {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
}

/**
 * ProjectsFilter component
 *
 * Displays filter pills for project filtering:
 * - All, Featured, React, Next.js, Full-Stack, AI
 *
 * Features:
 * - Active state with gold accent
 * - Hover effects
 * - Responsive layout (horizontal scroll on mobile)
 */
export default function ProjectsFilter({ activeFilter, onFilterChange }: ProjectsFilterProps) {
  return (
    <div style={{ padding: "32px 48px 0" }}>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono"
        style={{
          fontSize: "10px",
          color: "rgba(242,237,228,0.28)",
          letterSpacing: "0.1em",
          marginBottom: "12px",
        }}
      >
        // filter by stack
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {FILTERS.map((filter) => (
          <FilterPill
            key={filter}
            filter={filter}
            isActive={activeFilter === filter}
            onClick={() => onFilterChange(filter)}
          />
        ))}
      </motion.div>
    </div>
  );
}

/**
 * FilterPill component
 *
 * Individual filter button with active/hover states
 */
interface FilterPillProps {
  filter: ProjectFilter;
  isActive: boolean;
  onClick: () => void;
}

function FilterPill({ filter, isActive, onClick }: FilterPillProps) {
  const activeStyle = {
    border: "1px solid rgba(181,160,106,0.5)",
    color: "#B5A06A",
    background: "rgba(181,160,106,0.06)",
  };

  const inactiveStyle = {
    border: "1px solid rgba(255,255,255,0.06)",
    color: "rgba(242,237,228,0.5)",
  };

  return (
    <button
      onClick={onClick}
      className="rounded-md font-mono text-sm transition-all px-4 py-2"
      style={isActive ? activeStyle : inactiveStyle}
      onMouseEnter={
        !isActive
          ? (e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = "rgba(242,237,228,0.7)";
            }
          : undefined
      }
      onMouseLeave={
        !isActive
          ? (e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              e.currentTarget.style.color = "rgba(242,237,228,0.5)";
            }
          : undefined
      }
    >
      {filter}
    </button>
  );
}
