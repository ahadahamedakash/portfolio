/**
 * Project Detail Page Loading State
 *
 * Shows during route transitions to project details
 * Minimal and fast - doesn't block content unnecessarily
 */
export default function ProjectDetailLoading() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] py-20">
      <div className="max-w-7xl mx-auto px-10">
        {/* Back button skeleton */}
        <div className="mb-8 h-10 w-40 bg-[var(--color-bg-surface)] rounded-lg animate-pulse" />

        {/* Project content skeleton */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          {/* Image skeleton */}
          <div className="aspect-video bg-[var(--color-bg-surface)] rounded-xl animate-pulse" />

          {/* Content skeleton */}
          <div className="space-y-6">
            <div className="h-10 w-3/4 bg-[var(--color-bg-surface)] rounded-lg animate-pulse" />
            <div className="space-y-3">
              <div className="h-4 w-full bg-[var(--color-bg-surface)] rounded animate-pulse" />
              <div className="h-4 w-full bg-[var(--color-bg-surface)] rounded animate-pulse" />
              <div className="h-4 w-2/3 bg-[var(--color-bg-surface)] rounded animate-pulse" />
            </div>
            <div className="flex gap-3">
              <div className="h-12 w-32 bg-[var(--color-bg-surface)] rounded-md animate-pulse" />
              <div className="h-12 w-32 bg-[var(--color-bg-surface)] rounded-md animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
