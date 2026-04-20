"use client";

import { useEffect, useState } from "react";
import GridBackground from "@/components/ui/GridBackground";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const phrases = [
  "Building products that ship",
  "Solving hard algorithms",
  "Thinking in systems",
  "Crafting clean interfaces",
  "Competing on Codeforces",
];

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState(phrases[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const phrase = phrases[currentPhrase];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < phrase.length) {
            setDisplayText(phrase.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(phrase.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentPhrase((currentPhrase + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase, isMounted]);

  return (
    <section className="relative min-h-[75dvh] flex items-center px-6 md:px-10 py-12 md:py-20 overflow-hidden">
      <GridBackground />

      <div className="relative z-10 max-w-7xl mr-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-4 md:mb-6">
          <div className="w-8 h-px bg-[var(--color-gold)]" />
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-[var(--color-gold)]">
            Full-Stack Developer & Problem Solver
          </p>
        </div>

        {/* Name */}
        <h1
          className="font-display font-bold leading-tight mb-4 md:mb-6"
          style={{ fontSize: "clamp(42px, 7vw, 68px)" }}
        >
          Ahad
          <br />
          <span className="italic text-[var(--color-gold)]">Ahamed</span> Akash
        </h1>

        {/* Typewriter */}
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <span className="font-mono text-sm md:text-base text-[var(--color-text-tertiary)]">
            &gt;_
          </span>
          <span className="font-mono text-sm md:text-base text-[var(--color-copper)]">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Bio */}
        <p className="font-sans font-light leading-relaxed max-w-[520px] text-[var(--color-text-secondary)] mb-6 md:mb-8 text-sm md:text-base">
          From medical student to full-stack engineer — I build real products
          and sharpen my problem-solving through competitive programming. 1.5+
          years shipping at scale, 10+ projects delivered, 160+ algorithmic
          problems solved.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-12">
          <Button
            variant="default"
            className="bg-[var(--color-gold)] text-[var(--color-bg-primary)] hover:bg-[var(--color-gold)]/90 text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects →
          </Button>
          <Button
            variant="outline"
            className="border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-overlay)] text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
          >
            Download Resume
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 lg:gap-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full">
            <div className="flex flex-col">
              <span className="font-display text-2xl md:text-3xl text-[var(--color-text-primary)]">
                10+
              </span>
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
                Projects shipped
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl md:text-3xl text-[var(--color-text-primary)]">
                160+
              </span>
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
                Problems solved
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl md:text-3xl text-[var(--color-text-primary)]">
                1.5yr
              </span>
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
                Industry xp
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl md:text-3xl text-[var(--color-text-primary)]">
                40%
              </span>
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
                Dev time saved
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center pb-8">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent" />
        <div className="relative flex flex-col items-center gap-2 animate-bounce">
          <ChevronDown className="w-5 h-5 text-[var(--color-text-tertiary)]" />
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
