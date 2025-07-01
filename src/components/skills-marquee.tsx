/* eslint-disable @next/next/no-img-element */
"use client";

import { skills } from "@/lib/data";
import { motion } from "framer-motion";


const firstLineSkills = skills.slice(0, Math.ceil(skills.length / 2));
const secondLineSkills = skills.slice(Math.ceil(skills.length / 2));

interface MarqueeLineProps {
  skills: typeof skills;
  direction: "left" | "right";
  speed?: number;
}

function MarqueeLine({ skills, direction, speed = 50 }: MarqueeLineProps) {
  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex space-x-8 whitespace-nowrap"
        animate={{
          x: direction === "left" ? [0, -1920] : [-1920, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            className="flex flex-col items-center justify-center min-w-[60px] md:min-w-[120px] group"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-16 h-16 mb-3 p-3 rounded-xl bg-background border border-border shadow-sm group-hover:shadow-lg group-hover:border-primary/50 transition-all duration-300">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <span className="text-sm font-medium text-muted-foreground dark:text-white group-hover:text-foreground transition-colors duration-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <div className="w-full space-y-8">
      <MarqueeLine skills={firstLineSkills} direction="left" speed={60} />

      <MarqueeLine skills={secondLineSkills} direction="right" speed={55} />
    </div>
  );
}
