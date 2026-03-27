"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Next.js App Router Error Page
 *
 * This page is displayed when an error occurs in the app.
 * It must be a Client Component because it uses React hooks.
 *
 * https://nextjs.org/docs/app/building-your-application/routing/error-handling
 */

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-destructive/20 rounded-full blur-xl animate-pulse" />
            <AlertCircle className="relative w-20 h-20 text-destructive" />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">
            Something went wrong!
          </h1>
          <p className="text-muted-foreground">
            We encountered an unexpected error. This has been logged and
            we'll look into it.
          </p>
        </div>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === "development" && (
          <details className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 text-left">
            <summary className="cursor-pointer text-sm font-medium text-destructive mb-2">
              Error Details
            </summary>
            <p className="text-sm text-destructive/80 mb-2">{error.message}</p>
            {error.digest && (
              <p className="text-xs text-muted-foreground">
                Error ID: {error.digest}
              </p>
            )}
            {error.stack && (
              <pre className="text-xs text-destructive/70 overflow-auto max-h-40 mt-2 whitespace-pre-wrap">
                {error.stack}
              </pre>
            )}
          </details>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
            className="gap-2"
            size="lg"
          >
            <RefreshCw className="w-4 h-4" />
            Try again
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <Home className="w-4 h-4" />
            Go home
          </Button>
        </div>

        {/* Support Link */}
        <p className="text-sm text-muted-foreground">
          Need help?{" "}
          <a
            href="mailto:ahadahamedakash@gmail.com"
            className="text-primary hover:underline"
          >
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
}
