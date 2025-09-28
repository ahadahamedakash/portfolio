"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

import { contactInfo } from "@/lib/data";
import { SectionHeading } from "../section-heading";

export function ContactSection() {
  const contactStats = [
    {
      icon: Mail,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      description: "Drop me a line anytime",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      description: "Let's have a conversation",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: contactInfo.address,
      href: "#",
      description: "Based in beautiful",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@ahadahamedakash",
      href: contactInfo.socialLinks.github,
      description: "Check out my repositories",
      color: "from-gray-500/20 to-slate-500/20",
      iconColor: "text-gray-600 dark:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Ahad Ahamed Akash",
      href: contactInfo.socialLinks.linkedin,
      description: "Let's connect professionally",
      color: "from-blue-600/20 to-blue-500/20",
      iconColor: "text-blue-600",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: contactInfo.phone,
      href: `https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, "")}`,
      description: "Chat with me on WhatsApp",
      color: "from-green-400/30 to-lime-400/20",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section id="contact" className="bg-muted/70">
      <div className="container section-padding">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'm always open to discussing new opportunities and interesting
            projects"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <a
                href={stat.href}
                target={stat.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  stat.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 group-hover:scale-[1.02]">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative p-6 space-y-4">
                    {/* Icon */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                          {stat.label}
                        </h3>
                        <p className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                          {stat.value}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {stat.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
