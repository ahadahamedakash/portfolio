"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

// Custom GitHub icon component since lucide-react doesn't export Github
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

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  images: string[];
  stack: string[];
  featured?: boolean;
  year?: string;
  liveUrl?: string;
  githubUrl?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  images: _images,
  stack,
  featured = false,
  year,
  liveUrl,
  githubUrl,
  index = 0,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const maxRotation = 8;
    const rotateXValue = (mouseY / (rect.height / 2)) * -maxRotation;
    const rotateYValue = (mouseX / (rect.width / 2)) * maxRotation;

    setRotateX(Math.max(-maxRotation, Math.min(maxRotation, rotateXValue)));
    setRotateY(Math.max(-maxRotation, Math.min(maxRotation, rotateYValue)));
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  // Show max 4 tags, then "+N more"
  const displayedStack = stack.slice(0, 4);
  const remainingCount = stack.length - 4;
  const showMore = remainingCount > 0;

  // Priority for first 2 cards
  const isPriority = index < 2;

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-[var(--color-bg-surface)] rounded-xl border border-[var(--color-border-subtle)] overflow-hidden transition-all duration-300"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? "transform 0.1s ease-out, border-color 0.3s" : "transform 0.3s ease-out, border-color 0.3s",
        borderColor: isHovered ? "var(--color-border-accent)" : "var(--color-border-subtle)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Area */}
      <div className="relative h-[220px] overflow-hidden rounded-t-xl bg-[var(--color-bg-surface)]">
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={isPriority}
          />
        </motion.div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-0 right-0 z-10">
            <span
              className="inline-block px-2.5 py-1 text-[10px] font-medium uppercase rounded-bl-lg"
              style={{
                backgroundColor: "#C8845A",
                color: "#111110",
                fontFamily: "var(--font-mono)",
              }}
            >
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5" style={{ padding: "20px" }}>
        <h3
          className="font-display font-medium mb-2 text-[var(--color-text-primary)]"
          style={{ fontSize: "18px" }}
        >
          {title}
        </h3>
        <p
          className="font-sans text-sm leading-relaxed mb-3 text-[var(--color-text-secondary)] line-clamp-2"
          style={{
            fontSize: "14px",
            lineHeight: "1.7",
            marginBottom: "12px",
          }}
        >
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {displayedStack.map((tech) => (
            <span
              key={tech}
              className="inline-block"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "0.5px solid rgba(255,255,255,0.1)",
                color: "rgba(242,237,228,0.5)",
                padding: "3px 8px",
                borderRadius: "4px",
              }}
            >
              {tech}
            </span>
          ))}
          {showMore && (
            <span
              className="inline-block"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "0.5px solid rgba(255,255,255,0.1)",
                color: "rgba(242,237,228,0.5)",
                padding: "3px 8px",
                borderRadius: "4px",
              }}
            >
              +{remainingCount} more
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-5"
        style={{
          marginTop: "16px",
          paddingTop: "12px",
          borderTop: "0.5px solid rgba(255,255,255,0.07)",
          padding: "12px 20px",
        }}
      >
        {/* Year/Date */}
        {year && (
          <span
            className="font-mono text-xs text-[var(--color-text-tertiary)]"
            style={{ fontSize: "11px" }}
          >
            {year}
          </span>
        )}

        {/* Icon Links */}
        <div className="flex items-center gap-3 ml-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              style={{ color: "#B5A06A" }}
            >
              <ExternalLink size={16} />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              style={{ color: "#B5A06A" }}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
