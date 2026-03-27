"use client";

import { useEffect } from "react";

/**
 * Service Worker Registration Component
 *
 * Registers the service worker for PWA functionality.
 * Should be placed in the root layout.
 */
export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }

    // Register the service worker
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("Service Worker registered successfully:", registration.scope);

        // Listen for updates
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                // New content is available; refresh to get it
                if (confirm("New version available! Reload to update?")) {
                  window.location.reload();
                }
              }
            });
          }
        });
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });

    // Cleanup on unmount
    return () => {
      // Note: Service workers cannot be unregistered directly
      // They will be cleaned up when the browser closes
    };
  }, []);

  return null;
}
