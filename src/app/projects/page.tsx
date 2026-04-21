"use client";

import { useState, useMemo } from "react";
import { ProjectsHero, ProjectProcessStrip, ProjectsFilter, ProjectsGrid } from "@/components/projects";
import { projects } from "@/lib/data";
import type { ProjectFilter } from "@/components/projects";

/**
 * Projects Page
 *
 * Displays all projects with filtering capability:
 * - Hero band with stats
 * - Process strip showing development workflow
 * - Filter by technology stack
 * - Responsive project grid
 *
 * Filter Options:
 * - All: Shows all projects
 * - Featured: Shows only featured projects
 * - React: Projects using React
 * - Next.js: Projects using Next.js
 * - Full-Stack: Projects with Node/Express/MongoDB
 * - AI: Projects with AI/OpenAI technologies
 */
export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  /**
   * Filter projects based on selected filter
   * Memoized to prevent recalculation on every render
   */
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      switch (activeFilter) {
        case "All":
          return true;
        case "Featured":
          return project.featured;
        case "React":
          return project.technologies.some((tech) =>
            tech.toLowerCase().includes("react")
          );
        case "Next.js":
          return project.technologies.some((tech) =>
            tech.toLowerCase().includes("next")
          );
        case "Full-Stack":
          return project.technologies.some(
            (tech) =>
              tech.toLowerCase().includes("node") ||
              tech.toLowerCase().includes("express") ||
              tech.toLowerCase().includes("mongodb")
          );
        case "AI":
          return (
            project.technologies.some(
              (tech) =>
                tech.toLowerCase().includes("open ai") ||
                tech.toLowerCase().includes("ai")
            ) ||
            project.title.toLowerCase().includes("ai") ||
            project.title.toLowerCase().includes("assistant")
          );
        default:
          return true;
      }
    });
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      {/* Hero Section with Stats */}
      <ProjectsHero projectCount={projects.length} />

      {/* Process Strip */}
      <ProjectProcessStrip />

      {/* Filter and Grid Section */}
      <section className="relative z-10 max-w-7xl mx-auto">
        <ProjectsFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <ProjectsGrid projects={filteredProjects} filterLabel={activeFilter} />
      </section>
    </div>
  );
}
