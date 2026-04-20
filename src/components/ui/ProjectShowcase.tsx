"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface ProjectShowcaseProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  githubBackendUrl?: string;
  index: number;
}

// Custom GitHub icon since lucide-react doesn't export it
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 5c-.73 1.02-1.08 2.25-1 3.5C4 12 7 14 10 14c0 1 .55 2.55 1 3.5V22h4Z" />
    </svg>
  );
}

export default function ProjectShowcase({
  title,
  description,
  image,
  technologies,
  featured,
  liveUrl,
  githubUrl,
  githubBackendUrl,
  index,
}: ProjectShowcaseProps) {
  // Tech tag limits per screen size
  const maxTagsDesktop = 5;
  const maxTagsTablet = 4;
  const maxTagsMobile = 3;
  const maxTagsSmallMobile = 3;

  const getMaxTags = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 480) return maxTagsSmallMobile;
      if (window.innerWidth < 768) return maxTagsMobile;
      if (window.innerWidth < 1024) return maxTagsTablet;
    }
    return maxTagsDesktop;
  };

  const maxTags = getMaxTags();
  const displayedTech = technologies.slice(0, maxTags);
  const remainingCount = technologies.length - maxTags;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Image Wrapper */}
      <div
        className="relative overflow-hidden"
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          borderRadius: "12px 12px 0 0",
        }}
      >
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            style={{ objectPosition: "top" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            priority={index < 2}
          />
        </motion.div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-0 left-0 z-10">
            <span
              className="inline-block"
              style={{
                backgroundColor: "rgba(200,132,90,0.92)",
                color: "#111110",
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                fontWeight: "600",
                textTransform: "uppercase",
                padding: "6px 14px",
                borderRadius: "0 0 8px 0",
              }}
            >
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Details Row */}
      <div
        style={{
          backgroundColor: "#161614",
          border: "1px solid rgba(255,255,255,0.07)",
          borderTop: "none",
          borderRadius: "0 0 12px 12px",
          padding: "28px 32px",
        }}
      >
        {/* Desktop/Tablet Layout: Grid 2 columns */}
        <div className="hidden md:grid" style={{ gridTemplateColumns: "1fr auto", gap: "24px", alignItems: "start" }}>
          {/* Left Side */}
          <div>
            {/* Project Number */}
            <div
              className="font-mono text-xs mb-2"
              style={{
                fontSize: "11px",
                color: "rgba(181,160,106,0.4)",
                marginBottom: "8px",
              }}
            >
              {(index + 1).toString().padStart(2, "0")}
            </div>

            {/* Title */}
            <h3
              className="font-display font-bold mb-2"
              style={{
                fontSize: "22px",
                color: "#F2EDE4",
                fontWeight: "700",
                marginBottom: "10px",
                lineHeight: "1.2",
              }}
            >
              {title}
            </h3>

            {/* Description */}
            <p
              className="font-sans text-sm mb-4"
              style={{
                fontSize: "14px",
                color: "rgba(242,237,228,0.55)",
                lineHeight: "1.75",
                marginBottom: "16px",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5" style={{ gap: "6px" }}>
              {displayedTech.map((tech) => (
                <span
                  key={tech}
                  className="inline-block"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "0.5px solid rgba(255,255,255,0.1)",
                    color: "rgba(242,237,228,0.45)",
                    padding: "3px 10px",
                    borderRadius: "4px",
                  }}
                >
                  {tech}
                </span>
              ))}
              {remainingCount > 0 && (
                <span
                  className="inline-block"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    backgroundColor: "transparent",
                    border: "0.5px solid rgba(200,132,90,0.4)",
                    color: "#C8845A",
                    padding: "3px 10px",
                    borderRadius: "4px",
                  }}
                >
                  +{remainingCount}
                </span>
              )}
            </div>
          </div>

          {/* Right Side - Buttons Stacked */}
          <div className="flex flex-col gap-2.5" style={{ gap: "10px", alignItems: "flex-end" }}>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: "#B5A06A",
                  color: "#111110",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: "500",
                  width: "160px",
                  justifyContent: "center",
                }}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(242,237,228,0.65)",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  width: "160px",
                  justifyContent: "center",
                }}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                {githubBackendUrl ? "Frontend" : "Source Code"}
              </a>
            )}

            {githubBackendUrl && (
              <a
                href={githubBackendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(242,237,228,0.65)",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  width: "160px",
                  justifyContent: "center",
                }}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                Backend
              </a>
            )}
          </div>
        </div>

        {/* Mobile Layout: Stack Vertically */}
        <div className="md:hidden flex flex-col">
          {/* Left Side Content */}
          <div className="mb-4">
            {/* Project Number */}
            <div
              className="font-mono text-xs mb-2"
              style={{
                fontSize: "11px",
                color: "rgba(181,160,106,0.4)",
                marginBottom: "8px",
              }}
            >
              {(index + 1).toString().padStart(2, "0")}
            </div>

            {/* Title */}
            <h3
              className="font-display font-bold mb-2"
              style={{
                fontSize: "22px",
                color: "#F2EDE4",
                fontWeight: "700",
                marginBottom: "10px",
                lineHeight: "1.2",
              }}
            >
              {title}
            </h3>

            {/* Description */}
            <p
              className="font-sans text-sm mb-4"
              style={{
                fontSize: "14px",
                color: "rgba(242,237,228,0.55)",
                lineHeight: "1.75",
                marginBottom: "16px",
              }}
            >
              {description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4" style={{ gap: "6px" }}>
              {displayedTech.map((tech) => (
                <span
                  key={tech}
                  className="inline-block"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "0.5px solid rgba(255,255,255,0.1)",
                    color: "rgba(242,237,228,0.45)",
                    padding: "3px 10px",
                    borderRadius: "4px",
                  }}
                >
                  {tech}
                </span>
              ))}
              {remainingCount > 0 && (
                <span
                  className="inline-block"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    backgroundColor: "transparent",
                    border: "0.5px solid rgba(200,132,90,0.4)",
                    color: "#C8845A",
                    padding: "3px 10px",
                    borderRadius: "4px",
                  }}
                >
                  +{remainingCount}
                </span>
              )}
            </div>
          </div>

          {/* Right Side - Buttons Horizontal */}
          <div className="flex flex-wrap gap-2" style={{ gap: "8px" }}>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md transition-opacity hover:opacity-80 flex-1"
                style={{
                  backgroundColor: "#B5A06A",
                  color: "#111110",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: "500",
                  minWidth: "120px",
                  justifyContent: "center",
                }}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md transition-opacity hover:opacity-80 flex-1"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(242,237,228,0.65)",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  minWidth: "120px",
                  justifyContent: "center",
                }}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                {githubBackendUrl ? "Frontend" : "Source"}
              </a>
            )}

            {githubBackendUrl && (
              <a
                href={githubBackendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md transition-opacity hover:opacity-80 flex-1"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(242,237,228,0.65)",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  minWidth: "120px",
                  justifyContent: "center",
                }}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                Backend
              </a>
            )}
          </div>
        </div>

        {/* Small Mobile (< 480px) - Full Width Buttons */}
        <style jsx>{`
          @media (max-width: 479px) {
            .md\\:hidden > div:last-child > a {
              width: 100% !important;
              flex: 0 0 100% !important;
            }
          }
        `}</style>
      </div>
    </motion.div>
  );
}
