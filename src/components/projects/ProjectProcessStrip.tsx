"use client";

import { motion } from "motion/react";
import { ProcessStep } from "./ProcessStep";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0 },
};

/**
 * ProjectProcessStrip component
 *
 * Displays the 4-step development process:
 * - Find the problem
 * - Design the system
 * - Ship and measure
 * - Optimize relentlessly
 *
 * Responsive layout:
 * - Desktop: Horizontal row with arrows
 * - Tablet: 2x2 grid
 * - Mobile: Single column
 */
export default function ProjectProcessStrip() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      style={{
        padding: "48px 48px",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        background: "rgba(255,255,255,0.01)",
      }}
    >
      <div className="max-w-7xl mx-auto  px-6 md:px-10">
        {/* Section Label */}
        <motion.p
          variants={itemVariants}
          className="font-mono"
          style={{
            fontSize: "10px",
            color: "rgba(181,160,106,0.5)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          // how every project starts
        </motion.p>

        {/* 4-Step Horizontal Strip */}
        <div
          className="flex items-stretch md:grid md:grid-cols-2 lg:flex"
          style={{ gap: 0 }}
        >
          <ProcessStep
            number="01"
            title="Find the problem"
            description="Real pain, real people. Every build starts with a question worth answering."
            index={0}
            isLast={false}
          />
          <ProcessStep
            number="02"
            title="Design the system"
            description="Architecture first. Data flows, roles, failure points — planned before a line is written."
            index={1}
            isLast={false}
          />
          <ProcessStep
            number="03"
            title="Ship and measure"
            description="Working software over perfect software. Then iterate with real data and real feedback."
            index={2}
            isLast={false}
          />
          <ProcessStep
            number="04"
            title="Optimize relentlessly"
            description="35% bundle reduction. 40% faster dev time. Numbers don't lie — neither do results."
            index={3}
            isLast={true}
          />
        </div>
      </div>
    </motion.section>
  );
}
