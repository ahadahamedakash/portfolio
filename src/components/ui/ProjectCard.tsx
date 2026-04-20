"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Tag from "./Tag";

interface ProjectCardProps {
  name: string;
  description: string;
  stack: string[];
  featured?: boolean;
  date?: string;
  problem?: string;
  solution?: string;
}

export default function ProjectCard({
  name,
  description,
  stack,
  featured = false,
  date,
  problem,
  solution,
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

    const maxRotation = 6;
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
      {/* Screenshot Area */}
      <div className="relative h-[200px] bg-[var(--color-bg-overlay)]">
        {featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 text-xs font-medium bg-[var(--color-copper)] text-white rounded-md">
              Featured
            </span>
          </div>
        )}

        <AnimatePresence>
          {isHovered && problem && solution && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute bottom-0 left-0 right-0 h-[40%] bg-black/80 backdrop-blur-sm p-4 flex flex-col justify-center"
            >
              <div className="text-white">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-copper)] mb-1">
                  Problem
                </p>
                <p className="text-sm font-sans mb-3">{problem}</p>
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-sage)] mb-1">
                  Solution
                </p>
                <p className="text-sm font-sans">{solution}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <h3 className="font-display font-medium text-xl mb-2 text-[var(--color-text-primary)]">
          {name}
        </h3>
        <p className="font-sans text-sm leading-relaxed mb-4 text-[var(--color-text-secondary)]">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border-subtle)]">
          {date && (
            <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
              {date}
            </span>
          )}
          <a
            href="#"
            className="font-mono text-sm text-[var(--color-gold)] hover:underline ml-auto"
          >
            View Details →
          </a>
        </div>
      </div>
    </motion.div>
  );
}
