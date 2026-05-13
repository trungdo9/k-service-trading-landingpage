"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Leaf, Award, ShieldCheck, Globe2, Zap } from "lucide-react";

export function WhyUs() {
  const values = [
    { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation", desc: "Applying AI, big data, and digital tech to transform ideas into advantages." },
    { icon: <Leaf className="w-6 h-6" />, title: "Sustainability", desc: "Prioritizing ESG to promote environmental and community benefits." },
    { icon: <Award className="w-6 h-6" />, title: "Professionalism", desc: "An elite international advisory team with decades of experience." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Transparency", desc: "Building strong trust in every investment and partnership decision." },
    { icon: <Globe2 className="w-6 h-6" />, title: "Global Cooperation", desc: "Strategic relationships to create long-term shared value." },
    { icon: <Zap className="w-6 h-6" />, title: "Efficiency", desc: "Focusing on high ROI and operational excellence for investors." },
  ];

  return (
    <section id="why-us" className="py-24 bg-midnight-slate text-pure-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-pure-white">
              Why K Service Trading
            </h2>
            <div className="w-24 h-1 bg-premium-gold mx-auto mb-8" />
            <p className="text-lg md:text-xl text-pure-white/80 font-light">
              Our vision is to become the leading multi-sector trading and service company in Southeast Asia, acting as a strategic gateway to the global ecosystem.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-pure-white/5 border border-white/10 p-8 rounded-2xl hover:bg-pure-white/10 transition-colors"
            >
              <div className="text-premium-gold mb-6 bg-premium-gold/10 w-14 h-14 rounded-xl flex items-center justify-center">
                {val.icon}
              </div>
              <h3 className="font-serif font-bold text-2xl mb-3">{val.title}</h3>
              <p className="text-pure-white/70 leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
