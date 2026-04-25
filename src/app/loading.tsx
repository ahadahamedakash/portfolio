import Preloader from "@/components/ui/Preloader";

/**
 * Root Loading Component
 *
 * This shows during:
 * - Initial page load (if Preloader was already seen)
 * - Route transitions between pages
 * - Client-side navigation
 *
 * Design: Minimal, fast loading indicator that doesn't block content
 */
export default function Loading() {
  return (
    <Preloader />
    // <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-primary)]">
    //   <div className="flex flex-col items-center gap-4">
    //     {/* Simple, elegant loading spinner */}
    //     <div className="relative w-12 h-12">
    //       <div className="absolute inset-0 border-2 border-[var(--color-gold)] border-t-transparent rounded-full animate-spin" />
    //     </div>

    //     {/* Loading text */}
    //     <p className="font-mono text-xs text-[var(--color-text-tertiary)]">
    //       Loading...
    //     </p>
    //   </div>
    // </div>
  );
}
