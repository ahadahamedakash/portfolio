"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

const filters = ["All", "Featured", "React", "Next.js", "Full-Stack"];

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

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return project.featured;
    if (activeFilter === "React") return project.technologies.some((tech) => tech.toLowerCase().includes("react"));
    if (activeFilter === "Next.js") return project.technologies.some((tech) => tech.toLowerCase().includes("next"));
    if (activeFilter === "Full-Stack") return project.technologies.some((tech) => tech.toLowerCase().includes("node") || tech.toLowerCase().includes("express") || tech.toLowerCase().includes("mongodb"));
    return true;
  });

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] px-6 md:px-10 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-sm text-[var(--color-gold)] hover:underline"
          >
            ← Back to Home
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="font-display text-5xl md:text-6xl mb-3">All Products</h1>
          <p className="font-sans text-[var(--color-text-secondary)]">
            A comprehensive collection of my work.
          </p>
        </motion.div>

        {/* Filter Row */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-md font-mono text-sm transition-all ${
                activeFilter === filter
                  ? "border-2 border-[var(--color-gold)] text-[var(--color-gold)] bg-[var(--color-gold)]/10"
                  : "border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-default)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={project.slug} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.shortDescription}
                image={project.image}
                images={project.images}
                stack={project.technologies}
                featured={project.featured}
                year={new Date(project.completedAt).getFullYear().toString()}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.p
            className="font-sans text-[var(--color-text-secondary)] text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No projects found for this filter.
          </motion.p>
        )}
      </div>
    </div>
  );
}
