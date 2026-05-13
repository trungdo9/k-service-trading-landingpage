"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Leaf, Waves, Flame, ChevronRight, ArrowRight } from "lucide-react";

const tradingCategories = [
  {
    id: "fmcg",
    label: "FMCG",
    title: "Consumer Goods",
    titleVi: "Hàng tiêu dùng nhanh",
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "#2196F3",
    bgClass: "from-[#0d2137] to-[#1a3a5c]",
    accentClass: "bg-[#2196F3]",
    items: [
      { name: "Consumer Goods", nameVi: "Hàng tiêu dùng nội địa" },
      { name: "Imported Goods", nameVi: "Hàng nhập khẩu cao cấp" },
    ],
    desc: "Phân phối hàng tiêu dùng nhanh (FMCG) nội địa & nhập khẩu. Đối tác chiến lược từ Hàn Quốc, Châu Âu và Mỹ.",
    stat: "50+ SKUs",
    statLabel: "Sản phẩm phân phối",
    image: "/images/fmcg_goods.png",
  },
  {
    id: "agri",
    label: "AGRI",
    title: "Agricultural Products",
    titleVi: "Nông sản Việt Nam",
    icon: <Leaf className="w-6 h-6" />,
    color: "#4CAF50",
    bgClass: "from-[#0d1f12] to-[#1a3c20]",
    accentClass: "bg-[#4CAF50]",
    items: [
      { name: "Fresh Produce", nameVi: "Nông sản tươi" },
      { name: "Dried Produce", nameVi: "Nông sản sấy" },
      { name: "Coconut", nameVi: "Dừa & chế phẩm" },
      { name: "Durian", nameVi: "Sầu riêng xuất khẩu" },
    ],
    desc: "Nông sản tươi & nông sản sấy đạt chuẩn xuất khẩu. Chuyên sâu vào dừa, sầu riêng và các cây trồng đặc sản miền Nam.",
    stat: "VietGAP",
    statLabel: "Tiêu chuẩn chất lượng",
    image: "/images/agri_produce.png",
  },
  {
    id: "seafood",
    label: "THUỶ HẢI SẢN",
    title: "Seafood",
    titleVi: "Thuỷ hải sản",
    icon: <Waves className="w-6 h-6" />,
    color: "#00BCD4",
    bgClass: "from-[#061921] to-[#0d3040]",
    accentClass: "bg-[#00BCD4]",
    items: [
      { name: "Shrimp", nameVi: "Tôm (thẻ, sú, hùm)" },
      { name: "Fish", nameVi: "Cá (basa, tra, ngừ...)" },
    ],
    desc: "Xuất khẩu tôm và cá đạt tiêu chuẩn quốc tế ASC/BAP. Chuỗi cung ứng lạnh hiện đại, đảm bảo độ tươi và an toàn thực phẩm.",
    stat: "ASC/BAP",
    statLabel: "Chứng nhận quốc tế",
    image: "/images/seafood.png",
  },
  {
    id: "energy",
    label: "NĂNG LƯỢNG",
    title: "Energy",
    titleVi: "Năng lượng xanh",
    icon: <Flame className="w-6 h-6" />,
    color: "#FF9800",
    bgClass: "from-[#1f1200] to-[#3d2400]",
    accentClass: "bg-[#FF9800]",
    items: [
      { name: "Wood Pellets", nameVi: "Viên nén gỗ (biomass)" },
    ],
    desc: "Sản xuất và xuất khẩu viên nén sinh khối (wood pellets) đạt chuẩn ENplus A1. Giải pháp năng lượng tái tạo cho thị trường Hàn Quốc, Nhật Bản và Châu Âu.",
    stat: "ENplus A1",
    statLabel: "Tiêu chuẩn châu Âu",
    image: "/images/wood_pellets.png",
  },
];

