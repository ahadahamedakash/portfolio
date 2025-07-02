"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import { getFeaturedProjects } from "@/lib/data";
import { SectionHeading } from "../section-heading";
import ProjectCard from "../project-card";

export function ProjectsSection() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="bg-muted/70">
      <div className="container section-padding">
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of my recent work and personal projects"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index + 1} project={project} index={index} />
          ))}
        </div>

        <div className="text-center section-content-padding">
          <Button asChild size="lg">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
