"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "K-ECOTOURISM",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy submit handler
    alert("Thank you for your inquiry. Our team will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-eco-cream mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pure-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* VIP Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-midnight-slate mesh-bg-dark p-6 sm:p-8 lg:p-16 text-pure-white flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-premium-gold/10 rounded-full blur-[80px]" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gradient-gold drop-shadow-sm">
                  Get in Touch
                </h2>
                <div className="w-16 h-1 bg-premium-gold mb-8" />
                <p className="text-pure-white/80 text-lg mb-12 max-w-md leading-relaxed">
                  Connect with our international advisory team to explore strategic partnerships and premium investment opportunities.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-premium-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Global Headquarters</h4>
                      <p className="text-pure-white/70">Vietnam & Southeast Asia Hub</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-premium-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">VIP Hotline</h4>
                      <p className="text-pure-white/70">(+84) 935 7777 27</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-premium-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email</h4>
                      <p className="text-pure-white/70">info@k-tourism.club</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Inquiry Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 sm:p-8 lg:p-16"
            >
              <h3 className="text-2xl font-serif font-bold text-midnight-slate mb-8">Send an Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-midnight-slate mb-2">Full Name / Organization</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-midnight-slate/20 focus:border-premium-gold focus:ring-1 focus:ring-premium-gold outline-none transition-colors"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-midnight-slate mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-midnight-slate/20 focus:border-premium-gold focus:ring-1 focus:ring-premium-gold outline-none transition-colors"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-midnight-slate mb-2">Select your inquiry</label>
                  <select 
                    id="inquiry"
                    className="w-full px-4 py-3 rounded-xl border border-midnight-slate/20 focus:border-premium-gold focus:ring-1 focus:ring-premium-gold outline-none transition-colors bg-white"
                    value={formData.inquiry}
                    onChange={(e) => setFormData({...formData, inquiry: e.target.value})}
                  >
                    <option value="K-ECOTOURISM">K-ECOTOURISM</option>
                    <option value="K-TRADING">K-TRADING</option>
                    <option value="K-DUTY FREE">K-DUTY FREE</option>
                    <option value="K-SMART FARM">K-SMART FARM</option>
                    <option value="K-COUNSEL">K-COUNSEL</option>
                    <option value="K-INVESTMENT">K-INVESTMENT</option>
                    <option value="K-7 ENTERTAINMENT">K-7 ENTERTAINMENT</option>
                    <option value="Other">Other Strategic Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-midnight-slate mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-midnight-slate/20 focus:border-premium-gold focus:ring-1 focus:ring-premium-gold outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <Button type="submit" variant="solid" size="lg" className="w-full flex justify-between items-center group">
                  Submit Inquiry
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
