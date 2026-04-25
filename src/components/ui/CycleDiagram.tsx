"use client";

import { motion } from "motion/react";
import { steps } from "@/lib/my-approach-data";

interface CycleDiagramProps {
  hoveredNode: string | null;
  setHoveredNode: (node: string | null) => void;
}

/**
 * Cycle Diagram Component
 *
 * Animated SVG showing the iterative development process
 * Displays 4 nodes in a circular pattern with hover interactions
 */
export function CycleDiagram({ hoveredNode, setHoveredNode }: CycleDiagramProps) {
  return (
    <div
      className="relative"
      style={{ maxWidth: "480px", width: "100%" }}
    >
      <svg
        viewBox="0 0 440 440"
        className="w-full h-auto"
        style={{ display: "block" }}
      >
        {/* Concentric circles */}
        <circle
          cx="220"
          cy="220"
          r="100"
          fill="none"
          stroke="rgba(181,160,106,0.06)"
          strokeWidth="1"
        />
        <circle
          cx="220"
          cy="220"
          r="140"
          fill="none"
          stroke="rgba(181,160,106,0.06)"
          strokeWidth="1"
        />

        {/* Center circle */}
        <circle
          cx="220"
          cy="220"
          r="42"
          fill="#161614"
          stroke="rgba(181,160,106,0.12)"
          strokeWidth="1"
        />
        <text
          x="220"
          y="215"
          textAnchor="middle"
          className="font-mono"
          style={{ fontSize: "9px", fill: "#B5A06A", opacity: 0.5 }}
        >
          always
        </text>
        <text
          x="220"
          y="230"
          textAnchor="middle"
          className="font-display"
          style={{
            fontSize: "12px",
            fill: "#B5A06A",
            fontWeight: "bold",
          }}
        >
          looping
        </text>

        {/* Node: Diagnose (Top) */}
        <g
          onMouseEnter={() => setHoveredNode("01")}
          onMouseLeave={() => setHoveredNode(null)}
          style={{ cursor: "pointer" }}
        >
          <circle
            cx="220"
            cy="80"
            r={hoveredNode === "01" ? "40" : "36"}
            fill="#1A1A18"
            stroke="#B5A06A"
            strokeWidth="1"
            style={{
              transition: "all 0.2s ease",
              strokeOpacity: hoveredNode === "01" ? 0.7 : 0.3,
            }}
          />
          <text
            x="220"
            y="75"
            textAnchor="middle"
            className="font-mono"
            style={{ fontSize: "9px", fill: "#B5A06A", opacity: 0.5 }}
          >
            01
          </text>
          <text
            x="220"
            y="90"
            textAnchor="middle"
            className="font-display"
            style={{
              fontSize: "11px",
              fill: "#F2EDE4",
              fontWeight: "bold",
            }}
          >
            Diagnose
          </text>
        </g>

        {/* Node: Build (Right) */}
        <g
          onMouseEnter={() => setHoveredNode("02")}
          onMouseLeave={() => setHoveredNode(null)}
          style={{ cursor: "pointer" }}
        >
          <circle
            cx="360"
            cy="220"
            r={hoveredNode === "02" ? "40" : "36"}
            fill="#1A1A18"
            stroke="#C8845A"
            strokeWidth="1"
            style={{
              transition: "all 0.2s ease",
              strokeOpacity: hoveredNode === "02" ? 0.7 : 0.3,
            }}
          />
          <text
            x="360"
            y="215"
            textAnchor="middle"
            className="font-mono"
            style={{ fontSize: "9px", fill: "#C8845A", opacity: 0.5 }}
          >
            02
          </text>
          <text
            x="360"
            y="230"
            textAnchor="middle"
            className="font-display"
            style={{
              fontSize: "11px",
              fill: "#F2EDE4",
              fontWeight: "bold",
            }}
          >
            Build
          </text>
        </g>

        {/* Node: Measure (Bottom) */}
        <g
          onMouseEnter={() => setHoveredNode("03")}
          onMouseLeave={() => setHoveredNode(null)}
          style={{ cursor: "pointer" }}
        >
          <circle
            cx="220"
            cy="360"
            r={hoveredNode === "03" ? "40" : "36"}
            fill="#1A1A18"
            stroke="#6B8C6B"
            strokeWidth="1"
            style={{
              transition: "all 0.2s ease",
              strokeOpacity: hoveredNode === "03" ? 0.7 : 0.3,
            }}
          />
          <text
            x="220"
            y="355"
            textAnchor="middle"
            className="font-mono"
            style={{ fontSize: "9px", fill: "#6B8C6B", opacity: 0.5 }}
          >
            03
          </text>
          <text
            x="220"
            y="370"
            textAnchor="middle"
            className="font-display"
            style={{
              fontSize: "11px",
              fill: "#F2EDE4",
              fontWeight: "bold",
            }}
          >
            Measure
          </text>
        </g>

        {/* Node: Iterate (Left) */}
        <g
          onMouseEnter={() => setHoveredNode("04")}
          onMouseLeave={() => setHoveredNode(null)}
          style={{ cursor: "pointer" }}
        >
          <circle
            cx="80"
            cy="220"
            r={hoveredNode === "04" ? "40" : "36"}
            fill="#1A1A18"
            stroke="#B5A06A"
            strokeWidth="1"
            style={{
              transition: "all 0.2s ease",
              strokeOpacity: hoveredNode === "04" ? 0.7 : 0.3,
            }}
          />
          <text
            x="80"
            y="215"
            textAnchor="middle"
            className="font-mono"
            style={{ fontSize: "9px", fill: "#B5A06A", opacity: 0.5 }}
          >
            04
          </text>
          <text
            x="80"
            y="230"
            textAnchor="middle"
            className="font-display"
            style={{
              fontSize: "11px",
              fill: "#F2EDE4",
              fontWeight: "bold",
            }}
          >
            Iterate
          </text>
        </g>
      </svg>

      {/* Tooltip */}
      {hoveredNode && (
        <div
          className="absolute left-1/2 -translate-x-1/2 mt-4 pointer-events-none z-10 font-mono text-[10px] text-center p-2 rounded max-w-[200px]"
          style={{
            backgroundColor: "#1A1A18",
            border: "1px solid rgba(181,160,106,0.2)",
            color: "rgba(242,237,228,0.8)",
            top: "100%",
          }}
        >
          {steps.find((s) => s.id === hoveredNode)?.description}
        </div>
      )}
    </div>
  );
}
