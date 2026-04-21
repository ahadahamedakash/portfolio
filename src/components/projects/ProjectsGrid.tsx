"use client";

import { motion } from "motion/react";
import ProjectCard from "@/components/ui/ProjectCard";
import { Project } from "@/lib/data";

interface ProjectsGridProps {
  projects: Project[];
  filterLabel: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
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

/**
 * ProjectsGrid component
 *
 * Displays filtered projects in a 2-column responsive grid:
 * - Desktop: 2 columns
 * - Tablet: 2 columns
 * - Mobile: 1 column
 *
 * Features:
 * - Scroll-triggered animations
 * - Stagger children effect
 * - Empty state message
 * - Priority loading for first 2 cards
 */
export default function ProjectsGrid({ projects, filterLabel }: ProjectsGridProps) {
  return (
    <div style={{ padding: "24px 48px 80px" }}>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project, index) => (
          <motion.div key={project.slug} variants={itemVariants}>
            <ProjectCard
              slug={project.slug}
              title={project.title}
              description={project.shortDescription}
              image={project.image}
              technologies={project.technologies}
              featured={project.featured}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              githubBackendUrl={project.githubBackend}
              index={index}
              priority={index < 2}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {projects.length === 0 && (
        <motion.p
          className="font-sans text-[var(--color-text-secondary)] text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No projects found for filter: {filterLabel}
        </motion.p>
      )}
    </div>
  );
}
