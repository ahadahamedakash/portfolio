import { availabilityBadges } from "@/lib/contact-data";

/**
 * Availability Badges Component
 *
 * Shows current work status and availability
 * Displays three badges with colored indicators
 */
export function AvailabilityBadges() {
  return (
    <div className="flex flex-wrap gap-4 mb-10" style={{ gap: "20px", marginBottom: "40px" }}>
      {availabilityBadges.map((badge, index) => (
        <div key={index} className="flex items-center gap-2" style={{ gap: "8px" }}>
          <div
            className="rounded-full"
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: badge.color,
            }}
          />
          <span
            className="font-sans text-sm"
            style={{
              fontSize: "13px",
              color: "rgba(242,237,228,0.6)",
            }}
          >
            {badge.label}
          </span>
        </div>
      ))}
    </div>
  );
}
