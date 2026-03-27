import { cn } from "@/lib/utils";

/**
 * Loading Skeleton Component
 *
 * Displays a skeleton placeholder to simulate content layout while loading.
 *
 * @example
 * ```tsx
 * <Skeleton className="h-12 w-12 rounded-full" />
 * <Skeleton className="h-4 w-[250px]" />
 * ```
 */

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Custom CSS classes */
  className?: string;
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

/**
 * Card Skeleton Component
 *
 * A pre-built skeleton for card components.
 *
 * @example
 * ```tsx
 * <CardSkeleton />
 * ```
 */

export function CardSkeleton() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
      {/* Header */}
      <div className="space-y-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>

      {/* Body */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>

      {/* Footer */}
      <div className="flex gap-2">
        <Skeleton className="h-9 w-24" />
        <Skeleton className="h-9 w-24" />
      </div>
    </div>
  );
}

/**
 * Project Card Skeleton Component
 *
 * A skeleton specifically designed for project cards.
 *
 * @example
 * ```tsx
 * <ProjectCardSkeleton />
 * ```
 */

export function ProjectCardSkeleton() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      {/* Image */}
      <Skeleton className="w-full h-48" />

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <Skeleton className="h-6 w-3/4" />

        {/* Description */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  );
}

/**
 * Experience Timeline Skeleton Component
 *
 * A skeleton for the experience timeline section.
 *
 * @example
 * ```tsx
 * <ExperienceTimelineSkeleton />
 * ```
 */

export function ExperienceTimelineSkeleton() {
  return (
    <div className="space-y-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-4">
          {/* Timeline indicator */}
          <div className="flex flex-col items-center">
            <Skeleton className="h-4 w-4 rounded-full" />
            {i < 3 && <Skeleton className="w-0.5 flex-1 mt-2" />}
          </div>

          {/* Content */}
          <div className="flex-1 space-y-3 pb-8">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-14 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Skills Marquee Skeleton Component
 *
 * A skeleton for the skills marquee section.
 *
 * @example
 * ```tsx
 * <SkillsMarqueeSkeleton />
 * ```
 */

export function SkillsMarqueeSkeleton() {
  return (
    <div className="flex gap-6 overflow-hidden">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className="flex-shrink-0 space-y-2">
          <Skeleton className="h-16 w-16 rounded-lg" />
          <Skeleton className="h-4 w-16 mx-auto" />
        </div>
      ))}
    </div>
  );
}
