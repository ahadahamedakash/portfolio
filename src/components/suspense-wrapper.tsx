"use client";

import { Suspense, ComponentType, ReactNode } from "react";
import { LoadingSpinner, FullPageLoadingSpinner } from "./loading-spinner";
import { CardSkeleton } from "./loading-skeleton";

/**
 * Suspense Wrapper Component
 *
 * A wrapper around React's Suspense that provides loading states.
 *
 * @example
 * ```tsx
 * <SuspenseWrapper fallback={<LoadingSpinner />}>
 *   <AsyncComponent />
 * </SuspenseWrapper>
 * ```
 */

interface SuspenseWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  /** If true, shows a full-page loading overlay */
  fullPage?: boolean;
  /** Text to display during loading */
  loadingText?: string;
}

export function SuspenseWrapper({
  children,
  fallback,
  fullPage = false,
  loadingText = "Loading...",
}: SuspenseWrapperProps) {
  const defaultFallback = fullPage ? (
    <FullPageLoadingSpinner text={loadingText} />
  ) : (
    <LoadingSpinner text={loadingText} />
  );

  return <Suspense fallback={fallback || defaultFallback}>{children}</Suspense>;
}

/**
 * Higher-Order Component for adding loading states
 *
 * Wraps a component with Suspense and a loading state.
 *
 * @example
 * ```tsx
 * const withLoading = withSuspense(ProjectDetails, CardSkeleton);
 * <withLoading projectId="123" />
 * ```
 */

export function withSuspense<P extends object>(
  Component: ComponentType<P>,
  SkeletonComponent?: ComponentType<P>,
  loadingText?: string
) {
  return function WithSuspenseWrapper(props: P) {
    return (
      <Suspense
        fallback={
          SkeletonComponent ? (
            <SkeletonComponent {...props} />
          ) : (
            <LoadingSpinner text={loadingText} />
          )
        }
      >
        <Component {...props} />
      </Suspense>
    );
  };
}

/**
 * Component Wrapper for Loading States
 *
 * A convenient wrapper for components that need loading states.
 *
 * @example
 * ```tsx
 * <ComponentLoader
 *   component={ProjectDetails}
 *   skeleton={CardSkeleton}
 *   fallback={<CustomLoader />}
 *   props={{ projectId: "123" }}
 * />
 * ```
 */

interface ComponentLoaderProps<P extends object> {
  component: ComponentType<P>;
  props: P;
  skeleton?: ComponentType<P>;
  fallback?: ReactNode;
  loadingText?: string;
}

export function ComponentLoader<P extends object>({
  component: Component,
  props,
  skeleton: SkeletonComponent,
  fallback,
  loadingText,
}: ComponentLoaderProps<P>) {
  return (
    <Suspense
      fallback={
        fallback ||
        (SkeletonComponent ? (
          <SkeletonComponent {...props} />
        ) : (
          <LoadingSpinner text={loadingText} />
        ))
      }
    >
      <Component {...props} />
    </Suspense>
  );
}

/**
 * Async Component Wrapper
 *
 * Wraps a component that fetches data asynchronously with loading and error states.
 *
 * @example
 * ```tsx
 * <AsyncComponent
 *   component={UserProfile}
 *   loadingComponent={<LoadingSpinner />}
 *   errorComponent={ErrorFallback}
 *   props={{ userId: "123" }}
 * />
 * ```
 */

interface AsyncComponentProps<P extends object> {
  component: ComponentType<P>;
  props: P;
  loadingComponent?: ReactNode;
  errorComponent?: ComponentType<{ error: Error; retry: () => void }>;
}

export function AsyncComponent<P extends object>({
  component: Component,
  props,
  loadingComponent,
  errorComponent: _ErrorComponent,
}: AsyncComponentProps<P>) {
  return (
    <Suspense fallback={loadingComponent || <LoadingSpinner />}>
      <Component {...props} />
    </Suspense>
  );
}

/**
 * Section Suspense Wrapper
 *
 * A specialized Suspense wrapper for page sections.
 * Shows a skeleton appropriate for the section type.
 *
 * @example
 * ```tsx
 * <SectionSuspense section="projects">
 *   <ProjectsSection />
 * </SectionSuspense>
 * ```
 */

type SectionType = "projects" | "experience" | "skills" | "contact" | "hero";

interface SectionSuspenseProps {
  children: ReactNode;
  section?: SectionType;
  loadingText?: string;
}

const sectionSkeletons: Record<SectionType, ReactNode> = {
  projects: <CardSkeleton />,
  experience: <CardSkeleton />,
  skills: <LoadingSpinner text="Loading skills..." />,
  contact: <CardSkeleton />,
  hero: <LoadingSpinner text="Loading..." />,
};

export function SectionSuspense({
  children,
  section = "hero",
  loadingText: _loadingText,
}: SectionSuspenseProps) {
  return (
    <Suspense fallback={sectionSkeletons[section]}>
      {children}
    </Suspense>
  );
}
