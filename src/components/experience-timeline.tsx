"use client";

import { motion } from "motion/react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { experience } from "@/lib/data";

export function ExperienceTimeline() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="relative">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Content */}
            <div className="flex items-start">
              <div className="mt-3 mr-5 flex flex-col gap-2 shrink-0 w-[90px] lg:w-[220px] text-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-end space-x-1 text-sm text-primary dark:text-primary-foreground font-semibold"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{exp.duration}</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-end space-x-1 text-xs sm:text-sm text-muted-foreground"
                >
                  <MapPin className="w-3 h-3" />
                  <span>{exp.location}</span>
                </motion.div>
              </div>

              <div className="relative pb-10 border-l-2 border-primary/30 dark:border-muted-foreground group-last:pb-4 pl-6 sm:pl-8 space-y-4">
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  className="absolute h-4 w-4 -translate-x-1/2 -left-px top-4 rounded-full border-2 border-primary dark:border-primary-foreground bg-background flex items-center justify-center group-hover:scale-125 transition-transform duration-300"
                >
                  <div className="h-2 w-2 rounded-full bg-primary dark:bg-primary-foreground" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-5 h-5 text-primary dark:text-primary-foreground" />
                    <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-primary-foreground transition-colors">
                      {exp.position}
                    </h3>
                  </div>
                  <h4 className="text-base sm:text-lg text-primary dark:text-muted-foreground font-medium">
                    {exp.company}
                  </h4>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + 0.6 + idx * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-2 text-sm sm:text-base text-muted-foreground dark:text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-muted-foreground mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + 0.8,
                    }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 pt-2"
                  >
                    {exp.technologies.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.2 + 0.9 + idx * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs text-primary dark:text-background font-bold hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
