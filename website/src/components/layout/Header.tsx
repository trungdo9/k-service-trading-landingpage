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

  const navLinks = [
    { name: "Giới thiệu", href: "#about" },
    { name: "SERVICES", href: "#ecosystem" },
    {
      name: "TRADING",
      href: "#trading",
      subItems: [
        { name: "FMCG", href: "#trading" },
        { name: "AGRI – Nông sản", href: "#trading" },
        { name: "Thuỷ hải sản", href: "#trading" },
        { name: "Năng lượng", href: "#trading" },
      ],
    },
    { name: "K.ECO TOURISM", href: "#ecosystem" },
    { name: "CONTACT", href: "#contact" },
  ];

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
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="flex items-center gap-3 cursor-pointer group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-premium-gold/50 group-hover:border-premium-gold transition-colors">
                  <img src="/images/logo.jpeg" alt="K Service Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-xl md:text-2xl font-serif font-bold text-premium-gold tracking-wider group-hover:text-pure-white transition-colors">
                  K SERVICE
                </span>
              </a>
            </div>

            {/* Desktop Center Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group h-20 flex items-center">
                  <a
                    href={link.href}
                    className="text-sm font-medium text-pure-white transition-colors hover:text-premium-gold cursor-pointer flex items-center gap-1"
                  >
                    {link.name}
                    {link.subItems && <ChevronDown className="w-4 h-4" />}
                  </a>
                  {link.subItems && (
                    <div className="absolute top-20 left-0 min-w-[200px] bg-pure-white rounded-xl shadow-xl border border-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 flex flex-col py-2">
                      {link.subItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="px-6 py-3 text-sm font-medium text-midnight-slate hover:bg-eco-cream hover:text-premium-gold transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={() => setLang(lang === "EN" ? "VN" : "EN")}
                className="text-sm font-medium text-pure-white transition-colors cursor-pointer hover:text-premium-gold hidden sm:block"
              >
                {lang} | {lang === "EN" ? "VN" : "EN"}
              </button>
              <Button
                variant="solid"
                size="sm"
                className="hidden sm:inline-flex"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in touch
              </Button>
              {/* Hamburger Button (mobile only) */}
              <button
                id="mobile-menu-toggle"
                aria-label="Toggle mobile menu"
                className="lg:hidden p-2 text-pure-white hover:text-premium-gold transition-colors"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
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
              {navLinks.map((link) => (
                <div key={link.name}>
                  <div className="flex items-center justify-between">
                    <button
                      className="flex-1 text-left py-3.5 text-base font-medium text-pure-white hover:text-premium-gold transition-colors"
                      onClick={() => {
                        if (link.subItems) {
                          setExpandedItem(expandedItem === link.name ? null : link.name);
                        } else {
                          handleMobileNavClick(link.href);
                        }
                      }}
                    >
                      {link.name}
                    </button>
                    {link.subItems && (
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-pure-white/60 transition-transform duration-200",
                          expandedItem === link.name && "rotate-180"
                        )}
                      />
                    )}
                  </div>
                  {/* Sub-items */}
                  <AnimatePresence>
                    {link.subItems && expandedItem === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4 border-l border-premium-gold/30"
                      >
                        {link.subItems.map((sub) => (
                          <button
                            key={sub.name}
                            className="block w-full text-left py-2.5 text-sm text-pure-white/70 hover:text-premium-gold transition-colors"
                            onClick={() => handleMobileNavClick(sub.href)}
                          >
                            {sub.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
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
