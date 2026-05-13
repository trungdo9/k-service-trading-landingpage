"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<"EN" | "VN">("VN");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const navLinksLeft = [
    { name: "K", href: "#about" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
  ];

  const navLinksRight = [
    { name: "Deltafarm", href: "#deltafarm" },
    { name: "Ecotourism", href: "#eco-tourism" },
    { name: "Contact", href: "#contact" },
  ];

  const allNavLinks = [...navLinksLeft, ...navLinksRight];

  const handleMobileNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setExpandedItem(null);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          isScrolled || isMobileMenuOpen ? "bg-midnight-slate shadow-lg" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile Header Layout */}
          <div className="flex lg:hidden items-center justify-between h-20 w-full">
            <button
              id="mobile-menu-toggle"
              aria-label="Toggle mobile menu"
              className="p-2 -ml-2 text-pure-white hover:text-premium-gold transition-colors"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <a href="#" className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-premium-gold/50 group-hover:border-premium-gold transition-colors">
                <img src="/images/logo.jpeg" alt="K Service Logo" className="w-full h-full object-cover" />
              </div>
            </a>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLang(lang === "EN" ? "VN" : "EN")}
                className="text-sm font-medium text-pure-white transition-colors cursor-pointer hover:text-premium-gold"
              >
                {lang}
              </button>
            </div>
          </div>

          {/* Desktop Header Layout (Grid: 1fr auto auto auto 1fr) */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_auto_auto_1fr] items-center h-20 w-full">
            
            {/* Col 1: Empty left spacer */}
            <div></div>

            {/* Col 2: Desktop Nav Left */}
            <nav className="flex items-center space-x-6 xl:space-x-8 pr-8 xl:pr-12">
              {navLinksLeft.map((link) => (
                <div key={link.name} className="relative group h-20 flex items-center">
                  <a
                    href={link.href}
                    className="text-sm font-medium text-pure-white transition-colors hover:text-premium-gold cursor-pointer flex items-center gap-1 uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </nav>

            {/* Col 3: Logo */}
            <div className="flex items-center justify-center">
              <a href="#" className="flex items-center gap-3 cursor-pointer group">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-premium-gold/50 group-hover:border-premium-gold transition-colors">
                  <img src="/images/logo.jpeg" alt="K Service Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-2xl font-serif font-bold text-premium-gold tracking-wider group-hover:text-pure-white transition-colors">
                  K SERVICE
                </span>
              </a>
            </div>

            {/* Col 4: Desktop Nav Right */}
            <nav className="flex items-center space-x-6 xl:space-x-8 pl-8 xl:pl-12">
              {navLinksRight.map((link) => (
                <div key={link.name} className="relative group h-20 flex items-center">
                  <a
                    href={link.href}
                    className="text-sm font-medium text-pure-white transition-colors hover:text-premium-gold cursor-pointer flex items-center gap-1 uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </nav>

            {/* Col 5: Right Actions */}
            <div className="flex items-center justify-end gap-4">
              <button
                onClick={() => setLang(lang === "EN" ? "VN" : "EN")}
                className="text-sm font-medium text-pure-white transition-colors cursor-pointer hover:text-premium-gold"
              >
                {lang} | {lang === "EN" ? "VN" : "EN"}
              </button>
              <Button
                variant="solid"
                size="sm"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in touch
              </Button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-0 right-0 z-40 bg-midnight-slate/95 backdrop-blur-xl border-b border-white/10 shadow-2xl lg:hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
              {allNavLinks.map((link) => (
                <div key={link.name}>
                  <div className="flex items-center justify-between">
                    <button
                      className="flex-1 text-left py-3.5 text-base font-medium text-pure-white hover:text-premium-gold transition-colors uppercase tracking-wider"
                      onClick={() => handleMobileNavClick(link.href)}
                    >
                      {link.name}
                    </button>
                  </div>
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setLang(lang === "EN" ? "VN" : "EN")}
                  className="text-sm font-medium text-pure-white/70 hover:text-premium-gold transition-colors"
                >
                  {lang} | {lang === "EN" ? "VN" : "EN"}
                </button>
                <Button
                  id="mobile-get-in-touch"
                  variant="solid"
                  size="sm"
                  onClick={() => handleMobileNavClick("#contact")}
                >
                  Get in touch
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
