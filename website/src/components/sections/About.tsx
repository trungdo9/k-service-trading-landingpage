"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Leaf, Award, ShieldCheck, Globe2, Zap } from "lucide-react";

const coreValues = [
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Innovation",
    titleVi: "Đổi mới",
    desc: "Applying AI, big data, and digital technology to transform ideas into competitive advantages.",
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "Sustainability",
    titleVi: "Bền vững",
    desc: "Prioritizing ESG to promote environmental and community benefits for the long term.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Professionalism",
    titleVi: "Chuyên nghiệp",
    desc: "An international advisory team with decades of expertise across key global markets.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Transparency",
    titleVi: "Minh bạch",
    desc: "Building strong trust in every investment decision and partnership engagement.",
  },
  {
    icon: <Globe2 className="w-5 h-5" />,
    title: "International Cooperation",
    titleVi: "Hợp tác quốc tế",
    desc: "Building strategic relationships across Vietnam, South Korea, and Southeast Asia to create long-term shared value.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Efficiency",
    titleVi: "Hiệu quả",
    desc: "Focusing on high ROI and operational excellence — superior value for partners and investors.",
  },
];

export function About() {
  const achievements = [
    { label: "Partners Worldwide", value: "50+" },
    { label: "ROI Average", value: ">20%" },
    { label: "Years of Excellence", value: "10+" },
    { label: "Premium Services", value: "7" },
  ];

  return (
    <section id="about" className="py-24 bg-eco-cream mesh-bg text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Introduction ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-midnight-slate">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-premium-gold mx-auto mb-8" />
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
              K Service Trading Co., Ltd. is a pioneer in multi-sector trade and service in Vietnam,
              with deep expertise in international investment consulting, strategic bridging between
              Vietnam, South Korea, and Southeast Asia.
            </p>
          </motion.div>
        </div>

        {/* ── Key Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-midnight-slate/10 py-12 mb-20"
        >
          {achievements.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-premium-gold mb-2">
                {item.value}
              </div>
              <div className="text-sm md:text-base font-medium text-midnight-slate uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Vision & Mission ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          {/* Vision */}
          <div className="bg-midnight-slate rounded-3xl p-8 md:p-10 text-pure-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-premium-gold/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-premium-gold" />
                <span className="text-premium-gold text-xs font-semibold uppercase tracking-widest">Vision · Tầm nhìn</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-pure-white mb-4 leading-snug">
                Cửa ngõ chiến lược của Đông Nam Á
              </h3>
              <p className="text-pure-white/70 leading-relaxed">
                Trở thành công ty thương mại và dịch vụ đa ngành hàng đầu Đông Nam Á — cửa ngõ chiến lược cho hệ sinh thái quốc tế tại Việt Nam. K Service Trading không chỉ mang lại giá trị kinh tế vượt trội cho đối tác và nhà đầu tư, mà còn đóng góp lợi ích xã hội và bảo vệ môi trường lâu dài.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-pure-white rounded-3xl p-8 md:p-10 border border-black/5 shadow-sm relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-premium-gold/5 rounded-full blur-[60px] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-premium-gold" />
                <span className="text-premium-gold text-xs font-semibold uppercase tracking-widest">Mission · Sứ mệnh</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-midnight-slate mb-4 leading-snug">
                Giải pháp toàn diện & bền vững
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Cung cấp giải pháp toàn diện, chuyên nghiệp và bền vững trong tư vấn đầu tư, thương mại quốc tế và phát triển dịch vụ du lịch cao cấp. Tích hợp nông nghiệp công nghệ cao, kết nối đầu tư bất động sản nghỉ dưỡng và giải trí — tạo ra giá trị tối ưu cho đối tác từ phân phối hàng tiêu dùng đến các ngành hỗ trợ.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Core Values ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-px bg-premium-gold" />
              <span className="text-premium-gold text-xs font-semibold uppercase tracking-widest">Core Values · Giá trị cốt lõi</span>
              <div className="w-8 h-px bg-premium-gold" />
            </div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-midnight-slate">
              6 Trụ cột nền tảng
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map((val, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex gap-4 bg-pure-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-midnight-slate flex items-center justify-center text-premium-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {val.icon}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-midnight-slate mb-0.5">
                    {val.titleVi}
                    <span className="text-foreground/30 font-sans font-normal text-xs ml-2">· {val.title}</span>
                  </h4>
                  <p className="text-foreground/65 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
