"use client";

import { ErrorBoundary } from "./error-boundary";

/**
 * Client-side Error Boundary wrapper for the app
 *
 * This component wraps the app with an ErrorBoundary to catch
 * and handle React component errors.
 */

interface AppErrorBoundaryProps {
  children: React.ReactNode;
}

export function AppErrorBoundary({ children }: AppErrorBoundaryProps) {
  return (
    <ErrorBoundary
      onError={(error, errorInfo) => {
        // Log error to console in development
        if (process.env.NODE_ENV === "development") {
          console.error("Error caught by boundary:", error, errorInfo);
        }

        // TODO: Send error to error reporting service (e.g., Sentry)
        // Example: Sentry.captureException(error, { contexts: { react: errorInfo } });
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
