"use client";

import { motion } from "framer-motion";
import { SkillsMarquee } from "../skills-marquee";
import { SectionHeading } from "../section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="bg-muted/70 overflow-hidden">
      <div className="container section-padding">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="My technical expertise across different domains of web development"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background gradient for better visual effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 dark:from-primary/50 dark:via-transparent dark:to-primary/50 z-10 pointer-events-none" />

          <SkillsMarquee />

          {/* Fade edges for seamless effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-20 pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center section-content-padding"
        >
          <p className="text-muted-foreground">
            Continuously learning and exploring new technologies to stay at the
            forefront of web development
          </p>
        </motion.div>
      </div>
    </section>
  );
}
