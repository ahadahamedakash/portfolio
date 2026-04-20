"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    return pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-sm bg-[--color-bg-primary]/80 border-b border-[var(--color-border-subtle)]"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display text-xl">
            Ah<span className="text-[var(--color-gold)]">@</span>d
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-xs uppercase tracking-wider transition-colors ${
                  isActive(link.href)
                    ? "text-[var(--color-gold)]"
                    : "text-[var(--color-text-tertiary)] hover:text-[var(--color-gold)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <div className="relative">
              <div className="w-1.5 h-1.5 bg-[var(--color-sage)] rounded-full animate-pulse" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-tertiary)]">
              open to work
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[var(--color-text-primary)]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--color-bg-primary)] border-b border-[var(--color-border-subtle)] py-4 px-10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-sans text-xs uppercase tracking-wider transition-colors ${
                    isActive(link.href)
                      ? "text-[var(--color-gold)]"
                      : "text-[var(--color-text-tertiary)] hover:text-[var(--color-gold)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-2">
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                )}
                <div className="w-1.5 h-1.5 bg-[var(--color-sage)] rounded-full animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-tertiary)]">
                  open to work
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
