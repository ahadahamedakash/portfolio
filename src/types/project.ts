/**
 * Shared TypeScript interfaces for project-related data
 * This ensures type consistency across the entire application
 */

/**
 * Complete project data structure
 * Used for data layer and API responses
 */
export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  images?: string[];
  technologies: string[];
  githubUrl: string;
  githubBackend?: string;
  liveUrl: string;
  featured: boolean;
  completedAt: string;
}

/**
 * Filter options for project listing
 */
export type ProjectFilter = "All" | "Featured" | "React" | "Next.js" | "Full-Stack" | "AI";
