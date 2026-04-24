"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { contactItems } from "@/lib/contact-data";

/**
 * Contact Card Component
 *
 * Right column card with all contact methods
 * Includes copy-to-clipboard for email and external links
 */
export function ContactCard() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ahadahamedakash@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleContactItemClick = (item: typeof contactItems[0]) => {
    if (item.action === "copy") {
      handleCopyEmail();
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      className="lg:w-[45%]"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div
        className="rounded-2xl overflow-hidden relative"
        style={{
          backgroundColor: "#161614",
          border: "1px solid rgba(181,160,106,0.15)",
          borderRadius: "16px",
          padding: "36px",
        }}
      >
        {/* Card Header */}
        <p
          className="font-mono text-xs mb-6"
          style={{
            fontSize: "11px",
            color: "rgba(181,160,106,0.5)",
            marginBottom: "24px",
          }}
        >
          // contact_info.json
        </p>

        {/* Contact Items List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const isClickable = item.action !== "none";
            const isEmail = item.action === "copy";

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
                style={{
                  borderBottom:
                    index === contactItems.length - 1
                      ? "none"
                      : "1px solid rgba(255,255,255,0.05)",
                  padding: "16px 0",
                  cursor: isClickable ? "pointer" : "default",
                }}
                onClick={() => handleContactItemClick(item)}
              >
                <a
                  href={item.action === "link" ? item.href : undefined}
                  target={item.action === "link" ? "_blank" : undefined}
                  rel={item.action === "link" ? "noopener noreferrer" : undefined}
                  className="block"
                  onClick={(e) => {
                    if (isEmail) {
                      e.preventDefault();
                      handleCopyEmail();
                    }
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  {/* Icon Container */}
                  <div
                    className="rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "0.5px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Icon size={16} style={{ color: "#B5A06A" }} />
                  </div>

                  {/* Label + Value */}
                  <div className="flex flex-col flex-1">
                    <span
                      className="font-mono uppercase"
                      style={{
                        fontSize: "10px",
                        color: "rgba(242,237,228,0.28)",
                        letterSpacing: "0.1em",
                        marginBottom: "2px",
                      }}
                    >
                      {item.label}
                      {isEmail && copiedEmail && (
                        <span
                          className="ml-2 inline-flex items-center gap-1"
                          style={{ color: "#B5A06A" }}
                        >
                          <CheckCircle2 size={12} />
                          Copied!
                        </span>
                      )}
                    </span>
                    <span
                      className="font-sans group-hover:text-white transition-colors"
                      style={{
                        fontSize: "14px",
                        color: "rgba(242,237,228,0.8)",
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <a
          href="mailto:ahadahamedakash@gmail.com"
          className="block text-center rounded-lg transition-colors font-sans font-medium mt-6"
          style={{
            marginTop: "24px",
            backgroundColor: "#B5A06A",
            color: "#111110",
            padding: "14px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#C8B07A";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#B5A06A";
          }}
        >
          Send me an email →
        </a>
      </div>
    </motion.div>
  );
}
