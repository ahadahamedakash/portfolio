"use client";

import { motion } from "motion/react";
import { AvailabilityBadges } from "@/components/ui/AvailabilityBadges";

/**
 * Contact Content Section Component
 *
 * Left column of contact section with headline, description,
 * availability badges, and "Hello" watermark
 */
export function ContactContent() {
  return (
    <motion.div
      className="lg:w-[55%] relative"
      style={{ position: "relative" }}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Top Label */}
      <p
        className="font-mono text-xs mb-4"
        style={{
          fontSize: "11px",
          color: "var(--color-gold)",
          marginBottom: "16px",
        }}
      >
        // let&apos;s_connect()
      </p>

      {/* Main Heading */}
      <h1
        className="font-display font-bold mb-4"
        style={{
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: "700",
          color: "#F2EDE4",
          lineHeight: "1.1",
          marginBottom: "16px",
        }}
      >
        Got a problem
        <br />
        worth solving?
      </h1>

      {/* Italic Subline */}
      <p
        className="font-display italic mb-6"
        style={{
          fontSize: "22px",
          color: "#B5A06A",
          marginBottom: "24px",
        }}
      >
        Let&apos;s talk.
      </p>

      {/* Description Paragraph */}
      <p
        className="font-sans"
        style={{
          fontSize: "15px",
          color: "rgba(242,237,228,0.55)",
          lineHeight: "1.8",
          maxWidth: "420px",
          marginBottom: "40px",
        }}
      >
        I&apos;m open to full-time roles, freelance projects, and
        interesting collaborations. If you have something worth building,
        reach out.
      </p>

      {/* Availability Badges */}
      <AvailabilityBadges />

      {/* Gold Line Divider */}
      <div
        className="rounded-full"
        style={{
          width: "60px",
          height: "1px",
          backgroundColor: "#B5A06A",
        }}
      />

      {/* "Hello" Watermark */}
      <div
        className="absolute bottom-0 left-0 select-none pointer-events-none hidden lg:block"
        style={{
          bottom: "-20px",
          left: "-10px",
          fontFamily: "var(--font-display)",
          fontSize: "180px",
          fontWeight: "700",
          color: "rgba(181,160,106,0.03)",
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: "1",
        }}
      >
        Hello
      </div>
    </motion.div>
  );
}
