"use client";

import { motion } from "motion/react";
import ProjectCard from "@/components/ui/ProjectCard";
import Link from "next/link";

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

export default function Products() {
  return (
    <section id="products" className="px-10 py-20 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="font-display text-5xl mb-3"
          >
            Products
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-sans text-[var(--color-text-secondary)]"
          >
            Things I&apos;ve shipped.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
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

        {/* View All Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border-default)] text-[var(--color-text-primary)] rounded-md hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors font-mono text-sm"
          >
            View All Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
