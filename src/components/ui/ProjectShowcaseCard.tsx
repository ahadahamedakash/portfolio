"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ExternalLink, Code, ArrowRight } from "lucide-react";

interface ProjectShowcaseCardProps {
  index: number;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  githubBackend?: string;
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProjectShowcaseCard({
  index,
  slug,
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
  githubBackend,
}: ProjectShowcaseCardProps) {
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      variants={itemVariants}
      className="group relative border rounded-xl overflow-hidden transition-all duration-300 hover:border-[var(--color-gold)]/30"
      style={{
        backgroundColor: "var(--color-bg-surface)",
        borderColor: "var(--color-border-subtle)",
      }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-5 md:p-6">
        {/* Number */}
        <div
          className="font-display font-bold flex-shrink-0"
          style={{
            fontSize: "clamp(24px, 4vw, 32px)",
            color: "var(--color-gold)",
            minWidth: "60px",
          }}
        >
          {projectNumber}
        </div>

        {/* Project Info */}
        <div className="flex-1 min-w-0">
          <h3
            className="font-display text-xl md:text-2xl font-bold mb-2 group-hover:text-[var(--color-gold)] transition-colors"
            style={{ color: "var(--color-text-primary)" }}
          >
            {title}
          </h3>
          <p
            className="font-sans font-light text-sm mb-3 line-clamp-2"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-2.5 py-1 rounded-md border"
                style={{
                  backgroundColor: "var(--color-bg-overlay)",
                  borderColor: "var(--color-border-subtle)",
                  color: "var(--color-text-tertiary)",
                }}
              >
                {tech}
              </span>
            ))}
            {technologies.length > 5 && (
              <span
                className="font-mono text-xs px-2.5 py-1 rounded-md"
                style={{
                  color: "var(--color-text-tertiary)",
                }}
              >
                +{technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border transition-colors"
            style={{
              borderColor: "var(--color-border-subtle)",
              color: "var(--color-text-secondary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-gold)";
              e.currentTarget.style.color = "var(--color-gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border-subtle)";
              e.currentTarget.style.color = "var(--color-text-secondary)";
            }}
            title="Live Demo"
          >
            <ExternalLink size={16} />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border transition-colors"
            style={{
              borderColor: "var(--color-border-subtle)",
              color: "var(--color-text-secondary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-gold)";
              e.currentTarget.style.color = "var(--color-gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border-subtle)";
              e.currentTarget.style.color = "var(--color-text-secondary)";
            }}
            title="Frontend Code"
          >
            <Code size={16} />
          </a>
          {githubBackend && (
            <a
              href={githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border transition-colors"
              style={{
                borderColor: "var(--color-border-subtle)",
                color: "var(--color-text-secondary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-gold)";
                e.currentTarget.style.color = "var(--color-gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border-subtle)";
                e.currentTarget.style.color = "var(--color-text-secondary)";
              }}
              title="Backend Code"
            >
              <Code size={16} />
            </a>
          )}
          <Link
            href={`/projects/${slug}`}
            className="p-2.5 rounded-lg border transition-colors"
            style={{
              borderColor: "rgba(181, 160, 106, 0.3)",
              color: "#B5A06A",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(181, 160, 106, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
            title="View Details"
          >
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
