"use client";

import { motion } from "motion/react";
import ProjectShowcase from "@/components/ui/ProjectShowcase";
import Link from "next/link";
import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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
  // Filter only featured projects
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="products" className="bg-[var(--color-bg-secondary)]" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs text-[var(--color-gold)] mb-3"
          >
            // products.filter(p =&gt; p.shipped === true)
          </motion.p>
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

        {/* Project Cards Grid - 2x2 for desktop/tablet, 1 column for mobile */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={project.slug} variants={itemVariants}>
              <ProjectShowcase
                slug={project.slug}
                title={project.title}
                description={project.fullDescription}
                image={project.image}
                technologies={project.technologies}
                featured={project.featured}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                githubBackendUrl={project.githubBackend}
                index={index}
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
          style={{ marginTop: "56px" }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border rounded-md transition-colors font-sans"
            style={{
              borderColor: "rgba(181,160,106,0.3)",
              color: "#B5A06A",
              padding: "12px 28px",
              borderRadius: "6px",
              fontSize: "14px",
            }}
          >
            <ExternalLink size={14} />
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
