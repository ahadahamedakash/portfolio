"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePWAInstall } from "@/hooks/use-pwa-install";
import { useIsMobile } from "@/hooks/use-media-query";

/**
 * PWA Install Prompt Component
 *
 * Displays an installation prompt when the PWA can be installed.
 * Only shows on supported platforms and when not already installed.
 */
export function PWAInstallPrompt() {
  const { isInstallable, isInstalled, installPWA } = usePWAInstall();
  const [dismissed, setDismissed] = useState(false);
  const isMobile = useIsMobile();

  // Check if iOS
  const isIos =
    typeof window !== "undefined" &&
    /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());

  // Don't show if dismissed, not installable, or already installed
  if (dismissed || !isInstallable || isInstalled) {
    return null;
  }

  const handleDismiss = () => {
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto z-50"
      >
        <div className="bg-background border border-border/10 shadow-lg rounded-2xl p-4 md:p-6 max-w-md mx-auto backdrop-blur-md">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              {/* App Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/50 rounded-xl flex items-center justify-center text-white font-bold text-xl shrink-0">
                A
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  Install Portfolio App
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isIos ? (
                    <>
                      Install on your iOS device for offline access and
                      push notifications.
                    </>
                  ) : (
                    <>
                      Install for offline access and a native app
                      experience.
                    </>
                  )}
                </p>

                {isIos && (
                  <div className="mt-2 text-xs text-muted-foreground">
                    <p>
                      <strong>To install:</strong>
                    </p>
                    <ol className="list-decimal list-inside mt-1 space-y-1">
                      <li>
                        Tap Share
                        <span className="inline-block ml-1">
                          <svg
                            className="inline w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M15 8a3 3 0 00-6 0 3 3 0 006 0zm6 7a3 3 0 01-6 0 3 3 0 016 0zm-6-4a3 3 0 100-6 3 3 0 000 6zm-6 4a3 3 0 100-6 3 3 0 000 6z" />
                          </svg>
                        </span>
                      </li>
                      <li>Tap "Add to Home Screen"</li>
                      <li>Tap "Add"</li>
                    </ol>
                  </div>
                )}
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="shrink-0 p-1 hover:bg-muted rounded-md transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Install Button */}
          {!isIos && (
            <div className="mt-4 flex gap-2">
              <Button
                onClick={installPWA}
                className="flex-1 gap-2"
                size={isMobile ? "default" : "sm"}
              >
                <Download className="w-4 h-4" />
                Install Now
              </Button>
              <Button
                onClick={handleDismiss}
                variant="outline"
                size={isMobile ? "default" : "sm"}
              >
                Maybe Later
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
