import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Loading Spinner Component
 *
 * A customizable loading spinner for indicating loading states.
 *
 * @example
 * ```tsx
 * <LoadingSpinner size="lg" />
 * <LoadingSpinner className="text-primary" />
 * ```
 */

interface LoadingSpinnerProps {
  /** Size of the spinner */
  size?: "sm" | "md" | "lg" | "xl";
  /** Custom CSS classes */
  className?: string;
  /** Text to display below the spinner */
  text?: string;
}

export function LoadingSpinner({
  size = "md",
  className,
  text,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  return (
    <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
      <Loader2 className={cn("animate-spin text-primary", sizeClasses[size])} />
      {text && (
        <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
      )}
    </div>
  );
}

/**
 * Full Page Loading Spinner
 *
 * A full-page loading overlay for page transitions and major loading states.
 *
 * @example
 * ```tsx
 * <FullPageLoadingSpinner text="Loading your data..." />
 * ```
 */

interface FullPageLoadingSpinnerProps {
  /** Text to display below the spinner */
  text?: string;
  /** Custom CSS classes */
  className?: string;
}

export function FullPageLoadingSpinner({
  text = "Loading...",
  className,
}: FullPageLoadingSpinnerProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm",
        className
      )}
    >
      <LoadingSpinner size="xl" text={text} />
    </div>
  );
}

/**
 * Inline Loading Spinner
 *
 * A small inline spinner for buttons and inline loading states.
 *
 * @example
 * ```tsx
 * <button>
 *   <InlineLoadingSpinner />
 *   Loading...
 * </button>
 * ```
 */

export function InlineLoadingSpinner({ className }: { className?: string }) {
  return <Loader2 className={cn("h-4 w-4 animate-spin", className)} />;
}
