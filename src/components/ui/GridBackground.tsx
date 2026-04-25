"use client";

interface GridBackgroundProps {
  className?: string;
}

export default function GridBackground({ className = "" }: GridBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="grid-fine"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-[var(--color-gold)]"
              opacity="0.07"
            />
          </pattern>
          <pattern
            id="grid-large"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <rect width="120" height="120" fill="url(#grid-fine)" />
            <path
              d="M 120 0 L 0 0 0 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-[var(--color-gold)]"
              opacity="0.12"
            />
          </pattern>
          <radialGradient
            id="grid-glow"
            cx="100%"
            cy="0%"
            r="50%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="currentColor" className="text-[var(--color-gold)]" stopOpacity="0.03" />
            <stop offset="100%" stopColor="currentColor" className="text-[var(--color-gold)]" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-large)" />
        <circle
          cx="100%"
          cy="0%"
          r="400"
          fill="url(#grid-glow)"
        />
      </svg>
    </div>
  );
}
