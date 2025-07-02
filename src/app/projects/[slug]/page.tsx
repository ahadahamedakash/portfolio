"use client";

import { projects } from "@/lib/data";
import { usePathname } from "next/navigation";
import { ProjectDetail } from "@/components/project-details";

export default function Page() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1];

  const currentProject = projects.find(
    (project) => project.slug === lastSegment
  );

  if (!currentProject) {
    return <div className="container pt-10">Project not found.</div>;
  }

  return (
    <div className="container pt-10">
      <div className="section-padding min-h-screen">
        <ProjectDetail project={currentProject} />
      </div>
    </div>
  );
}
