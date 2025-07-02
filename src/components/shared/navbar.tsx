"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Briefcase, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

import { ThemeToggle } from "../theme/theme-toggle";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/#contact", label: "Contact", icon: MessageCircle },
];

export function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [heroScrolled, setHeroScrolled] = useState(false);

  const otherThenHome = pathname.includes("projects");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      setHeroScrolled(scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "dark:bg-background/90 backdrop-blur-md border-b border-border/10"
          : "bg-transparent border-border/10"
      }`}
    >
      <div className="container py-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-bold text-2xl gradient-text"
            >
              Ah@d
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                >
                  <item.icon
                    className={cn(
                      "w-4 h-4",
                      heroScrolled
                        ? "text-primary"
                        : otherThenHome
                        ? "text-primary"
                        : "text-white"
                    )}
                  />
                  <span
                    className={cn(
                      heroScrolled
                        ? "text-primary"
                        : otherThenHome
                        ? "text-primary"
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
                          ? "border-primary"
                          : otherThenHome
                          ? "border-primary"
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
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "h-10 w-10 border",
                heroScrolled
                  ? "text-primary border-primary"
                  : otherThenHome
                  ? "text-primary border-primary"
                  : "text-white border-white"
              )}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
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
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
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
