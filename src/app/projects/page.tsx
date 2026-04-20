"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    name: "Alishan",
    description: "Small businesses run on spreadsheets. I built a role-based stock management platform — JWT-secured, real-time dashboards, 35% smaller bundle.",
    stack: ["React 19", "Redux Toolkit", "Node.js", "MongoDB", "Tailwind CSS", "ShadCN"],
    featured: true,
    date: "2024",
    problem: "Small businesses struggling with inventory management on spreadsheets",
    solution: "Role-based stock management with real-time dashboards and JWT authentication",
  },
  {
    name: "TechStore",
    description: "Full-stack e-commerce with role-based auth, product catalog, filtering, and a complete backend API.",
    stack: ["React 19", "Redux Toolkit", "Node.js", "Express.js", "MongoDB"],
    featured: true,
    date: "2024",
    problem: "Need for a scalable e-commerce platform with advanced filtering",
    solution: "Full-stack e-commerce with REST API and role-based access control",
  },
  {
    name: "MedAI Assistant",
    description: "Modular AI healthcare assistant — symptom checker, nutrition guidance, medical report analysis.",
    stack: ["Next.js", "ShadCN", "MongoDB", "OpenAI", "Tailwind CSS"],
    featured: true,
    date: "2024",
    problem: "Healthcare information scattered across multiple sources",
    solution: "AI-powered modular assistant with symptom checker and report analysis",
  },
  {
    name: "SkinoFairy",
    description: "Skincare blog dedicated to tips, product reviews, and community.",
    stack: ["Next.js", "ShadCN", "Tailwind CSS"],
    featured: false,
    date: "2023",
    problem: "Lack of centralized skincare information and reviews",
    solution: "Community-driven blog with product reviews and tips",
  },
];

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
    if (activeFilter === "React") return project.stack.some((tech) => tech.toLowerCase().includes("react"));
    if (activeFilter === "Next.js") return project.stack.some((tech) => tech.toLowerCase().includes("next"));
    if (activeFilter === "Full-Stack") return project.stack.some((tech) => tech.toLowerCase().includes("node") || tech.toLowerCase().includes("express"));
    return true;
  });

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] px-10 py-20">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard
                name={project.name}
                description={project.description}
                stack={project.stack}
                featured={project.featured}
                date={project.date}
                problem={project.problem}
                solution={project.solution}
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
