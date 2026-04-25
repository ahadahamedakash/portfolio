"use client";

import { ContactContent } from "@/components/ui/ContactContent";
import { ContactCard } from "@/components/ui/ContactCard";

/**
 * Contact Section
 *
 * Final section with two-column layout:
 * - Left: Headline, description, availability badges
 * - Right: Contact card with all methods
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[var(--color-bg-primary)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* LEFT COLUMN - Content */}
          <ContactContent />

          {/* RIGHT COLUMN - Contact Card */}
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
