import { LoadingSpinner } from "@/components/loading-spinner";

/**
 * Loading Page for Root Layout
 *
 * Displayed while the root page and its children are loading.
 * https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
 */

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingSpinner size="xl" text="Loading your experience..." />
    </div>
  );
}
