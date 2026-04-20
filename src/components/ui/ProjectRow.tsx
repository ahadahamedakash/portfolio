"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface ProjectRowProps {
  title: string;
  description: string;
  image: string;
  stack: string[];
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  githubBackendUrl?: string;
  index?: number;
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

export default function ProjectRow({
  title,
  description,
  image,
  stack,
  featured = false,
  liveUrl,
  githubUrl,
  githubBackendUrl,
  index = 0,
}: ProjectRowProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isEven = index % 2 === 0;
  const imageOnLeft = isEven;

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl mb-6"
      style={{
        minHeight: "380px",
        border: isHovered ? "1px solid rgba(181,160,106,0.25)" : "1px solid rgba(255,255,255,0.07)",
        backgroundColor: "#161614",
        marginBottom: "24px",
        transition: "border-color 0.3s",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row h-full">
        {/* Image Side */}
        <div
          className="relative overflow-hidden md:flex-1"
          style={{
            order: imageOnLeft ? 0 : 1,
            width: "100%",
            height: "240px",
          }}
        >
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 58vw"
              priority={index < 2}
            />
          </motion.div>

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-0 left-0 z-10">
              <span
                className="inline-block px-3 py-1.5 text-[10px] font-medium uppercase"
                style={{
                  backgroundColor: "rgba(200,132,90,0.9)",
                  color: "#111110",
                  fontFamily: "var(--font-mono)",
                  borderRadius: "0 0 8px 0",
                }}
              >
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content Side */}
        <div
          className="flex flex-col justify-center md:flex-[0_0_42%]"
          style={{
            order: imageOnLeft ? 1 : 0,
            padding: "24px",
          }}
        >
          {/* Project Number */}
          <div
            className="font-mono text-xs mb-3"
            style={{
              fontSize: "11px",
              color: "rgba(181,160,106,0.4)",
              marginBottom: "12px",
            }}
          >
            {(index + 1).toString().padStart(2, "0")}
          </div>

          {/* Title */}
          <h3
            className="font-display font-bold mb-3"
            style={{
              fontSize: "26px",
              color: "#F2EDE4",
              fontWeight: "700",
              marginBottom: "12px",
              lineHeight: "1.2",
            }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="font-sans text-sm mb-5"
            style={{
              fontSize: "14px",
              color: "rgba(242,237,228,0.55)",
              lineHeight: "1.75",
              marginBottom: "20px",
            }}
          >
            {description}
          </p>

          {/* Tech Tags */}
          <div
            className="flex flex-wrap gap-1.5 mb-7"
            style={{
              gap: "6px",
              marginBottom: "28px",
            }}
          >
            {stack.map((tech) => (
              <span
                key={tech}
                className="inline-block"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "0.5px solid rgba(255,255,255,0.1)",
                  color: "rgba(242,237,228,0.45)",
                  padding: "4px 10px",
                  borderRadius: "4px",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div
            className="flex flex-wrap gap-3 mt-auto"
            style={{
              gap: "12px",
            }}
          >
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: "#B5A06A",
                  color: "#111110",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: "500",
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
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(242,237,228,0.6)",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                }}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                Frontend
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
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(242,237,228,0.6)",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                }}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                Backend
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