export function Trading() {
  const [activeId, setActiveId] = useState<string>("fmcg");
  const active = tradingCategories.find((c) => c.id === activeId)!;

  return (
    <section id="trading" className="py-24 bg-midnight-slate text-pure-white overflow-hidden relative">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none transition-all duration-700"
        style={{ background: `radial-gradient(ellipse 60% 50% at 70% 50%, ${active.color}55, transparent)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-premium-gold" />
            <span className="text-premium-gold font-medium tracking-widest uppercase text-xs">
              Import · Export · Distribution
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-pure-white leading-tight">
              K-<span className="text-premium-gold">Trading</span>
            </h2>
            <p className="text-pure-white/60 max-w-md text-base md:text-lg font-light">
              Thương mại quốc tế đa ngành — Kết nối Việt Nam với thị trường Hàn Quốc, Nhật Bản và Đông Nam Á.
            </p>
          </div>
        </motion.div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {tradingCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border ${
                activeId === cat.id
                  ? "text-midnight-slate border-transparent shadow-lg"
                  : "bg-transparent text-pure-white/60 border-white/10 hover:border-white/30 hover:text-pure-white"
              }`}
              style={activeId === cat.id ? { backgroundColor: cat.color, borderColor: cat.color } : {}}
            >
              <span className="transition-colors">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className={`rounded-3xl bg-gradient-to-br ${active.bgClass} border border-white/10 overflow-hidden`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
              {/* Left: Info */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${active.color}22`, color: active.color }}
                    >
                      {active.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest" style={{ color: active.color }}>
                        K-Trading
                      </p>
                      <h3 className="text-2xl font-serif font-bold text-pure-white">{active.titleVi}</h3>
                    </div>
                  </div>

                  <p className="text-pure-white/70 leading-relaxed mb-8 text-base">{active.desc}</p>

                  {/* Sub-items */}
                  <div className="space-y-3 mb-8">
                    {active.items.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-center gap-3"
                      >
                        <ChevronRight className="w-4 h-4 flex-shrink-0" style={{ color: active.color }} />
                        <span className="text-pure-white/90 text-sm font-medium">
                          {item.nameVi}
                          <span className="text-pure-white/40 ml-2 font-normal">· {item.name}</span>
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Stat + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="text-3xl font-serif font-bold mb-1"
                      style={{ color: active.color }}
                    >
                      {active.stat}
                    </div>
                    <div className="text-pure-white/50 text-sm">{active.statLabel}</div>
                  </div>
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:gap-3 hover:shadow-lg"
                    style={{ backgroundColor: active.color, color: "#0a0f0d" }}
                  >
                    Liên hệ
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right: Visual Dividers */}
              <div className="hidden lg:flex flex-col p-8 gap-4 items-center justify-center relative border-l border-white/5">
                {/* Decorative grid of product tags */}
                <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                  {active.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      className={`rounded-2xl p-5 border border-white/5 bg-white/5 backdrop-blur-sm flex flex-col gap-2 ${i === 0 && active.items.length === 1 ? "col-span-2" : ""}`}
                    >
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${active.color}22`, color: active.color }}
                      >
                        {active.icon}
                      </div>
                      <p className="text-pure-white font-semibold text-sm leading-snug">{item.nameVi}</p>
                      <p className="text-pure-white/40 text-xs">{item.name}</p>
                    </motion.div>
                  ))}

                  {/* Origin badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="col-span-2 rounded-2xl p-5 border flex items-center gap-4"
                    style={{ borderColor: `${active.color}40`, backgroundColor: `${active.color}0d` }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-serif font-bold text-lg"
                      style={{ backgroundColor: `${active.color}22`, color: active.color }}
                    >
                      🇻🇳
                    </div>
                    <div>
                      <p className="text-pure-white font-semibold text-sm">Made in Vietnam</p>
                      <p className="text-pure-white/50 text-xs">Xuất khẩu đạt chuẩn quốc tế</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom navigation dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {tradingCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: activeId === cat.id ? cat.color : "rgba(255,255,255,0.2)",
                transform: activeId === cat.id ? "scale(1.5)" : "scale(1)",
              }}
              aria-label={cat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
