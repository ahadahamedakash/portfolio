import { Metadata } from "next";

import { projects } from "@/lib/data";
import ProjectCard from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Ahad - Projects",
  description:
    "Browse my portfolio of web development projects including frontend designs.",
};

export default function ProjectsPage() {
  return (
    <div className="container pt-10">
      <div className="section-padding">
        <SectionHeading
          title="All Projects"
          subtitle="A comprehensive collection of my web development projects"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard key={index + 1} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
