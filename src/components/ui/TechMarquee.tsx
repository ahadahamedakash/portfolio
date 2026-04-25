"use client";

export default function TechMarquee() {
  const row1Items = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Redux Toolkit",
    "Tailwind CSS",
    "Express.js",
    "JWT",
    "Framer Motion",
    "ShadCN",
    "REST APIs",
    "Mongoose",
  ];

  const row2Items = [
    "Git",
    "GitHub",
    "Vercel",
    "Postman",
    "VS Code",
    "Claude Code",
    "Codeforces",
    "LeetCode",
    "CodeChef",
    "Jest",
    "Vitest",
    "Firebase",
    "Clerk",
    "NextAuth",
  ];

  return (
    <div className="w-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "20px 0" }}>
      {/* Row 1 - Scrolls Left */}
      <div className="mb-2">
        <div className="flex animate-marquee-left hover:[animation-play-state:paused]">
          {[...Array(3)].fill(null).map((_, i) => (
            <div key={`row1-${i}`} className="flex items-center shrink-0">
              {row1Items.map((item, j) => (
                <span key={`${i}-${j}`} className="font-mono text-[13px] transition-colors hover:[color:rgba(242,237,228,0.8)]" style={{ color: "rgba(242,237,228,0.35)" }}>
                  {item}
                  <span style={{ color: "#B5A06A", margin: "0 16px" }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Scrolls Right */}
      <div>
        <div className="flex animate-marquee-right hover:[animation-play-state:paused]">
          {[...Array(3)].fill(null).map((_, i) => (
            <div key={`row2-${i}`} className="flex items-center shrink-0">
              {row2Items.map((item, j) => (
                <span key={`${i}-${j}`} className="font-mono text-[13px] transition-colors hover:[color:rgba(242,237,228,0.8)]" style={{ color: "rgba(242,237,228,0.35)" }}>
                  {item}
                  <span style={{ color: "#B5A06A", margin: "0 16px" }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }

        @keyframes marquee-right {
          from { transform: translateX(-33.333%); }
          to { transform: translateX(0); }
        }

        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }
      `}</style>
    </div>
  );
}
