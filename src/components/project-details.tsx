"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Project } from "@/lib/data";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="container">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Project Images */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={project.images[0] || project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>

              {project.images.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {project.images.slice(1, 3).map((image, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-lg"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 2}`}
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>

              <Separator />

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>
                      Completed:{" "}
                      {new Date(project.completedAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Tag className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">Technologies Used</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.featured && (
                    <div className="flex items-center space-x-2">
                      <Badge variant="default">Featured Project</Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
