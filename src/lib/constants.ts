/**
 * Application Constants
 *
 * Centralized configuration values for animations, breakpoints, and UI behavior
 */

/**
 * Animation durations (in seconds)
 */
export const ANIMATION_DURATION = {
  FAST: 0.3,
  NORMAL: 0.6,
  SLOW: 1.0,
  VERY_SLOW: 2.0,
} as const;

/**
 * Animation delays (in seconds)
 */
export const ANIMATION_DELAY = {
  INSTANT: 0,
  SHORT: 0.2,
  NORMAL: 0.4,
  LONG: 0.6,
  VERY_LONG: 1.0,
} as const;

/**
 * Typing animation configuration
 */
export const TYPING_ANIMATION = {
  /** Duration per character in seconds */
  CHAR_DURATION: 0.15,
  /** Initial delay before typing starts */
  INITIAL_DELAY: 0.2,
  /** Easing function for typing */
  EASE: "easeInOut" as const,
} as const;

/**
 * Scroll thresholds (in pixels)
 */
export const SCROLL_THRESHOLD = {
  /** Navbar background change threshold */
  NAVBAR: 50,
  /** Hero section scroll threshold */
  HERO_SECTION: 0,
  /** General scroll detection threshold */
  DEFAULT: 10,
} as const;

/**
 * Responsive breakpoints (in pixels)
 */
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
} as const;

/**
 * Responsive breakpoints as media queries
 */
export const MEDIA_QUERIES = {
  MOBILE: `(max-width: ${BREAKPOINTS.MD - 1}px)`,
  TABLET: `(min-width: ${BREAKPOINTS.MD}px) and (max-width: ${BREAKPOINTS.LG - 1}px)`,
  DESKTOP: `(min-width: ${BREAKPOINTS.LG}px)`,
  LARGE_DESKTOP: `(min-width: ${BREAKPOINTS.XL}px)`,
} as const;

/**
 * Image sizes (in pixels)
 */
export const IMAGE_SIZES = {
  THUMBNAIL: 16,
  SMALL: 32,
  MEDIUM: 64,
  LARGE: 128,
  XLARGE: 256,
  PROJECT_CARD_WIDTH: 600,
  PROJECT_CARD_HEIGHT: 400,
  PROJECT_THUMB_WIDTH: 300,
  PROJECT_THUMB_HEIGHT: 200,
} as const;

/**
 * Device sizes for Next.js Image optimization
 */
export const DEVICE_SIZES = [
  640, 750, 828, 1080, 1200, 1920, 2048, 3840,
] as const;

/**
 * Image sizes for Next.js Image optimization
 */
export const RESPONSIVE_IMAGE_SIZES = [
  16, 32, 48, 64, 96, 128, 256, 384,
] as const;

/**
 * Z-index layers
 */
export const Z_INDEX = {
  BASE: 0,
  DROPDOWN: 10,
  STICKY: 50,
  MODAL: 100,
  POPOVER: 200,
  TOOLTIP: 300,
} as const;

/**
 * Transition durations (in milliseconds)
 */
export const TRANSITION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
  VERY_SLOW: 700,
} as const;

/**
 * Stagger animation delays (in seconds)
 */
export const STAGGER_DELAY = {
  FAST: 0.05,
  NORMAL: 0.1,
  SLOW: 0.2,
} as const;

/**
 * Hover scale values
 */
export const HOVER_SCALE = {
  SUBTLE: 1.02,
  NORMAL: 1.05,
  PRONOUNCED: 1.1,
} as const;

/**
 * Blur placeholder data URL for images
 */
export const BLUR_PLACEHOLDER =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q==";

/**
 * Color scheme configuration
 */
export const COLOR_SCHEME = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
} as const;

/**
 * Theme configuration
 */
export const THEME_CONFIG = {
  /** Default theme */
  DEFAULT: COLOR_SCHEME.LIGHT,
  /** Enable system theme detection */
  ENABLE_SYSTEM: true,
  /** Disable transition on theme change */
  DISABLE_TRANSITION_ON_CHANGE: true,
} as const;

/**
 * Lazy loading configuration
 */
export const LAZY_LOADING = {
  /** Components below the fold that should be lazy loaded */
  BELOW_FOLD_COMPONENTS: [
    "ExperienceSection",
    "SkillsSection",
    "ProjectsSection",
    "ContactSection",
  ],
  /** Root margin for Intersection Observer (in pixels) */
  ROOT_MARGIN: "200px",
  /** Threshold for Intersection Observer (0-1) */
  THRESHOLD: 0.01,
} as const;

/**
 * Cache durations (in seconds)
 */
export const CACHE_DURATION = {
  /** Image cache duration */
  IMAGE: 60,
  /** Static data cache duration */
  STATIC_DATA: 3600,
  /** API response cache duration */
  API_RESPONSE: 300,
} as const;

/**
 * Accessibility settings
 */
export const A11Y = {
  /** Skip to content link target */
  SKIP_TO_CONTENT_TARGET: "main-content",
  /** Focus visible outline width (in pixels) */
  FOCUS_OUTLINE_WIDTH: 2,
  /** Minimum touch target size (in pixels) */
  MIN_TOUCH_TARGET: 44,
} as const;
