import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Play, Volume2, VolumeX } from 'lucide-react';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.1]);
  const y = useTransform(scrollY, [0, 600], [0, 100]);

  const [hudData, setHudData] = useState({
    temp: '22°C',
    airflow: 'OPTIMAL',
    system: 'ONLINE',
    efficiency: '94%',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setHudData(prev => ({
        ...prev,
        temp: `${21 + Math.floor(Math.random() * 3)}°C`,
        efficiency: `${92 + Math.floor(Math.random() * 5)}%`,
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background - Cinematic dark gradient with mechanical room image */}
      <motion.div 
        style={{ scale, y }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#111111]" />
        
        {/* Hero background image */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(https://image.qwenlm.ai/generated-images/2440b2a7-f427-4dc4-9320-cbfe4e8ceb02/_result.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/50 to-[#050505]/90" />
        
        {/* Abstract architectural elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-[#BFC3C7]/10 rotate-45" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-[#FF5A00]/10 rotate-12" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 border border-[#BFC3C7]/5 -rotate-12" />
        </div>

        {/* Light streaks */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#FF5A00]/20 to-transparent" />
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#BFC3C7]/10 to-transparent" />
        
        {/* Ambient glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF5A00]/5 rounded-full blur-3xl" />
      </motion.div>

      {/* HUD Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left HUD */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute top-24 left-6 md:left-12 hud-panel p-4 rounded"
        >
          <div className="tech-label mb-2">TEMPERATURE</div>
          <div className="font-heading text-2xl font-bold text-[#FF5A00]">{hudData.temp}</div>
          <div className="hud-line mt-2" />
          <div className="tech-label mt-2">72°F / {hudData.temp}</div>
        </motion.div>

        {/* Top-right HUD */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute top-24 right-6 md:right-12 hud-panel p-4 rounded"
        >
          <div className="tech-label mb-2">AIRFLOW</div>
          <div className="font-heading text-lg font-bold text-[#F4F4F4]">{hudData.airflow}</div>
          <div className="hud-line mt-2" />
          <div className="tech-label mt-2">SYSTEM: {hudData.system}</div>
        </motion.div>

        {/* Bottom-left HUD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="absolute bottom-24 left-6 md:left-12 hud-panel p-4 rounded"
        >
          <div className="tech-label mb-2">EFFICIENCY</div>
          <div className="font-heading text-2xl font-bold text-[#F4F4F4]">{hudData.efficiency}</div>
          <div className="tech-label mt-1">VISUAL DEMONSTRATION</div>
        </motion.div>

        {/* Corner markers */}
        <div className="absolute top-20 left-6 md:left-12 w-8 h-8 border-l-2 border-t-2 border-[#FF5A00]/40" />
        <div className="absolute top-20 right-6 md:right-12 w-8 h-8 border-r-2 border-t-2 border-[#FF5A00]/40" />
        <div className="absolute bottom-20 left-6 md:left-12 w-8 h-8 border-l-2 border-b-2 border-[#FF5A00]/40" />
        <div className="absolute bottom-20 right-6 md:right-12 w-8 h-8 border-r-2 border-b-2 border-[#FF5A00]/40" />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <span className="tech-label text-[#FF5A00] tracking-[0.3em]">OAKVILLE • HALTON REGION</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mt-6 leading-[0.9] tracking-tight"
        >
          <span className="gradient-text">COMFORT.</span>
          <br />
          <span className="accent-gradient">ENGINEERED.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-[#BFC3C7] text-lg md:text-xl mt-8 max-w-2xl leading-relaxed"
        >
          Heating, cooling and indoor-air solutions designed around the way your home actually lives.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a 
            href="#quote" 
            className="px-8 py-4 bg-[#FF5A00] text-white font-heading font-bold text-sm tracking-wider rounded hover:bg-[#e65000] transition-all glow-accent flex items-center justify-center gap-2"
          >
            BOOK SERVICE
          </a>
          <a 
            href="#quote" 
            className="px-8 py-4 border border-[#BFC3C7]/30 text-[#F4F4F4] font-heading font-bold text-sm tracking-wider rounded hover:border-[#FF5A00] hover:text-[#FF5A00] transition-all flex items-center justify-center gap-2"
          >
            GET A QUOTE
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="tech-label">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-[#BFC3C7]" />
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FF5A00]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    </section>
  );
}
