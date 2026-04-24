"use client";

import { ProjectDetail } from "@/components/sections/project-details";
import ProjectLoader from "@/components/ui/ProjectLoader";
import { projects } from "@/lib/data";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1];

  const currentProject = projects.find(
    (project) => project.slug === lastSegment,
  );

  if (!currentProject) {
    return <div className="container pt-10">Project not found.</div>;
  }

  return (
    <>
      <ProjectLoader />
      <div className="container pt-10 mx-auto">
        <div className="section-padding min-h-screen">
          <ProjectDetail project={currentProject} />
        </div>
      </div>
    </>
  );
}
