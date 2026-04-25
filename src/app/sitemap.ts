import { MetadataRoute } from "next";
import { projects } from "@/lib/data";

/**
 * Dynamic Sitemap Generation
 *
 * Generates sitemap.xml with:
 * - Homepage
 * - Projects listing page
 * - Individual project pages
 * - Contact section
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ahadahamedakash.com";

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // Dynamic project routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
