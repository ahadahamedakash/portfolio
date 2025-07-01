"use client"

import { motion } from "framer-motion"
import { experience } from "@/lib/data"
import { ExperienceTimeline } from "../experience-timeline"

export function ExperienceSection() {
  if (experience.length === 0) return null

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through the world of software development
          </p>
        </motion.div>

        <ExperienceTimeline />
      </div>
    </section>
  )
}