"use client";

import { motion } from "motion/react";

const jobs = [
  {
    title: "Frontend Developer",
    company: "AB Software Solutions",
    period: "Nov 2023 – Feb 2025",
    location: "Remote · Beirut, Lebanon",
    description: "Reduced development time by 40% by creating reusable, maintainable components. Delivered 10+ projects on time.",
    bullets: [
      "Built responsive UIs using React, Next.js, Tailwind CSS, and MUI",
      "Implemented state management with Redux for complex application logic",
      "Collaborated with backend developers and designers across time zones",
      "Followed Git/GitHub workflows and code review best practices",
    ],
    stack: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "MUI", "Bootstrap"],
  },
  {
    title: "Web Developer",
    company: "Talentship Global Advisory Forum",
    period: "Sep 2023 – Oct 2023",
    location: "Remote · Noida, India",
    description: "Learned professional React development practices from senior developers. Built dynamic, responsive interfaces and improved communication and problem-solving in a fast-paced environment.",
    bullets: [],
    stack: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Firebase", "Git"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Experience() {
  return (
    <section className="bg-[var(--color-bg-secondary)] px-6 md:px-10" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-5xl mb-3">Experience</h2>
          <p className="font-sans text-[var(--color-text-secondary)]">
            My journey through the world of web development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--color-border-default)]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          {/* Job Entries */}
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8"
              >
                {/* Dot Node */}
                <motion.div
                  className="absolute left-0 top-2 w-3 h-3 bg-[var(--color-gold)] rounded-full -translate-x-[5px]"
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                />

                {/* Content */}
                <div className="bg-[var(--color-bg-surface)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
                  <div className="mb-4">
                    <h3 className="font-display text-2xl mb-1 text-[var(--color-text-primary)]">
                      {job.title}
                    </h3>
                    <p className="font-mono text-sm text-[var(--color-gold)] mb-1">
                      {job.company}
                    </p>
                    <p className="font-mono text-xs text-[var(--color-text-tertiary)]">
                      {job.period} · {job.location}
                    </p>
                  </div>

                  <p className="font-sans text-sm leading-relaxed mb-4 text-[var(--color-text-secondary)]">
                    {job.description}
                  </p>

                  {job.bullets.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {job.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="font-sans text-sm leading-relaxed text-[var(--color-text-secondary)] flex items-start gap-2"
                        >
                          <span className="text-[var(--color-gold)] mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-[var(--color-bg-overlay)] border border-[var(--color-border-subtle)] rounded-md text-[var(--color-text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
