"use client";

import React from "react";
import { motion } from "framer-motion";
import { Network, Globe2, TrendingUp, Layers3, ArrowRight } from "lucide-react";

const pillars = [
  {
    id: "ecosystem",
    number: "01",
    icon: <Layers3 className="w-7 h-7" />,
    title: "Hệ sinh thái tích hợp đa ngành",
    titleEn: "Integrated Multi-sector Ecosystem",
    desc: "Du lịch nghỉ dưỡng K-Ecotourism → Nông nghiệp thông minh K-Smart Farm → Thương mại & phân phối K-Trading → Giải trí văn hoá K-7 Entertainment — tất cả cộng hưởng lẫn nhau, tạo ra giá trị bền vững vượt trội.",
    highlight: "4 ngành cộng hưởng",
  },
  {
    id: "network",
    number: "02",
    icon: <Network className="w-7 h-7" />,
    title: "Mạng lưới đối tác chiến lược quốc tế",
    titleEn: "International Strategic Partnership",
    desc: "Hợp tác R&D nông nghiệp thông minh (Smart Container từ Hàn Quốc), hàng hóa cao cấp, du lịch luxury và giải trí văn hoá. Chuyên gia quốc tế và đối tác khu vực với kinh nghiệm hàng thập kỷ.",
    highlight: "50+ đối tác toàn cầu",
  },
  {
    id: "trends",
    number: "03",
    icon: <Globe2 className="w-7 h-7" />,
    title: "Nắm bắt xu hướng toàn cầu",
    titleEn: "Leveraging Global Trends",
    desc: "Du lịch bền vững · Nông nghiệp công nghệ cao · Xu hướng tiêu dùng Hàn Quốc & Đông Nam Á · Làn sóng \"Go Global\" của nhà đầu tư quốc tế vào Việt Nam — thị trường tăng trưởng năng động nhất khu vực.",
    highlight: "Vietnam Go-Global Wave",
  },
  {
    id: "roi",
    number: "04",
    icon: <TrendingUp className="w-7 h-7" />,
    title: "ROI cao & Bền vững",
    titleEn: "High ROI & Sustainability",
    desc: "Hoàn vốn nhanh (Smart Farm: 12–18 tháng). Dòng tiền tức thì từ du lịch. Đa dạng hoá doanh thu giảm thiểu rủi ro. ROI kỳ vọng >20%/năm cho các dự án chiến lược.",
    highlight: ">20% ROI / năm",
  },
];

export function InvestorPartner() {
  return (
    <section id="investor-partner" className="py-24 bg-eco-cream relative overflow-hidden">
      {/* Decorative gold accent top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-premium-gold/40 to-transparent" />

      {/* Subtle mesh bg */}
      <div className="absolute inset-0 mesh-bg opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-8 h-px bg-premium-gold" />
            <span className="text-premium-gold font-medium tracking-widest uppercase text-xs">
              Slice 11 · Profile K Service Trading
            </span>
            <div className="w-8 h-px bg-premium-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-midnight-slate leading-tight mb-4">
            K Service Trading —{" "}
            <span className="text-premium-gold">Đối tác lý tưởng</span>
            <br className="hidden sm:block" /> cho nhà đầu tư
          </h2>
          <p className="text-foreground/70 text-lg font-light leading-relaxed">
            Cửa ngõ chiến lược mở ra cơ hội tại thị trường Việt Nam — vùng tăng trưởng năng động nhất Đông Nam Á.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group bg-pure-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-6 text-7xl font-serif font-bold text-premium-gold/8 select-none pointer-events-none leading-none">
                {pillar.number}
              </div>

              {/* Gold top accent bar */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-premium-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-midnight-slate flex items-center justify-center text-premium-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-premium-gold/10 border border-premium-gold/20 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-premium-gold" />
                  <span className="text-xs font-semibold text-premium-gold tracking-wide">{pillar.highlight}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-serif font-bold text-midnight-slate mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-foreground/40 uppercase tracking-widest mb-4">{pillar.titleEn}</p>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 bg-midnight-slate rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-premium-gold/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-premium-gold/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 text-center md:text-left">
            <p className="text-xs uppercase tracking-widest text-premium-gold mb-2 font-semibold">
              Strategic Cooperation · Unlock the Value
            </p>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-pure-white leading-snug">
              Sẵn sàng cộng hưởng cùng K Service Trading?
            </h3>
            <p className="text-pure-white/60 mt-2 max-w-xl">
              Kết nối với đội ngũ chuyên gia để khám phá cơ hội hợp tác phù hợp với mục tiêu đầu tư của bạn.
            </p>
          </div>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="relative z-10 flex items-center gap-3 px-8 py-4 bg-premium-gold text-midnight-slate font-bold rounded-full hover:shadow-[0_0_30px_rgba(209,176,90,0.4)] transition-all duration-300 hover:gap-4 whitespace-nowrap flex-shrink-0"
          >
            Kết nối ngay
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
