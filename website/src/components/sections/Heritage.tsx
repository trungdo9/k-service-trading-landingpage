"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Leaf, Crown } from "lucide-react";

export function Heritage() {
  return (
    <section id="heritage" className="py-24 bg-eco-cream mesh-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Emblem Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-midnight-slate">
              The Emblem of Excellence
            </h2>
            <div className="w-16 h-1 bg-premium-gold mb-8" />
            <p className="text-lg leading-relaxed text-foreground/80 mb-8">
              Our emblem is more than a logo; it is a promise of quality and a testament to our heritage.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 bg-midnight-slate/5 p-3 rounded-full h-fit text-premium-gold">
                  <Crown className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-midnight-slate mb-2">The Crown of Supremacy</h4>
                  <p className="text-foreground/70">Representing the pinnacle of service quality and market leadership.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 bg-midnight-slate/5 p-3 rounded-full h-fit text-premium-gold">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-midnight-slate mb-2">The Laurel Wreath</h4>
                  <p className="text-foreground/70">A classic symbol of glory, peace, and sustainable development.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 bg-midnight-slate/5 p-3 rounded-full h-fit text-premium-gold">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-midnight-slate mb-2">The Gateway &apos;K&apos;</h4>
                  <p className="text-foreground/70">Solid and grounded, acting as the strategic bridge to international markets.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ESG Commitment */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-midnight-slate rounded-3xl p-6 sm:p-8 md:p-12 text-pure-white relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-premium-gold/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-premium-gold/5 rounded-full blur-[60px]" />
            
            <div className="relative z-10">
              <span className="text-premium-gold font-bold tracking-widest uppercase text-sm mb-4 block">Our Commitment</span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-snug">
                Environmental, Social, and Governance (ESG)
              </h3>
              <p className="text-pure-white/80 text-lg leading-relaxed mb-6">
                We believe that true luxury must coexist with responsibility. Our investments and operations are strictly aligned with ESG principles, prioritizing environmental balance and community well-being.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-pure-white/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-premium-gold" />
                  Sustainable Smart Agriculture (Zero-waste)
                </li>
                <li className="flex items-center gap-3 text-pure-white/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-premium-gold" />
                  Eco-friendly Supply Chains
                </li>
                <li className="flex items-center gap-3 text-pure-white/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-premium-gold" />
                  Community-driven Tourism Models
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
