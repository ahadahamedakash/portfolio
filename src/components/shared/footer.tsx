"use client";

import { motion } from "motion/react";
import { personalInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground dark:bg-background border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-muted dark:text-muted-foreground"
        >
          <p className="text-center sm:text-left px-4">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center justify-center space-x-1 mt-2 sm:mt-0 px-4">
            <span>Made with</span>
            {/* <Heart className="w-4 h-4 text-red-500 fill-current" /> */}
            <span>Next.js, Tailwind CSS & ShadCN</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
