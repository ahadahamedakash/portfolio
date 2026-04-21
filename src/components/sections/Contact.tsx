"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";

// Custom GitHub icon since lucide-react doesn't export it
function GithubIcon({ className }: { className?: string }) {
  return (
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
}

// Custom LinkedIn icon since lucide-react doesn't export it
function LinkedinIcon({ className }: { className?: string }) {
  return (
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
}

const contactItems = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "ahadahamedakash@gmail.com",
    action: "copy",
    href: "",
  },
  {
    icon: GithubIcon,
    label: "GITHUB",
    value: "github.com/ahadahamedakash",
    action: "link",
    href: "https://github.com/ahadahamedakash",
  },
  {
    icon: LinkedinIcon,
    label: "LINKEDIN",
    value: "linkedin.com/in/ahadahamed",
    action: "link",
    href: "https://linkedin.com/in/ahadahamed",
  },
  {
    icon: MessageCircle,
    label: "WHATSAPP",
    value: "+8801636428995",
    action: "link",
    href: "https://wa.me/8801636428995",
  },
  {
    icon: MapPin,
    label: "LOCATION",
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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function Contact() {
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

  return (
    <section
      id="contact"
      className="relative bg-[var(--color-bg-primary)] overflow-hidden"
      style={{
        paddingTop: "96px",
        paddingBottom: "96px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* LEFT COLUMN - 55% */}
          <motion.div
            className="lg:w-[55%] relative"
            style={{ position: "relative" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Top Label */}
            <p
              className="font-mono text-xs mb-4"
              style={{
                fontSize: "11px",
                color: "var(--color-gold)",
                marginBottom: "16px",
              }}
            >
              // let&apos;s_connect()
            </p>

            {/* Main Heading */}
            <h1
              className="font-display font-bold mb-4"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: "700",
                color: "#F2EDE4",
                lineHeight: "1.1",
                marginBottom: "16px",
              }}
            >
              Got a problem
              <br />
              worth solving?
            </h1>

            {/* Italic Subline */}
            <p
              className="font-display italic mb-6"
              style={{
                fontSize: "22px",
                color: "#B5A06A",
                marginBottom: "24px",
              }}
            >
              Let&apos;s talk.
            </p>

            {/* Paragraph */}
            <p
              className="font-sans"
              style={{
                fontSize: "15px",
                color: "rgba(242,237,228,0.55)",
                lineHeight: "1.8",
                maxWidth: "420px",
                marginBottom: "40px",
              }}
            >
              I&apos;m open to full-time roles, freelance projects, and interesting collaborations.
              If you have something worth building, reach out.
            </p>

            {/* Availability Strip */}
            <div className="flex flex-wrap gap-4 mb-10" style={{ gap: "20px", marginBottom: "40px" }}>
              {/* Item 1 */}
              <div className="flex items-center gap-2" style={{ gap: "8px" }}>
                <div
                  className="rounded-full"
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#6B8C6B",
                  }}
                />
                <span
                  className="font-sans text-sm"
                  style={{
                    fontSize: "13px",
                    color: "rgba(242,237,228,0.6)",
                  }}
                >
                  Available for full-time
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-2" style={{ gap: "8px" }}>
                <div
                  className="rounded-full"
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#B5A06A",
                  }}
                />
                <span
                  className="font-sans text-sm"
                  style={{
                    fontSize: "13px",
                    color: "rgba(242,237,228,0.6)",
                  }}
                >
                  Open to freelance
                </span>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-2" style={{ gap: "8px" }}>
                <div
                  className="rounded-full"
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#C8845A",
                  }}
                />
                <span
                  className="font-sans text-sm"
                  style={{
                    fontSize: "13px",
                    color: "rgba(242,237,228,0.6)",
                  }}
                >
                  Remote worldwide
                </span>
              </div>
            </div>

            {/* Gold Line */}
            <div
              className="rounded-full"
              style={{
                width: "60px",
                height: "1px",
                backgroundColor: "#B5A06A",
              }}
            />

            {/* "Hello" Watermark */}
            <div
              className="absolute bottom-0 left-0 select-none pointer-events-none hidden lg:block"
              style={{
                bottom: "-20px",
                left: "-10px",
                fontFamily: "var(--font-display)",
                fontSize: "180px",
                fontWeight: "700",
                color: "rgba(181,160,106,0.03)",
                userSelect: "none",
                pointerEvents: "none",
                lineHeight: "1",
              }}
            >
              Hello
            </div>
          </motion.div>

          {/* RIGHT COLUMN - 45% - CONTACT CARD */}
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
                        borderBottom: index === contactItems.length - 1 ? "none" : "1px solid rgba(255,255,255,0.05)",
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
                          <Icon
                            size={16}
                            style={{ color: "#B5A06A" }}
                          />
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
        </div>
      </div>
    </section>
  );
}
