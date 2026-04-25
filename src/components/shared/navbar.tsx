"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Briefcase, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useScroll } from "@/hooks/use-scroll";
import { SCROLL_THRESHOLD } from "@/lib/constants";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/#contact", label: "Contact", icon: MessageCircle },
];

export function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  // Use custom scroll hook with constant threshold
  const { scrolled } = useScroll(SCROLL_THRESHOLD.NAVBAR);

  // Track hero scroll state
  const [heroScrolled, setHeroScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHeroScrolled(scrollY > (typeof window !== "undefined" ? window.innerHeight : 0));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const otherThenHome = pathname.includes("projects");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "dark:bg-background/90 backdrop-blur-md border-b border-border/10"
          : "bg-transparent border-border/10"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container py-3 sm:py-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Ahad Ahamed Akash - Home"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-bold text-2xl gradient-text"
            >
              Ah@d
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center space-x-1 min-h-[44px] px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="sr-only">{item.label}</span>
                  <item.icon
                    className={cn(
                      "w-4 h-4",
                      heroScrolled
                        ? "text-primary dark:text-white"
                        : otherThenHome
                        ? "text-primary "
                        : "text-white"
                    )}
                    aria-hidden="true"
                  />
                  <span
                    className={cn(
                      heroScrolled
                        ? "text-primary dark:text-white"
                        : otherThenHome
                        ? "text-primary dark:text-white"
                        : "text-white"
                    )}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      className={cn(
                        "absolute left-1/2 top-0 h-full -translate-x-1/2 -z-10",
                        heroScrolled
                          ? "border-primary dark:border-white"
                          : otherThenHome
                          ? "border-primary dark:border-white"
                          : "border-white"
                      )}
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "100%" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      style={{
                        borderBottomWidth: 4,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className={cn(
                "min-h-[44px] min-w-[44px] border",
                heroScrolled
                  ? "text-primary border-primary dark:text-white"
                  : otherThenHome
                  ? "text-primary border-primary dark:text-white"
                  : "text-white"
              )}
            >
              {isOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md overflow-hidden"
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 min-h-[44px] px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "text-primary bg-primary/10 dark:text-foreground dark:bg-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
