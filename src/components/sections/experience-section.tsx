import { experience } from "@/lib/data";

import { SectionHeading } from "../section-heading";
import { ExperienceTimeline } from "../experience-timeline";

export function ExperienceSection() {
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="bg-muted/70">
      <div className="container section-padding">
        <SectionHeading
          title="Professional Experience"
          subtitle="My journey through the world of software development"
        />

        <ExperienceTimeline />
      </div>
    </section>
  );
}
