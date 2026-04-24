"use client";

import { motion } from "motion/react";
import { steps } from "@/lib/my-approach-data";

/**
 * Step Cards Component
 *
 * 2x2 grid displaying the 4 methodology steps
 * Each card shows ID, label, title, and description
 */
export function StepCards() {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="hover:bg-[#161614] transition-colors duration-200"
            style={{
              backgroundColor: "#111110",
              padding: "32px 28px",
              borderRight:
                index % 2 === 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
              borderBottom:
                index < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
              borderLeft: `2px solid ${step.accent}`,
              paddingLeft: "26px",
            }}
          >
            <p
              className="font-mono text-[11px] mb-2"
              style={{
                color: `${step.accent}66`,
                marginBottom: "12px",
              }}
            >
              {step.id} — {step.label}
            </p>
            <h3
              className="font-display text-[19px] mb-2"
              style={{
                color: "#F2EDE4",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              {step.title}
            </h3>
            <p
              className="font-sans text-[15px]"
              style={{
                color: "rgba(242,237,228,0.5)",
                lineHeight: 1.75,
              }}
            >
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
