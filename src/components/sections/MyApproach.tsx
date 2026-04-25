"use client";

import { useState } from "react";
import { CycleDiagram } from "@/components/ui/CycleDiagram";
import { ManifestoSection } from "@/components/ui/ManifestoSection";
import { StepCards } from "@/components/ui/StepCards";

/**
 * My Approach Section
 *
 * Showcases the 4-step methodology for product development
 * Combines manifesto text, step cards grid, and interactive cycle diagram
 */
export default function MyApproach() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Manifesto / Opening Statement */}
        <ManifestoSection />

        {/* Two Column Layout: Cards + Diagram */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left: Step Cards Grid (50% width) */}
          <div className="w-full md:w-1/2">
            <StepCards />
          </div>

          {/* Right: Cycle Diagram (50% width) */}
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <CycleDiagram
              hoveredNode={hoveredNode}
              setHoveredNode={setHoveredNode}
            />
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-sans text-center italic mt-12"
          style={{
            fontSize: "14px",
            color: "rgba(242,237,228,0.28)",
            marginTop: "48px",
          }}
        >
          I bring systems thinking to every product I build.
        </motion.p>
      </div>
    </section>
  );
}
