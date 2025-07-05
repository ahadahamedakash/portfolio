"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Calendar, ExternalLink, Github, Star } from "lucide-react";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      key={project.slug}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-muted/50 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_8px_24px_0_rgba(80,63,205,0.10)]">
        {/* Featured Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center space-x-1 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            <Star className="w-3 h-3 fill-current" />
            <span>Featured</span>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative overflow-hidden">
          <div className="aspect-[16/12] relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Action Buttons */}
            <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="sm"
                  className="bg-primary/90 hover:bg-primary backdrop-blur-sm"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="sm"
                  className="bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors duration-300 line-clamp-1">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
              {project.shortDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech: string) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs px-2 py-1 bg-muted/50 hover:bg-primary/10 transition-colors"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs px-2 py-1">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              <span>{new Date(project.completedAt).toLocaleDateString()}</span>
            </div>
            <Link href={`/projects/${project.slug}`} className="">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary dark:text-foreground hover:text-primary-foreground dark:hover:text-primary hover:bg-primary dark:hover:bg-white"
              >
                View Details
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}
