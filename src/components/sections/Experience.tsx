"use client";

import { motion } from "motion/react";

const jobs = [
  {
    title: "Frontend Developer",
    company: "AB Software Solutions",
    period: "Nov 2023 – Feb 2025",
    location: "Remote · Beirut, Lebanon",
    bullets: [
      "Built responsive UIs using React, Next.js, Tailwind CSS, and MUI",
      "Implemented state management with Redux for complex application logic",
      "Collaborated with backend developers and designers across time zones",
      "Followed Git/GitHub workflows and code review best practices",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "MUI",
      "Bootstrap",
    ],
    metrics: ["40% faster development", "10+ projects delivered"],
    accentColor: "#B5A06A",
  },
  {
    title: "Web Developer",
    company: "Talentship Global Advisory Forum",
    period: "Sep 2023 – Oct 2023",
    location: "Remote · Noida, India",
    bullets: [
      "Learned professional React development practices from senior developers",
      "Built dynamic, responsive interfaces in a fast-paced environment",
      "Improved communication and problem-solving skills",
    ],
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Firebase",
      "Git",
    ],
    metrics: null,
    accentColor: "#C8845A",
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
    <section className="bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24">
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
      </div>

      <div className="max-w-4xl mx-auto pb-16 md:pb-24">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            className="hidden md:block absolute left-6 top-0 bottom-0 w-px"
            style={{
              backgroundColor: "rgba(181, 160, 106, 0.2)",
              transformOrigin: "top",
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
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
                className="relative md:ml-6"
              >
                {/* Timeline Dot - Desktop only */}
                <div
                  className="hidden md:block absolute left-0 top-8 w-3 h-3 rounded-full border-2 border-[#111110] -translate-x-[6px]"
                  style={{ backgroundColor: job.accentColor }}
                />

                {/* Experience Card */}
                <div
                  className="bg-[#161614] rounded-xl p-7 md:p-8 md:ml-6 relative"
                  style={{
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderLeft: "3px solid " + job.accentColor,
                    borderRadius: "0 12px 12px 0",
                  }}
                >
                  {/* Job Title */}
                  <h3
                    className="font-display text-xl md:text-[22px] mb-1"
                    style={{ color: "#F2EDE4" }}
                  >
                    {job.title}
                  </h3>

                  {/* Company Name */}
                  <p
                    className="font-sans text-base mb-3"
                    style={{ color: "#B5A06A" }}
                  >
                    {job.company}
                  </p>

                  {/* Period + Location */}
                  <p
                    className="font-mono text-xs mb-4"
                    style={{ color: "rgba(242,237,228,0.35)" }}
                  >
                    {job.period} · {job.location}
                  </p>

                  {/* Metrics Chips - AB Software Solutions only */}
                  {job.metrics && (
                    <div className="flex flex-wrap gap-3 mb-4">
                      {job.metrics.map((metric, metricIndex) => (
                        <div
                          key={metricIndex}
                          className="font-mono text-xs px-3.5 py-2 rounded-md inline-block"
                          style={{
                            backgroundColor: "rgba(181,160,106,0.08)",
                            border: "1px solid rgba(181,160,106,0.2)",
                            color: "#B5A06A",
                          }}
                        >
                          {metric}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bullet Points */}
                  <ul className="mb-5">
                    {job.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="font-sans text-[15px] leading-[1.8] mb-2 flex items-start gap-2"
                        style={{ color: "rgba(242,237,228,0.65)" }}
                      >
                        <span style={{ color: "#B5A06A", marginRight: "8px" }}>
                          —
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div
                    className="flex flex-wrap gap-2"
                    style={{ marginTop: "20px" }}
                  >
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md inline-block"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.04)",
                          border: "0.5px solid rgba(255,255,255,0.1)",
                          color: "rgba(242,237,228,0.5)",
                          padding: "4px 10px",
                        }}
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
