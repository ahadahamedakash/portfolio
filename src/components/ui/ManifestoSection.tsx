"use client";

import { motion } from "motion/react";

/**
 * Manifesto Section Component
 *
 * Opening statement of the methodology section
 * Describes the background and approach to problem-solving
 */
export function ManifestoSection() {
  return (
    <motion.div
      className="mb-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-[11px] text-center mb-4"
        style={{ color: "var(--color-gold)" }}
      >
        // how_I_think.ts
      </motion.p>

      <motion.div
        className="max-w-[680px] mx-auto"
        style={{ marginBottom: "40px" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-display text-center leading-relaxed"
          style={{
            fontSize: "clamp(18px, 2.5vw, 26px)",
            color: "rgba(242,237,228,0.8)",
            lineHeight: 1.65,
          }}
        >
          Medical background taught me to{" "}
          <span style={{ color: "#B5A06A" }}>diagnose before treating.</span>
          <br />
          <span style={{ color: "#C8845A" }}>Competitive programming</span> taught
          me to reason under pressure. <br />
          <span style={{ color: "#B5A06A" }}>Building products</span> taught me
          to ship real solutions.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mx-auto"
        style={{
          width: "60px",
          height: "1px",
          backgroundColor: "#B5A06A",
          marginBottom: "56px",
        }}
      />
    </motion.div>
  );
}
