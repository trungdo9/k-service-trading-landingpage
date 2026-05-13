"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShoppingBag, Store, Sprout, Briefcase, TrendingUp, PartyPopper } from "lucide-react";

export function Ecosystem() {
  const scrollToContact = (subject: string) => {
    // In a real app, you might set the form subject state here via Context/URL params
    console.log("Subject selected:", subject);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const businessLines = [
    // ── FLAGSHIP ──
    {
      id: "ecotourism",
      title: "K-ECOTOURISM",
      description: "A global bridge to luxury travel. High-end tours, resort bookings, and personalized VIP wellness programs.",
      icon: <Leaf className="w-8 h-8 md:w-12 md:h-12 text-premium-gold mb-4 relative z-10" />,
      className: "col-span-1 md:col-span-2 md:row-span-2 bg-midnight-slate text-pure-white flex flex-col justify-between group overflow-hidden relative",
      isFlagship: true,
      image: "/images/eco_resort.png",
      textColor: "text-pure-white"
    },
    // ── SERVICES ──
    {
      id: "counsel",
      title: "K-COUNSEL",
      description: "Tư vấn tài chính đầu tư đa ngành – Liên kết quốc tế – Giải pháp thị trường.",
      icon: <Briefcase className="w-6 h-6 text-midnight-slate mb-3 relative z-10" />,
      className: "col-span-1 bg-pure-white text-midnight-slate shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group",
      textColor: "text-midnight-slate"
    },
    {
      id: "investment",
      title: "K-INVESTMENT",
      description: "Đầu tư dự án chiến lược với ROI cao, cơ hội hợp tác đầu tư Quốc tế.",
      icon: <TrendingUp className="w-6 h-6 text-midnight-slate mb-3 relative z-10" />,
      className: "col-span-1 bg-pure-white text-midnight-slate shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group",
      textColor: "text-midnight-slate"
    },
    {
      id: "smart-farm",
      title: "K-SMART FARM",
      description: "Nông nghiệp thông minh ứng dụng Smart Container từ Hàn Quốc. Dâu tây Geumsil, nấm chất lượng cao.",
      icon: <Sprout className="w-6 h-6 text-premium-gold mb-3 relative z-10" />,
      className: "col-span-1 bg-midnight-slate text-pure-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col justify-between",
      image: "/images/smart_farm.png",
      textColor: "text-pure-white"
    },
    {
      id: "entertainment",
      title: "K-7 ENTERTAINMENT",
      description: "Tổ chức sự kiện – Lễ hội văn hoá – Hợp tác sự kiện Quốc tế.",
      icon: <PartyPopper className="w-6 h-6 text-midnight-slate mb-3 relative z-10" />,
      className: "col-span-1 bg-pure-white text-midnight-slate shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group",
      textColor: "text-midnight-slate"
    },
    // ── TRADING ──
    {
      id: "trading",
      title: "K-TRADING",
      description: "FMCG · Nông sản · Thuỷ hải sản · Năng lượng — Thương mại quốc tế đa ngành kết nối Việt Nam với thế giới.",
      icon: <ShoppingBag className="w-6 h-6 text-midnight-slate mb-3 relative z-10" />,
      className: "col-span-1 md:col-span-2 bg-pure-white text-midnight-slate shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center gap-4 relative overflow-hidden group",
      textColor: "text-midnight-slate"
    },
    {
      id: "duty-free",
      title: "K-DUTY FREE",
      description: "Premium duty-free services for international tourists with authentic cosmetics & fashion.",
      icon: <Store className="w-6 h-6 text-midnight-slate mb-3 relative z-10" />,
      className: "col-span-1 md:col-span-2 bg-pure-white text-midnight-slate shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center gap-4 relative overflow-hidden group",
      textColor: "text-midnight-slate"
    },
  ];

  return (
    <section id="ecosystem" className="py-24 bg-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-midnight-slate">
              Our Ecosystem
            </h2>
            <div className="w-24 h-1 bg-premium-gold mx-auto mb-8" />
            <p className="text-lg md:text-xl text-foreground/80 font-light">
              An integrated network of elite services bridging Vietnam, South Korea, and the world.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
          {businessLines.map((line, index) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-6 md:p-8 border border-black/5 ${line.className} cursor-pointer group`}
              onClick={() => scrollToContact(line.title)}
            >
              {line.image && (
                <>
                  <img src={line.image} alt={line.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate via-midnight-slate/60 to-transparent z-0" />
                </>
              )}
              <div className="relative z-10 flex flex-col h-full">
                {line.icon}
                <h3 className={`font-serif font-bold mb-2 ${line.textColor} ${line.isFlagship ? "text-3xl md:text-4xl" : "text-xl"}`}>
                  {line.title}
                </h3>
                <p className={`${line.textColor}/80 ${line.isFlagship ? "text-lg md:text-xl max-w-md" : "text-sm md:text-base"} mb-6`}>
                  {line.description}
                </p>
                <div className={`mt-auto flex items-center gap-2 font-medium transition-colors ${line.isFlagship || line.image ? "text-premium-gold group-hover:text-pure-white" : "text-premium-gold group-hover:text-midnight-slate"}`}>
                  <span className="uppercase text-sm tracking-wider">Explore</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
