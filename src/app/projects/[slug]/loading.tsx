import { CardSkeleton } from "@/components/loading-skeleton";

/**
 * Loading Page for Project Detail Page
 *
 * Displayed while a specific project page is loading.
 */

export default function ProjectDetailLoading() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button Skeleton */}
        <div className="mb-8">
          <div className="h-10 w-32 bg-muted animate-pulse rounded-lg" />
        </div>

        {/* Project Content Skeleton */}
        <CardSkeleton />

        {/* Additional Details Skeleton */}
        <div className="mt-12 space-y-6">
          <div className="h-8 w-48 bg-muted animate-pulse rounded-lg" />
          <div className="space-y-3">
            <div className="h-4 w-full bg-muted animate-pulse rounded" />
            <div className="h-4 w-full bg-muted animate-pulse rounded" />
            <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
