"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MessageCircle, MapPin, Check } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "ahadahamedakash@gmail.com",
    action: "copy",
    href: "",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/ahadahamedakash",
    action: "link",
    href: "https://github.com/ahadahamedakash",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/ahadahamed",
    action: "link",
    href: "https://linkedin.com/in/ahadahamed",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+8801636428995",
    action: "link",
    href: "https://wa.me/8801636428995",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Narayanganj, Bangladesh",
    action: "none",
    href: "",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ahadahamedakash@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const headingWords = ["Got", "a", "problem", "worth", "solving?"];

  return (
    <section className="px-10 py-20 bg-[var(--color-bg-primary)]">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {headingWords.map((word, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              className="font-display text-5xl md:text-6xl inline-block mr-3"
              style={{ display: index === 4 ? "block" : "inline-block" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Subheading */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="font-display text-2xl italic text-[var(--color-gold)]">
            Let&apos;s talk.
          </p>
        </motion.div>

        {/* Paragraph */}
        <motion.p
          className="font-sans text-[var(--color-text-secondary)] leading-relaxed mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          I&apos;m open to full-time roles, freelance projects, and interesting collaborations.
          If you have something worth building, reach out.
        </motion.p>

        {/* Contact Links */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            const isClickable = link.action !== "none";
            const isEmail = link.action === "copy";

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex items-start gap-3 ${isClickable ? "cursor-pointer group" : ""}`}
                onClick={isEmail ? handleCopyEmail : undefined}
              >
                <a
                  href={link.action === "link" ? link.href : undefined}
                  target={link.action === "link" ? "_blank" : undefined}
                  rel={link.action === "link" ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-3 group"
                  onClick={isEmail ? (e) => { e.preventDefault(); handleCopyEmail(); } : undefined}
                >
                  <Icon className="w-5 h-5 text-[var(--color-text-tertiary)] mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-tertiary)]">
                      {link.label}
                      {isEmail && copiedEmail && (
                        <span className="ml-2 text-[var(--color-sage)] flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          Copied!
                        </span>
                      )}
                    </span>
                    <span
                      className={`font-sans text-[15px] text-[var(--color-text-primary)] group-hover:text-[var(--color-gold)] transition-colors`}
                    >
                      {link.value}
                    </span>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
