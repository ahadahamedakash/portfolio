"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, Code, ExternalLink, Tag } from "lucide-react";

import type { Project } from "@/lib/data";

interface ProjectDetailProps {
  project: Project;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-10 py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Back Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-mono transition-colors hover:text-[var(--color-gold)]"
              style={{ color: "var(--color-text-tertiary)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>// Back to Products</span>
            </Link>
          </motion.div>

          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
            {/* Project Images */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="relative overflow-hidden rounded-xl border border-[var(--color-border-subtle)]">
                <Image
                  src={project.images[0] || project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {project.images.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {project.images.slice(1, 5).map((image, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-xl border border-[var(--color-border-subtle)]"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 2}`}
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover object-top"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Project Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Title & Description */}
              <div>
                <h1
                  className="font-display font-bold mb-4"
                  style={{
                    fontSize: "clamp(32px, 5vw, 48px)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {project.title}
                </h1>
                <p
                  className="font-sans font-light leading-relaxed"
                  style={{
                    fontSize: "16px",
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.8",
                  }}
                >
                  {project.fullDescription}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-md font-sans font-medium transition-colors"
                  style={{
                    backgroundColor: "var(--color-gold)",
                    color: "#111110",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#C8B07A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-gold)";
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>

                {project.githubBackend ? (
                  <>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-sans font-medium border transition-colors"
                      style={{
                        backgroundColor: "transparent",
                        color: "var(--color-text-secondary)",
                        borderColor: "rgba(181, 160, 106, 0.3)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-gold)";
                        e.currentTarget.style.color = "var(--color-gold)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(181, 160, 106, 0.3)";
                        e.currentTarget.style.color =
                          "var(--color-text-secondary)";
                      }}
                    >
                      <Code className="w-4 h-4" />
                      Frontend Code
                    </a>
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-sans font-medium border transition-colors"
                      style={{
                        backgroundColor: "transparent",
                        color: "var(--color-text-secondary)",
                        borderColor: "rgba(181, 160, 106, 0.3)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-gold)";
                        e.currentTarget.style.color = "var(--color-gold)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(181, 160, 106, 0.3)";
                        e.currentTarget.style.color =
                          "var(--color-text-secondary)";
                      }}
                    >
                      <Code className="w-4 h-4" />
                      Backend Code
                    </a>
                  </>
                ) : (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-sans font-medium border transition-colors"
                    style={{
                      backgroundColor: "transparent",
                      color: "var(--color-text-secondary)",
                      borderColor: "rgba(181, 160, 106, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-gold)";
                      e.currentTarget.style.color = "var(--color-gold)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(181, 160, 106, 0.3)";
                      e.currentTarget.style.color =
                        "var(--color-text-secondary)";
                    }}
                  >
                    <Code className="w-4 h-4" />
                    View Code
                  </a>
                )}
              </div>

              {/* Divider */}
              <div
                className="w-full h-px"
                style={{ backgroundColor: "var(--color-border-subtle)" }}
              />

              {/* Project Details Card */}
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: "var(--color-bg-surface)",
                  borderColor: "var(--color-border-subtle)",
                }}
              >
                {/* Status Badge */}
                <div className="mb-6">
                  <span
                    className="inline-block font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded-md"
                    style={{
                      backgroundColor: "rgba(107, 140, 107, 0.15)",
                      color: "var(--color-sage)",
                      border: "1px solid rgba(107, 140, 107, 0.3)",
                    }}
                  >
                    ✓ Still Evolving
                  </span>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Tag
                      className="w-4 h-4"
                      style={{ color: "var(--color-gold)" }}
                    />
                    <span
                      className="font-mono text-xs uppercase tracking-wider"
                      style={{ color: "var(--color-text-tertiary)" }}
                    >
                      Technologies Used
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1.5 text-sm font-mono rounded-md border"
                        style={{
                          backgroundColor: "var(--color-bg-overlay)",
                          borderColor: "var(--color-border-subtle)",
                          color: "var(--color-text-secondary)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
