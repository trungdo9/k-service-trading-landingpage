"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const scrollToEcosystem = () => {
    document.getElementById("ecosystem")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-midnight-slate">
      {/* Background with Image and Gold Accents */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/images/hero_sunset.png" 
          alt="Modern Building at Sunset" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        <div className="absolute inset-0 bg-midnight-slate/75 z-10" />
        {/* Subtle premium gradient/glow in the background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-premium-gold/30 rounded-full blur-[128px] mix-blend-screen z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-premium-gold/20 rounded-full blur-[128px] mix-blend-screen z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-pure-white leading-tight mb-4 sm:mb-6">
            <span className="font-bold">Unlocking Value</span> <br />
            <span className="italic text-gradient-gold drop-shadow-md">Building the Future Together</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-pure-white/80 font-light max-w-2xl mx-auto mb-6 sm:mb-10">
            A Pioneer in Multi-Sector Trading and Eco-luxury Services
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Button variant="glass" size="lg" onClick={scrollToEcosystem}>
              Explore Our Ecosystem
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
