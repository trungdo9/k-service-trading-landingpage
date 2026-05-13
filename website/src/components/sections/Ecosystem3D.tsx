"use client";

import React, { useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Sphere, Line, Html } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { ArrowRight, Leaf, ShoppingBag, Store, Sprout, Briefcase, TrendingUp, PartyPopper } from "lucide-react";

const businessLines = [
  // Services first
  { id: "counsel", title: "K-COUNSEL", icon: <Briefcase className="w-5 h-5" />, desc: "Tư vấn tài chính đầu tư đa ngành – Liên kết quốc tế." },
  { id: "investment", title: "K-INVESTMENT", icon: <TrendingUp className="w-5 h-5" />, desc: "Đầu tư chiến lược ROI >20% – Hợp tác Quốc tế." },
  { id: "smart-farm", title: "K-SMART FARM", icon: <Sprout className="w-5 h-5" />, desc: "Nông nghiệp thông minh Smart Container từ Hàn Quốc." },
  { id: "entertainment", title: "K-7 ENTERTAINMENT", icon: <PartyPopper className="w-5 h-5" />, desc: "Sự kiện Quốc tế – Lễ hội văn hoá – Content." },
  // Trading / Flagship
  { id: "ecotourism", title: "K-ECOTOURISM", icon: <Leaf className="w-5 h-5" />, desc: "Luxury travel & VIP wellness." },
  { id: "trading", title: "K-TRADING", icon: <ShoppingBag className="w-5 h-5" />, desc: "FMCG · Nông sản · Thuỷ hải sản · Năng lượng." },
  { id: "duty-free", title: "K-DUTY FREE", icon: <Store className="w-5 h-5" />, desc: "Authentic cosmetics & fashion." },
];

const orbitDataMap: Record<string, any> = {
  ecotourism: { xRadius: 3.5, yRadius: 2.0, rotX: Math.PI / 6, rotY: 0, rotZ: Math.PI / 4, speed: 0.035, color: "#4CAF50" },
  trading: { xRadius: 4.0, yRadius: 2.5, rotX: -Math.PI / 4, rotY: Math.PI / 8, rotZ: -Math.PI / 6, speed: 0.028, color: "#2196F3" },
  "duty-free": { xRadius: 4.5, yRadius: 1.8, rotX: Math.PI / 3, rotY: -Math.PI / 6, rotZ: Math.PI / 8, speed: 0.042, color: "#E91E63" },
  "smart-farm": { xRadius: 3.0, yRadius: 3.0, rotX: 0, rotY: Math.PI / 3, rotZ: -Math.PI / 4, speed: 0.049, color: "#8BC34A" },
  counsel: { xRadius: 5.0, yRadius: 1.5, rotX: -Math.PI / 6, rotY: -Math.PI / 3, rotZ: 0, speed: 0.021, color: "#9C27B0" },
  investment: { xRadius: 5.5, yRadius: 2.8, rotX: Math.PI / 8, rotY: Math.PI / 4, rotZ: Math.PI / 3, speed: 0.0315, color: "#FFC107" },
  entertainment: { xRadius: 4.2, yRadius: 3.5, rotX: -Math.PI / 3, rotY: 0, rotZ: -Math.PI / 8, speed: 0.0385, color: "#FF5722" },
};

