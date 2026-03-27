"use client";

import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Next.js App Router Global Error Page
 *
 * This page is displayed when an error occurs in the root layout.
 * It replaces the entire root layout, so it must define its own HTML and body tags.
 *
 * https://nextjs.org/docs/app/building-your-application/routing/error-handling
 */

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
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
                Critical Error
              </h1>
              <p className="text-muted-foreground">
                A critical error occurred that prevented the application from
                loading. Please try refreshing the page.
              </p>
            </div>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === "development" && (
              <details className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 text-left">
                <summary className="cursor-pointer text-sm font-medium text-destructive mb-2">
                  Error Details
                </summary>
                <p className="text-sm text-destructive/80 mb-2">
                  {error.message}
                </p>
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

            {/* Action Button */}
            <div className="flex justify-center">
              <Button
                onClick={() => window.location.reload()}
                className="gap-2"
                size="lg"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </Button>
            </div>

            {/* Support Link */}
            <p className="text-sm text-muted-foreground">
              If the problem persists, please{" "}
              <a
                href="mailto:ahadahamedakash@gmail.com"
                className="text-primary hover:underline"
              >
                contact support
              </a>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
