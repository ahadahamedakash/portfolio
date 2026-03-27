import { ProjectCardSkeleton } from "@/components/loading-skeleton";

/**
 * Loading Page for Projects Page
 *
 * Displayed while the projects page is loading.
 */

export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading Skeleton */}
        <div className="text-center mb-16 space-y-4">
          <div className="h-12 w-64 bg-muted animate-pulse rounded-lg mx-auto" />
          <div className="h-6 w-96 bg-muted animate-pulse rounded-lg mx-auto" />
        </div>

        {/* Projects Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
        </div>
      </div>
    </div>
  );
}
