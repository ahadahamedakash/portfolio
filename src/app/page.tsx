import { HeroSection } from "@/components/sections/hero-section";
import dynamic from "next/dynamic";

// Lazy load sections below the fold for better performance
const ExperienceSection = dynamic(
  () => import("@/components/sections/experience-section").then((mod) => mod.ExperienceSection),
  {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-12 w-12 animate-pulse bg-muted rounded-full" />
      </div>
    ),
  }
);

const SkillsSection = dynamic(
  () => import("@/components/sections/skills-section").then((mod) => mod.SkillsSection),
  {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-12 w-12 animate-pulse bg-muted rounded-full" />
      </div>
    ),
  }
);

const ProjectsSection = dynamic(
  () => import("@/components/sections/projects-section").then((mod) => mod.ProjectsSection),
  {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-12 w-12 animate-pulse bg-muted rounded-full" />
      </div>
    ),
  }
);

const ContactSection = dynamic(
  () => import("@/components/sections/contact-section").then((mod) => mod.ContactSection),
  {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-12 w-12 animate-pulse bg-muted rounded-full" />
      </div>
    ),
  }
);

// import { BlogSection } from "@/components/sections/blog-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <main id="main-content" tabIndex={-1}>
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        {/* <BlogSection /> */}
        <ContactSection />
      </main>
    </>
  );
}