const SatelliteSystem = ({ line, activeId, setActiveId }: { line: any, activeId: string | null, setActiveId: (id: string | null) => void }) => {
  const { xRadius, yRadius, rotX, rotY, rotZ, speed, color } = orbitDataMap[line.id];
  
  const curve = useMemo(() => new THREE.EllipseCurve(0, 0, xRadius, yRadius, 0, 2 * Math.PI, false, 0), [xRadius, yRadius]);
  const points = useMemo(() => curve.getPoints(64).map(p => new THREE.Vector3(p.x, p.y, 0)), [curve]);
  
  const satelliteRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const particleRef = useRef<THREE.Mesh>(null);
  
  // Track orbit progress manually to avoid teleporting when speed changes
  const orbitProgress = useRef(Math.random()); 
  const currentSpeed = useRef(speed);
  
  const isActive = activeId === line.id;
  const isAnyActive = activeId !== null;
  const targetColor = isActive ? color : (isAnyActive ? "#333333" : color);
  const opacity = isActive ? 1 : (isAnyActive ? 0.1 : 0.4);

  // Random offset for particle
  const timeOffset = useMemo(() => Math.random() * 100, []);

  useFrame((state, delta) => {
    // 1. Smoothly interpolate speed
    const targetSpeed = isActive ? speed * 0.02 : speed; // Slow down significantly when hovered
    currentSpeed.current = THREE.MathUtils.lerp(currentSpeed.current, targetSpeed, 0.1);
    
    // 2. Accumulate progress
    orbitProgress.current = (orbitProgress.current + (currentSpeed.current * delta)) % 1;
    
    if (satelliteRef.current) {
      const point = curve.getPoint(orbitProgress.current);
      satelliteRef.current.position.set(point.x, point.y, 0);
    }
    
    // 3. Smooth scale for the sphere
    if (sphereRef.current) {
      const targetScale = isActive ? 1.5 : 1.0;
      sphereRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
    }
    
    if (particleRef.current) {
      // Particles travel much faster, can use absolute time
      const pt = ((state.clock.getElapsedTime() * speed * 3) + timeOffset) % 1;
      const pPoint = curve.getPoint(pt);
      particleRef.current.position.set(pPoint.x, pPoint.y, 0);
    }
  });

  return (
    <group rotation={[rotX, rotY, rotZ]}>
      {/* Orbit Path */}
      <Line 
        points={points} 
        color={targetColor} 
        transparent 
        opacity={isActive ? 0.6 : (isAnyActive ? 0.1 : 0.2)} 
        lineWidth={isActive ? 2 : 1} 
      />
      
      {/* Data Particle running along the orbit */}
      <Sphere ref={particleRef} args={[0.06, 16, 16]}>
        <meshBasicMaterial color={targetColor} transparent opacity={opacity} />
      </Sphere>

      {/* Satellite Node */}
      <group 
        ref={satelliteRef} 
        onPointerEnter={(e) => { e.stopPropagation(); setActiveId(line.id); document.body.style.cursor = 'pointer'; }}
        onPointerLeave={(e) => { setActiveId(null); document.body.style.cursor = 'auto'; }}
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      >
        <Sphere ref={sphereRef} args={[0.4, 32, 32]}>
          <meshPhysicalMaterial 
            color={targetColor} 
            transparent 
            opacity={isActive ? 0.8 : 0.6} 
            transmission={0.9} 
            roughness={0.1} 
            thickness={0.5} 
          />
        </Sphere>
        {isActive && <pointLight color={color} intensity={2} distance={5} />}
        
        {/* Icon & Label */}
        <Html center transform={false} style={{ pointerEvents: 'none' }}>
          <div className={`transition-all duration-300 flex flex-col items-center justify-center ${isActive ? 'scale-110' : 'scale-100 opacity-80'}`}>
            <div className={`p-2 rounded-full mb-1 backdrop-blur-md ${isActive ? 'bg-midnight-slate/80 text-pure-white border border-premium-gold/50 shadow-[0_0_15px_rgba(209,176,90,0.5)]' : 'bg-pure-white/20 text-pure-white shadow-lg'}`}>
              {line.icon}
            </div>
            
            {!isActive && (
              <span className="text-[9px] md:text-[10px] font-bold text-pure-white/90 tracking-widest uppercase bg-midnight-slate/60 px-2 py-0.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg whitespace-nowrap">
                {line.title}
              </span>
            )}

            {isActive && (
              <div className="bg-midnight-slate/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg whitespace-nowrap text-center shadow-2xl mt-1">
                <p className="text-pure-white font-serif font-bold text-sm">{line.title}</p>
                <p className="text-premium-gold text-xs">{line.desc}</p>
              </div>
            )}
          </div>
        </Html>
      </group>
    </group>
  );
};

const Core = () => {
  return (
    <group>
      <Sphere args={[1.2, 64, 64]}>
        <meshStandardMaterial color="#0a0f0d" roughness={0.3} metalness={0.9} />
      </Sphere>
      {/* Outer atmospheric glow */}
      <Sphere args={[1.4, 32, 32]}>
        <meshBasicMaterial color="#D1B05A" transparent opacity={0.15} side={THREE.BackSide} />
      </Sphere>
      <Html center transform={false} pointerEvents="none">
        <div className="flex flex-col items-center justify-center text-center w-48">
          <span className="text-[9px] tracking-[0.2em] text-premium-gold uppercase mb-1">K Service Trading</span>
          <span className="text-2xl font-serif font-bold text-pure-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">CORE</span>
        </div>
      </Html>
    </group>
  );
};

export function Ecosystem3D() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="ecosystem-3d" className="relative h-screen bg-[#030605] overflow-hidden hidden md:block">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
          <color attach="background" args={["#030605"]} />
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <Environment preset="city" />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate={!activeId} 
            autoRotateSpeed={0.5} 
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
          />

          <Core />
          
          {businessLines.map((line) => (
            <SatelliteSystem 
              key={line.id} 
              line={line} 
              activeId={activeId} 
              setActiveId={setActiveId} 
            />
          ))}
        </Canvas>
      </div>

      {/* Header Overlay */}
      <div className="absolute top-0 left-0 w-full p-4 sm:p-8 md:p-12 z-10 pointer-events-none flex flex-wrap gap-4 items-start justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-premium-gold" />
            <span className="text-premium-gold font-medium tracking-widest uppercase text-xs">
              Orbital Network
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-pure-white">
            Our <span className="text-premium-gold">Ecosystem</span>
          </h2>
          <p className="text-pure-white/70 font-light mt-2 max-w-md">
            Interact with our satellites to explore the comprehensive network of VIP services we provide globally.
          </p>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="mt-6 md:mt-0 bg-midnight-slate/60 backdrop-blur-md border border-premium-gold/30 rounded-xl p-4 pointer-events-auto max-w-sm flex items-center gap-4 shadow-2xl"
        >
           <img src="/images/globe_moss.png" alt="Sustainability" className="w-16 h-16 object-cover rounded-lg border border-premium-gold/20" />
           <div>
             <p className="text-xs text-premium-gold uppercase tracking-widest mb-1 font-semibold">Note / Ghi chú</p>
             <p className="text-sm text-pure-white/80 leading-snug">
               Each satellite represents an interconnected pillar of our sustainable global ecosystem.
             </p>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
